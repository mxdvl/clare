<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
	let { post } = data;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	{@html post.html}
</div>

<style>
	.content :global(h2) {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>
