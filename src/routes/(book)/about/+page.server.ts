import { readFileSync } from "node:fs";
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

const getPage = (slug: string): Page => {
	const md = readFileSync(resolve(path, `${slug}.md`), "utf-8");
	const { content, data } = grayMatter(md);
	const html = marked(content, { smartypants: true });

	return { html, slug, title: "title", ...data };
};

export const load: PageServerLoad = () => ({ page: getPage("about") });
