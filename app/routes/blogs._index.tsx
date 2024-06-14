import { json, MetaFunction } from "@remix-run/node";
import {
  Link,
  unstable_useViewTransitionState,
  useLoaderData,
} from "@remix-run/react";
import { getPosts } from "~/mdx.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Blogs / Alif" },
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

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-5xl space-y-10">
      <p>
        One day I will write blogs and here will be the list of them. Since, I
        have no blog post yet, I am adding a test article to test my ability of
        rendering a blog post via <code>&#96;mdx-files&#96;</code>. Cause why
        not 🤣
      </p>

      <ul className="space-y-6">
        {data.map((post) => {
          const to = `/blogs/${post.slug}`;
          const vt = unstable_useViewTransitionState(to);
          return (
            <li key={post.slug} className="space-y-2">
              <div className="flex items-center justify-between">
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
                <span className="text-gray-500 text-xs md:text-sm">
                  {formatDate(post.frontmatter.date)}
                </span>
              </div>
              <p>{post.frontmatter.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
