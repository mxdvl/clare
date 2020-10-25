<script lang="ts">
	export let segment: string;
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
		height: 3rem;
		margin: 0;
		grid-area: nav;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		font-size: 1.5rem;
		float: left;
		display: block;
		margin: 0 0.5rem;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		z-index: 1;
		color: var(--paper);
		background-color: var(--accent);
	}

	a {
		text-decoration: none;
		padding: 0.25rem 1rem;
		display: block;
		color: var(--text);
		background: var(--paper);
		border: 2px solid;
		padding-bottom: 2rem;
	}

	li:nth-of-type(1) a {
		transform: rotate(-0.5deg);
	}

	li:nth-of-type(2) a {
		transform: rotate(3deg);
	}

	li:nth-of-type(3) a {
		transform: rotate(-1deg);
	}

	li:nth-of-type(4) a {
		transform: rotate(1.5deg);
	}
</style>

<nav>
	<ul>
		<li>
			<a
				class="home"
				aria-current={segment === undefined ? 'page' : undefined}
				href=".">⌂</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				 the blog data when we hover over the link or tap it on a touchscreen -->
		{#each ['words'] as folder}
			<li>
				<a
					rel="prefetch"
					class={folder}
					aria-current={segment === folder ? 'page' : undefined}
					href={folder}>{folder}</a>
			</li>
		{/each}
	</ul>
</nav>
