import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/mdx.server";

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
        have no blog post yet, I amm adding a test case. Cause why not 🤣
      </p>

      <ul>
        {data.map((post) => (
          <li key={post.slug} className="space-y-3">
            <h3 className="text-3xl font-medium text-primary">{post.title}</h3>
            <p>{post.description}</p>
            <div>
              <Link
                className="border-b border-dashed text-sm text-secondary"
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
