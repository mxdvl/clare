<script lang="ts">
	import { page } from "$app/stores";
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
		<p class="bold">{$page.error?.name}</p>
		<p>{$page.error?.message}</p>
	</blockquote>
</main>

<style>
	blockquote {
		color: var(--background);
	}

	.bold {
		font-weight: bold;
	}
</style>
