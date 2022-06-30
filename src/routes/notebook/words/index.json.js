import fs from "fs";
import path from "path";

import grayMatter from "gray-matter";

/** @type {() => import(".").Post[]} */
const getAllPosts = () =>
	fs.readdirSync(path.resolve("content", 'words')).map((file) => {
		const post = fs.readFileSync(
			path.resolve("content", 'words', file),
			"utf-8"
		);
		/** @type {import(".").Post} */
		// @ts-expect-error -- it works out okay
		const data = grayMatter(post).data;
		data.slug = file.replace(".md", "");

		return data;
	});

/** @type {import("@sveltejs/kit").RequestHandler} */
export const get = async () => {


	const posts = getAllPosts();
	return { body: { posts } };
}
