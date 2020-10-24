<script>
	import Cover from "../components/Cover.svelte";
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	figure,
	p {
		text-align: center;
		margin: 0 auto;
		width: 100%;
		font-size: 0.8rem;
	}
</style>

<svelte:head>
	<title>CW’s online notebook</title>
</svelte:head>

<Nav {segment} />
<Cover />
