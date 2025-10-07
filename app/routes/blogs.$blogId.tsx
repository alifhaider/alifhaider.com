import {
  json,
  type MetaFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPost } from "~/mdx.server";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { Button } from "~/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.blogId, "No blogId provided");

  const post = await getPost(params.blogId);

  if (post) {
    const { frontmatter, code } = post;
    return json({ frontmatter, code });
  } else {
    throw new Response("Not found", { status: 404 });
  }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: "Blog / Alif" },
    { name: "description", content: data?.frontmatter.description },
  ];
};

export default function Blog() {
  const { code, frontmatter } = useLoaderData<typeof loader>();
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, 20]);

  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <main>
      <header className="border-border/50 bg-background/50 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link to="/blogs">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Posts
            </Button>
          </Link>
        </div>
      </header>

      <article className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ y: headerY }}
          >
            <div className="mb-6 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-accent/10 border-accent/20 text-accent rounded-full border px-3 py-1.5 text-xs font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <h1 className="from-foreground via-accent to-foreground animate-gradient mb-6 bg-gradient-to-r bg-[length:200%_auto] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              {frontmatter.title}
            </h1>

            <div className="text-muted-foreground border-border/50 mb-12 flex items-center gap-6 border-b pb-8 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="text-accent h-4 w-4" />
                <span>
                  {new Date(frontmatter.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-accent h-4 w-4" />
                <span>{frontmatter.readTime}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-muted-foreground space-y-6 leading-relaxed">
                <Component />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-border/50 mt-16 border-t pt-8 text-center"
          >
            <Link to="/blogs" unstable_viewTransition>
              <Button size="lg" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to All Posts
              </Button>
            </Link>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
