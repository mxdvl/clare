<script lang="ts">
	import Cover from "../components/Cover.svelte";
	import Nav from "../components/Nav.svelte";

	export let segment: string;
</script>

<Nav {segment} />
<Cover />

<slot />
