<script lang="ts">
	import type { Page } from "./[slug]@book";

	export let page: Page;
</script>

<svelte:head>
	<title>{page.title} Clare</title>
</svelte:head>

<h1>{page.title}</h1>

<div class="content">
	{@html page.html}
</div>
