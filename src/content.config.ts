import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		readTime: z.string().default(""),
		stack: z.string().default(""),
		sketch: z.enum(["flow", "columns", "queue"]).default("flow"),
	}),
});

export const collections = { blog };
