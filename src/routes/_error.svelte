<script lang="ts">
	export let status: number;
	export let error: Error;

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
		Try looking somewhere else, as it looks like
		<strong>/error</strong>
		does not exist…
	</p>
</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
