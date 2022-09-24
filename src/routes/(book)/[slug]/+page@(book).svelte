<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import type { Page } from "../[slug]@book";

	export let page: Page;
</script>

<svelte:head>
	<title>{page.title} Clare</title>
</svelte:head>

<h1>{page.title}</h1>

<div class="content">
	{@html page.html}
</div>
