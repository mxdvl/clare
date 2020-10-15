import fs from 'fs';
import path from 'path';

import grayMatter from "gray-matter";

const getAllPosts = (folder) =>
	fs.readdirSync(path.resolve('content', folder)).map(file => {
		const post = fs.readFileSync(path.resolve('content', folder, file), 'utf-8');
		const data = grayMatter(post).data
		data.slug = file.replace(".md",'');

		return data;
	})

export function get(req, res) {

	const { folder } = req.params;

	console.log(req.params)

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	const posts = getAllPosts(folder);
	res.end(JSON.stringify(posts));
}
