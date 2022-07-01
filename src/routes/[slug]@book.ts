import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import type { RequestHandler } from ".svelte-kit/types/src/routes/__types/[slug]@book";
import grayMatter from "gray-matter";
import { marked } from "marked";

export type Page = {
	title: string;
	html: string;
	slug: string;
};

const isPage = (slug: string) => existsSync(resolve("content", `${slug}.md`));

const getPage = (slug: string): Page => {
	const md = readFileSync(resolve("content", `${slug}.md`), "utf-8");
	const { content, data } = grayMatter(md);
	const html = marked(content, { smartypants: true });

	return { html, slug, title: "title", ...data };
};

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	if (!isPage(slug)) return { status: 404 };

	const page = getPage(slug);

	return {
		body: { page },
	};
};
