<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: oldlace;
		color: maroon;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		border: 2px solid maroon;
		border-radius: 4px;
		min-height: 20rem;
		/* background-image:
		url("/ricepaper_v3.png"); */
	}
</style>

<Nav {segment} />

<main>
	<slot />
</main>
