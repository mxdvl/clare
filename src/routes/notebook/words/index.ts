import type { RequestHandler } from "@sveltejs/kit";

export type Post = {
	title: string;
	slug: string;
	date: string;
};

const sortDates = (posts: Post[]) =>
	posts
		.slice()
		.sort(
			(first, second) =>
				new Date(second.date).getTime() - new Date(first.date).getTime()
		);

export const get: RequestHandler = async () => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><circle cx="2" cy="2" r="1"/></svg>`;
	const posts = await fetch("words.json")
		.then((r) => r.json())
		.then(sortDates);

	if (posts.length) return { body: { posts } };

	return { status: 404 };
};
