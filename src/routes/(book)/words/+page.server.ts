import { resolve } from "node:path";
import { readdirSync, readFileSync } from "node:fs";

import grayMatter from "gray-matter";
import type { PageServerLoad } from "./$types";

export type Post = {
	title: string;
	slug: string;
	date: string;
	html?: string;
};

const path = resolve(".", "content", "words");

const getAllPosts = (): Post[] =>
	readdirSync(path)
		.map((file) => {
			const md = readFileSync(resolve(path, file), "utf-8");

			const {
				data: { title, date },
			} = grayMatter(md);

			const post: Post = {
				slug: file.replace(".md", ""),
				title,
				date,
			};

			return post;
		})
		.sort(
			(first, second) =>
				new Date(second.date).getTime() - new Date(first.date).getTime()
		);

export const load: PageServerLoad = async () => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><circle cx="2" cy="2" r="1"/></svg>`;

	const posts = getAllPosts();

	if (!posts.length) throw new Error("No posts found.");

	return { posts };
};
