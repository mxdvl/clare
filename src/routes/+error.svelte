<script lang="ts">
	import { page } from "$app/stores";

	import "@fontsource/nunito/400.css";
	import "@fontsource/nunito/600.css";
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<main>
	<h1>Whoops!</h1>

	<p>Sorry, there is no such page.</p>
	<hr />
	<p>
		Try looking somewhere else, as it looks like the following page could not be
		found:
		<strong>clare.ink{$page.url.pathname}</strong>
	</p>

	<hr />

	<blockquote>
		<p class="bold">{$page.status}</p>
		<p>{$page.error?.message}</p>
	</blockquote>
</main>

<style>
	main {
		position: relative;
		max-width: 24rem;
		margin: 2rem auto;

		color: var(--text);
		background-color: var(--paper);
		border: 2px solid;
		border-radius: 0 0.5rem 0.5rem 0;
		padding: 1rem;
		padding-bottom: 1rem;
		box-sizing: border-box;
		line-height: 1rem;

		font-size: 0.8rem;
	}

	blockquote {
		color: var(--accent);
	}

	.bold {
		font-weight: bold;
	}
</style>
