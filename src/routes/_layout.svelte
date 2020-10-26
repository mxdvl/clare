<script lang="ts">
	import Cover from "../components/Cover.svelte";
	import Nav from "../components/Nav.svelte";

	export let segment: string;
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
		width: 24rem;
	}
</style>

<div id="notebook" class:closed={segment === undefined}>
	<Nav {segment} />
	<Cover />

	<slot />
</div>
