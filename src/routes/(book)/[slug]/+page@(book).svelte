<script lang="ts">
	import type { PageData } from "./$types";
	import type { Page } from "./+page.server";

	export let data: PageData;
	let { page } = data;
	$: ({ page } = data);
</script>

<svelte:head>
	<title>{page.title} Clare</title>
</svelte:head>

<h1>{page.title}</h1>

<div class="content">
	{@html page.html}
</div>
