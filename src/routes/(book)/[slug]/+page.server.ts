throw new Error(
	"@migration task: Update +page.server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)"
);

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import type { PageServerLoad } from "./$types";
import grayMatter from "gray-matter";
import { marked } from "marked";

export type Page = {
	title: string;
	html: string;
	slug: string;
};

const path = resolve(".", "content");

const isPage = (slug: string) => existsSync(resolve(path, `${slug}.md`));

const getPage = (slug: string): Page => {
	const md = readFileSync(resolve(path, `${slug}.md`), "utf-8");
	const { content, data } = grayMatter(md);
	const html = marked(content, { smartypants: true });

	return { html, slug, title: "title", ...data };
};

export const get: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	if (!isPage(slug)) return { status: 404 };

	const page = getPage(slug);

	return {
		page,
	};
};
