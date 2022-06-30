<script type="ts">
	import type { Post } from ".";

	export let posts: Post[];
</script>

<svelte:head>
	<title>Clare’s words</title>
</svelte:head>

{#if posts.length > 1}
	<h1>Recent words</h1>

	<ul>
		{#each posts as post, index}
			<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
			<li>
				<a rel="prefetch" href="words/{post.slug}">{post.title}</a>
				<span class="dots" />
				<time datetime={post.date.substring(0, 10)}
					>{new Date(post.date).getUTCMonth() + 1}.{new Date(
						post.date
					).getUTCFullYear()}</time
				>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		margin: 0 0 1rem 0;
		padding: 0;
	}

	li {
		display: flex;
		width: 100%;
		height: 2rem;
	}

	li a {
		background-position-y: 1rem;
	}

	.dots {
		flex-grow: 1;
		margin: 0 0.5rem;
		height: 1rem;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='3' viewBox='0 0 6 3'%3E%3Ccircle fill='%23171a21' cx='2' cy='2' r='1'/%3E%3C/svg%3E");
		background-repeat: round no-repeat;
		background-position: right center;
	}

	time {
		font-weight: lighter;
	}
</style>
