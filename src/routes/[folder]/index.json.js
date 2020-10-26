import fs from "fs";
import path from "path";

import grayMatter from "gray-matter";
import marked from "marked";

const getAllPosts = (folder) =>
	fs.readdirSync(path.resolve("content", folder)).map((file) => {
		const post = fs.readFileSync(
			path.resolve("content", folder, file),
			"utf-8"
		);
		const data = grayMatter(post).data;
		data.slug = file.replace(".md", "");

		return data;
	});

const isPage = (folder) =>
	fs.existsSync(path.resolve("content", `${folder}.md`));

const getPage = (folder) => {
	const page = fs.readFileSync(
		path.resolve("content", `${folder}.md`),
		"utf-8"
	);
	const { content, data } = grayMatter(page);
	const html = marked(content);

	return { html, slug: folder, ...data };
};

export function get(req, res) {
	const { folder } = req.params;

	res.writeHead(200, {
		"Content-Type": "application/json",
	});

	if (isPage(folder)) {
		const page = getPage(folder);
		res.end(JSON.stringify(page));
	} else {
		const posts = getAllPosts(folder);
		res.end(JSON.stringify(posts));
	}
}
