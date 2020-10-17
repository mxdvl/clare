<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		color: midnightblue;
		background-color: ivory;
		border: 2px solid;
		border-radius: 4px;
		padding: 3rem 1rem 2rem;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 42rem;
		line-height: 1rem;

		background-image: linear-gradient(
			transparent,
			transparent 87.5%,
			beige 87.5%,
			beige 0
		);
		background-size: 1rem 1rem;
		background-position-y: 1px;

		box-shadow: 4px 4px 0 -2px ivory, 4px 4px 0 midnightblue,
			-4px 8px 0 -2px ivory, -4px 8px 0 midnightblue, 0 12px 0 -2px ivory,
			0 12px 0 midnightblue;
	}
</style>

<Nav {segment} />

<main>
	<slot />
</main>
