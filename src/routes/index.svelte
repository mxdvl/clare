<script context="module">
	const content = "hello, there";
</script>

<style>
	figure,
	p {
		text-align: center;
		margin: 0 auto;
		width: 100%;
		font-size: 0.8rem;
	}

	h1 {
		text-align: center;
		font-family: "Sacramento", cursive;
		font-size: 3rem;
		border: 2px solid;
		margin: 0 auto 1rem;
		line-height: 4.25rem;
		height: 4rem;
		box-sizing: border-box;

		color: var(--paper);
		border-color: #b02e0c;
		background-color: #eb4511;
	}
</style>

<svelte:head>
	<title>CW’s online notebook</title>
</svelte:head>

<h1>Notebook</h1>

{@html content}
