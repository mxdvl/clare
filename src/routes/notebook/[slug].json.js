import fs from "fs";
import path from "path";

import grayMatter from "gray-matter";
import { marked } from "marked";

/** @type {(slug: string) => boolean} */
const isPage = (slug) => fs.existsSync(path.resolve("content", `${slug}.md`));

/** @type {(slug: string) => {html: string, slug: string}} */
const getPage = (slug) => {
	const page = fs.readFileSync(path.resolve("content", `${slug}.md`), "utf-8");
	const { content, data } = grayMatter(page);
	const html = marked(content, { smartypants: true });

	return { html, slug, ...data };
};

/** @type {import("./__types/[slug]").Load} */
export function get({ params }) {
	const { slug } = params;

	if (isPage(slug)) return { props: { page: getPage(slug) } };

	return { status: 404 };
}
