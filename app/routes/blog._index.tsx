import { json, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
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
        {data.map((post) => (
          <li key={post.slug} className="space-y-2">
            <h3 className="text-3xl font-bold text-primary">
              {post.frontmatter.title}
            </h3>
            <p>{post.frontmatter.description}</p>
            <div>
              <Link
                className="underlined text-sm text-secondary"
                to={`/blog/${post.slug}`}
              >
                Read the article
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
