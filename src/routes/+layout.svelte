<script lang="ts">
	import "@fontsource/nunito/400.css";
	import "@fontsource/nunito/600.css";
</script>

<main>
	<slot />
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
