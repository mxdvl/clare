import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import grayMatter from "gray-matter";
import { marked } from "marked";

import type { PageServerLoad } from "./$types";
import type { Post } from "../+page.server";

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const filename = resolve(".", "content", "words", `${slug}.md`);

	if (!existsSync(filename)) throw new Error("Not found");

	const md = readFileSync(filename, "utf-8");

	const {
		content,
		data: { title, date },
	} = grayMatter(md);
	const html = marked(content, { smartypants: true });

	const post: Post = {
		slug,
		title,
		date,
		html,
	};

	return { post };
};
