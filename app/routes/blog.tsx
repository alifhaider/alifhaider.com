import { type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlogMdxListItems } from "~/mdx.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const posts = await getBlogMdxListItems({ request });
  return { posts };
}

export default function Blogs() {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="mx-auto mt-10 max-w-5xl space-y-10">
      <h1 className="text-7xl font-bold">Blog</h1>

      <p>
        One day I will write blogs and here will be a list of them. Since, I
        have no blog post yet, I amm adding a test case. Cause why not 🤣
      </p>

      <ul>
        <li className="space-y-3">
          <h3 className="text-3xl font-medium text-primary">
            How the `DynamicForm.jsx` component works
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim
            porro architecto earum molestias est dignissimos illo at sunt qui!
          </p>
          <div>
            <Link
              className="border-b border-dashed text-sm text-secondary"
              to="/"
            >
              Read the article
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
