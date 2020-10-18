<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
		--lines: #f0f6f2;

		position: relative;
		color: var(--text);
		background-color: var(--paper);
		border: 2px solid;
		border-radius: 0 1rem 1rem 0;
		padding: 2rem 1rem 2rem;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 42rem;
		line-height: 1rem;

		font-size: 0.8rem;

		background-image: repeating-linear-gradient(
			var(--lines),
			var(--lines) var(--line),
			var(--paper) var(--line),
			var(--paper) calc(1rem)
		);
		background-repeat: no-repeat;
		background-position: 1rem calc(7rem - 3px);
		background-size: calc(100% - 2rem);

		box-shadow: 4px 4px 0 -2px var(--paper), 4px 4px 0 var(--text),
			-4px 8px 0 -2px var(--paper), -4px 8px 0 var(--text),
			0 12px 0 -2px var(--paper), 0 12px 0 var(--text);
	}
</style>

<Nav {segment} />

<main>
	<slot />
</main>
