<script>
	import Cover from "../components/Cover.svelte";
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<Nav {segment} />
<Cover />
<slot />
