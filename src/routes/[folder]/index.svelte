<script context="module">
	export function preload({ params }) {
		const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><circle cx="2" cy="2" r="1"/></svg>`;
		return this.fetch(`${params.folder}.json`)
			.then((r) => r.json())
			.then(sortDates)
			.then((posts) => {
				return { posts, folder: params.folder };
			});
	}

	const sortDates = (posts) =>
		posts.sort(
			(first, second) =>
				new Date(second.date).getTime() - new Date(first.date).getTime()
		);
</script>

<script>
	export let posts;
	export let folder;
</script>

<style>
	ul {
		margin: 0 0 1rem 0;
		padding: 0;
	}

	li {
		display: flex;
		width: 100%;
		height: 2rem;
	}

	li a {
		background-position-y: 1rem;
	}

	.dots {
		flex-grow: 1;
		margin: 0 0.5rem;
		height: 1rem;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='3' viewBox='0 0 6 3'%3E%3Ccircle fill='%23171a21' cx='2' cy='2' r='1'/%3E%3C/svg%3E");
		background-repeat: round no-repeat;
		background-position: right center;
	}

	.mono {
		font-weight: lighter;
	}
</style>

<svelte:head>
	<title>Clare’s {folder}</title>
</svelte:head>

{#if typeof posts.slug !== 'undefined'}
	<h1>{posts.title}</h1>

	<div class="content">
		{@html posts.html}
	</div>
{:else if posts.length > 1}
	<h1>Recent {folder.toUpperCase()}</h1>

	<ul>
		{#each posts as post, index}
			<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
			<li>
				<a rel="prefetch" href="{folder}/{post.slug}">{post.title}</a>
				<span class="dots" />
				<span
					class="mono">{new Date(post.date).getUTCMonth()}.{new Date(post.date).getUTCFullYear()}</span>
			</li>
		{/each}
	</ul>
{/if}
