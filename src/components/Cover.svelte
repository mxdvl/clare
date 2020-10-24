<style>
	.cover {
		background-color: var(--cover);
		border: var(--line) solid var(--text);
		border-top-right-radius: 2rem;
		border-bottom-right-radius: 2rem;
		padding: 0.5rem;

		min-height: 48rem;
		position: relative;
	}

	h1 {
		position: absolute;
		right: 4rem;
		bottom: 4rem;
	}
</style>

<div class="cover">
	<h1>CW</h1>
	<slot />
</div>
