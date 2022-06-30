<script lang="ts">
	export let status: number;
	export let error: Error;

	import { page } from "$app/stores";

	const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<h1>Whoops!</h1>

<div class="content">
	<p>Sorry, there is no such page.</p>
	<hr />
	<p>
		Try looking somewhere else, as it looks like the following page could not be
		found:
		<strong>clare.ink{$page.url.pathname}</strong>
	</p>
</div>

{#if dev && error.stack}
	<h3>{status}</h3>
	<pre>{error.stack}</pre>
{/if}
