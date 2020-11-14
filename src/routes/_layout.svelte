<script lang="ts">
	import Cover from "../components/Cover.svelte";
	import Nav from "../components/Nav.svelte";

	export let segment: string;
	$: closed = segment === undefined
</script>

<style>
	#notebook {
		display: grid;
		grid-template-areas:
			"nav"
			"page"
			"page";
		width: 100%;
		max-width: 36rem;
		padding: 1rem 1rem 2rem;
		margin: 0 auto;

		transition: 240ms ease;
		transform-origin: top center;
	}

	#notebook.closed {
		width: min(24rem, 100%);
	}

	main {
		position: relative;
		grid-area: page;

		color: var(--text);
		background-color: var(--paper);
		border: 2px solid;
		border-radius: 0 1rem 1rem 0;
		padding: 1rem;
		padding-bottom: 1rem;
		box-sizing: border-box;
		line-height: 1rem;

		font-size: 0.8rem;

		background-image: repeating-linear-gradient(
			var(--lines),
			var(--lines) var(--line),
			var(--paper) var(--line),
			var(--paper) calc(1rem)
		);
		background-repeat: no-repeat;
		background-position: 1rem 7rem;
		background-size: calc(100% - 2rem);

		box-shadow: 4px 4px 0 -2px var(--paper), 4px 4px 0 var(--text),
			-4px 8px 0 -2px var(--paper), -4px 8px 0 var(--text),
			0 12px 0 -2px var(--paper), 0 12px 0 var(--text);
	}
</style>

<div id="notebook" class:closed>
	<Nav {segment} />
	<Cover {closed} />

	{#if !closed}
		<main class="page">
			<slot />
		</main>
	{/if}
</div>
