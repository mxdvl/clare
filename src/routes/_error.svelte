<script lang="ts">
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === "development";
</script>

<style>
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Error</title>
</svelte:head>

<h1>Whoops!</h1>

<div class="content">
	Sorry, there is no such page.<br /><br />
	<hr />
	Try looking somewhere else, as it looks like
	<strong>/error</strong>
	does not exist…
</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
