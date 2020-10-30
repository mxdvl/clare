<script lang="ts">
	import Cover from "../components/Cover.svelte";
	import Nav from "../components/Nav.svelte";

	export let segment: string;
	export let closed: boolean = segment === undefined;
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
</style>

<div id="notebook" class:closed>
	<Nav {segment} />
	<Cover {closed} />

	<slot />
</div>
