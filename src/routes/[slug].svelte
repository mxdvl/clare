<script context="module">
	export function preload({ params }) {
		const errorPage = {
			title: "Whoops",
			html: `That was an error.<br><br>Try another page, as it looks like <strong>${params.slug}</strong> does not exist…`,
		};
		return this.fetch(`${params.slug}.json`)
			.then((r) => r.json())
			.then((page) => {
				if (page.title === undefined)
					return {
						page: errorPage,
					};
				return { page };
			});
	}
</script>

<script lang="ts">
	import Contact from "../components/Contact.svelte";

	export let page: Record<string, string>;
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
