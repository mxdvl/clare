<script lang="ts">
	import "@fontsource/nunito/400.css";
	import "@fontsource/nunito/600.css";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main>
	{@render children?.()}
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
</style>
