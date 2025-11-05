import { data, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData, useViewTransitionState } from "@remix-run/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";
import { getPosts } from "~/mdx.server";
import { motion } from "framer-motion";
import { Card } from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Blogs / Alif" },
    { name: "description", content: "Some writings of Alif Haider" },
  ];
};

export async function loader() {
  const posts = await getPosts();

  return data(posts, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
    },
  });
}

export default function Blogs() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <main className="bg-background text-foreground min-h-screen">
      <header className="border-border border-b">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="from-foreground to-accent mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Blog
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Thoughts on web development, game development, and everything in
              between.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="px-6 py-8 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {data.map((post, index) => {
              return <BlogItem post={post} key={post.slug} index={index} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

type LoaderData = Awaited<ReturnType<typeof getPosts>>;

const BlogItem = ({
  post,
  index,
}: {
  post: LoaderData[number];
  index: number;
}) => {
  const to = `/blogs/${post.slug}`;

  const vt = useViewTransitionState(to);
  return (
    <motion.div
      key={post.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link to={to} viewTransition>
        <Card className="hover:border-accent/50 group bg-card/50 hover:shadow-accent/10 border-border/50 cursor-pointer p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
          <div className="mb-3 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="bg-accent/10 border-accent/20 text-accent rounded border px-2 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2
            className="group-hover:text-accent mb-3 text-2xl font-bold transition-colors"
            style={{
              viewTransitionName: vt ? "blog-title" : "none",
            }}
          >
            {post.frontmatter.title}
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {post.frontmatter.description}
          </p>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.frontmatter.readTime}</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
