import { json, MetaFunction } from "@remix-run/node";
import {
  Link,
  unstable_useViewTransitionState,
  useLoaderData,
} from "@remix-run/react";
import { getPosts } from "~/mdx.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Alif | Blog" },
    { name: "description", content: "Some writings of Alif Haider" },
  ];
};

export async function loader() {
  const data = await getPosts();

  return json(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
    },
  });
}

export default function Blogs() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto mt-10 max-w-5xl space-y-10">
      <h1 className="text-7xl font-bold">Blog</h1>

      <p>
        One day I will write blogs and here will be a list of them. Since, I
        have no blog post yet, I am adding a test post. Cause why not 🤣 This
        blogs uses mdx files in a content directory, I am reading files using{" "}
        <pre>
          <code>fs</code>
        </pre>{" "}
        and the using{" "}
        <pre>
          <code>mdx-bundler</code>
        </pre>
        to bundle mdx files.
      </p>

      <ul className="space-y-6">
        {data.map((post) => {
          const to = `/blog/${post.slug}`;
          const vt = unstable_useViewTransitionState(to);
          return (
            <li key={post.slug} className="space-y-2">
              <Link
                to={to}
                style={{
                  viewTransitionName: vt ? "blog-title" : "none",
                }}
                unstable_viewTransition
                className="underlined text-3xl font-bold text-secondary"
              >
                {post.frontmatter.title}
              </Link>
              <p>{post.frontmatter.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
