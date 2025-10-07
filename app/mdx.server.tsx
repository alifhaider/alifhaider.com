import parseFrontMatter from "front-matter";
import { readFile, readdir } from "./fs.server";
import path from "path";
import { bundleMDX } from "mdx-bundler";

// Docs: https://blacksheepcode.com/posts/adding_msw_bundler_to_remix_app

export type Frontmatter = {
  title: string;
  date: string;
  description: string;
  categories: string[];
  tags: string[];
  readTime: string;
};

export async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "blog", slug + ".mdx");

  const [source] = await Promise.all([readFile(filePath, "utf-8")]);
  const { frontmatter, code } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
  });

  const attributes = frontmatter as Frontmatter;
  return {
    frontmatter: {
      ...attributes,
    },
    code,
  };
}

export async function getPosts() {
  const filePath = path.join(process.cwd(), "blog");

  const postsPath = await readdir(filePath, {
    withFileTypes: true,
  });

  const posts = await Promise.all(
    postsPath.map(async (dirent) => {
      const fPath = path.join(filePath, dirent.name);
      const [file] = await Promise.all([readFile(fPath)]);
      const frontmatter = parseFrontMatter(file.toString());
      const attributes = frontmatter.attributes as Frontmatter;

      return {
        slug: dirent.name.replace(/\.mdx/, ""),
        frontmatter: {
          ...attributes,
        },
      };
    }),
  );

  return posts;
}
