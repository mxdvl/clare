import fs from 'fs';
import path from 'path';

import grayMatter from "gray-matter";

const getAllPosts = () =>
	fs.readdirSync(path.resolve('content','words')).map(file => {
		const post = fs.readFileSync(path.resolve('content','words', file), 'utf-8');
		const data = grayMatter(post).data
		data.slug = file.replace(".md",'');
		
		return data;
	})

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	const posts = getAllPosts();
	res.end(JSON.stringify(posts));
}