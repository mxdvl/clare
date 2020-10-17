<script context="module">
	const content = "hello, there";
</script>

<style>
	figure,
	p {
		text-align: center;
		margin: 0 auto;
		width: 100%;
	}

	h1 {
		text-align: center;
		font-family: "Sacramento", cursive;
		font-size: 3.5rem;
		color: saddlebrown;
		background-color: tan;
		border: 2px solid;
		margin: 2rem 6rem 2rem;
		line-height: 4.25rem;
		height: 4rem;
		box-sizing: border-box;
	}

	:global(p) {
		margin: 1em auto;
	}
</style>

<svelte:head>
	<title>CW’s online notebook</title>
</svelte:head>

<h1>Notebook</h1>

{@html content}
