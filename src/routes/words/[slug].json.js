import fs from "fs";
import path from "path";

import grayMatter from "gray-matter";
import marked from 'marked';

const getPost = (slug) =>
	fs.readFileSync(path.resolve("content", "words" , `${slug}.md`), "utf-8");

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	const { content, data } = grayMatter(getPost(slug))
	const html = marked(content);

	if (content) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({slug, html, ...data}));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
