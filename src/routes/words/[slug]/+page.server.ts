import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import grayMatter from "gray-matter";
import { marked } from "marked";
import type { RequestHandler } from ".svelte-kit/types/src/routes/words/__types/[slug]@book";
import type { Post } from "./index@book";

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	const filename = resolve(".", "content", "words", `${slug}.md`);

	if (!existsSync(filename)) return { status: 404 };

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

	return { body: { post } };
};
