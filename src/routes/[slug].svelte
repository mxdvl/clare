<script context="module">
	export function preload({ params }) {
		return this.fetch(`${params.slug}.json`)
			.then((r) => r.json())
			.then((page) => { return {page}    });
	}
</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>{page} Clare</title>
</svelte:head>

	<h1>{page.title}</h1>

	<div class="content">
		{@html page.html}
	</div>

