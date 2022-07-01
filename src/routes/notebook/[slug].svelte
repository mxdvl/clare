<script lang="ts">
	import Contact from "$lib/components/Contact.svelte";

	export let page: {
		title: string,
		html: string,
		slug: string,
	};
</script>

<svelte:head>
	<title>{page.title} Clare</title>
</svelte:head>

<h1>{page.title}</h1>

<div class="content">
	{@html page.html}
</div>

{#if page.slug === 'contact'}
	<Contact />
{/if}
