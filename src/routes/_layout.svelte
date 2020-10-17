<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		color: midnightblue;
		background-color: ivory;
		border: 2px solid tan;
		border-radius: 4px;
		padding: 1rem 0.5rem;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 20rem;
		line-height: 1rem;

		background-image: linear-gradient(
			transparent,
			transparent 87.5%,
			beige 87.5%,
			beige 0
		);
		background-size: 1rem 1rem;
	}
</style>

<Nav {segment} />

<main>
	<slot />
</main>
