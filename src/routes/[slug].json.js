import fs from "fs";
import path from "path";

import grayMatter from "gray-matter";
import marked from "marked";

const isPage = (slug) => fs.existsSync(path.resolve("content", `${slug}.md`));

const getPage = (slug) => {
	const page = fs.readFileSync(path.resolve("content", `${slug}.md`), "utf-8");
	const { content, data } = grayMatter(page);
	const html = marked(content, { smartypants: true });

	return { html, slug, ...data };
};

export function get(req, res) {
	const { slug } = req.params;

	if (isPage(slug)) {
		res.writeHead(200, {
			"Content-Type": "application/json",
		});
		const page = getPage(slug);
		res.end(JSON.stringify(page));
	} else {
		res.writeHead(404, {
			"Content-Type": "application/json",
		});
		res.end(
			JSON.stringify({
				slug: "error",
				title: "Whoops",
				error: true,
			})
		);
	}
}
