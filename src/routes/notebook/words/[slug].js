/** @type {import("@sveltejs/kit").RequestHandler} */
export const get = async ({ params }) => {
	const page = await fetch(`${params.slug}.json`)
		.then((r) => r.json());

	if (page.error) return { status: 404 }
	return { body: { page } };
}
