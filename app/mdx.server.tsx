import { bundleMDX } from "mdx-bundler";
import fs from "fs/promises";

export async function parseMdx(path: string) {
  const content = await fs.readFile(`blog/${path}`, "utf-8");
  const { frontmatter, code } = await bundleMDX({
    source: content,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
  });

  return { frontmatter, code };
}

export async function getPost(slug: string) {
  const { frontmatter, code } = await parseMdx(`${slug}.mdx`);

  return {
    code,
    frontmatter,
  };
}

export async function getPosts() {
  const files = await fs.readdir("blog");
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (filename) => {
      const { frontmatter } = await parseMdx(filename);

      return {
        title: frontmatter.title,
        description: frontmatter.description,
        slug: filename.replace(/\.mdx$/, ""),
      };
    }),
  );

  return posts;
}
