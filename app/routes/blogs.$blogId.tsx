import {
  json,
  type MetaFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPost } from "~/mdx.server";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

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

  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div
      className="mx-auto mt-10 w-full max-w-5xl space-y-10"
      style={{ viewTransitionName: "blog-title" }}
    >
      <h1 className="text-4xl font-bold text-secondary md:text-6xl">
        {frontmatter.title}
      </h1>

      <div className="space-y-3">
        <Component />
      </div>
    </div>
  );
}
