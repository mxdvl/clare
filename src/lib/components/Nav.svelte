<script lang="ts">
	import { page } from "$app/stores";
</script>

<nav>
	<ul>
		<li>
			<a
				rel="prefetch"
				class="home"
				aria-current={$page.url.pathname === "/" ? "page" : undefined}
				href=".">家</a
			>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				 the blog data when we hover over the link or tap it on a touchscreen -->
		{#each ["about", "words", "contact"] as folder}
			<li>
				<a
					rel="prefetch"
					class={folder}
					aria-current={$page.url.pathname === folder ? "page" : undefined}
					href={folder}>{folder}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		font-weight: 300;
		padding: 0;
		height: 2.5rem;
		margin: 0;
		grid-area: nav;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		font-size: 1rem;
		float: left;
		display: block;
		margin: 0 0.25rem;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		z-index: 1;
		/* color: var(--paper); */
		background-color: var(--accent);
	}

	a {
		text-decoration: none;
		padding: 0.25rem;
		display: block;
		color: var(--text);
		background: var(--paper);
		border: var(--line) solid;
		padding-bottom: 1.5rem;

		box-shadow: 4px 4px 0 #0003;
	}

	li:nth-of-type(4n) a {
		transform: rotate(-0.5deg);
	}

	li:nth-of-type(4n + 1) a {
		transform: rotate(3deg);
	}

	li:nth-of-type(4n + 2) a {
		transform: rotate(-1deg);
	}

	li:nth-of-type(4n + 3) a {
		transform: rotate(1.5deg);
	}

	li:first-of-type a {
		transform: rotate(0);
	}
</style>
