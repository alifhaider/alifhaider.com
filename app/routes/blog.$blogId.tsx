import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPost } from "~/mdx.server";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.blogId, "No blogId provided");

  const post = await getPost(params.blogId);
  return json(post, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
    },
  });
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();

  const Component = useMemo(() => getMDXComponent(data.code), [data.code]);
  return (
    <div className="mx-auto mt-10 max-w-5xl space-y-10">
      <h1 className="text-4xl font-bold">{data.frontmatter.title}</h1>

      <Component />
    </div>
  );
}
