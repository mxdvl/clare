<script lang="ts">
	export let closed: boolean;
</script>

<style>
	.cover {
		background-color: var(--cover);
		border: var(--line) solid var(--text);
		border-top-right-radius: 2rem;
		border-bottom-right-radius: 2rem;

		padding-top: 150%;
		position: relative;

		grid-area: page;
		margin-top: -0.5rem;
		margin-left: -0.75rem;
		margin-right: calc(-0.5rem - (2 * var(--line)));
		margin-bottom: -1.5rem;

		box-shadow: 4px 4px 0 #0003;
	}

	.cover.closed {
		z-index: 3;
	}

	h1 {
		position: absolute;
		left: 0;
		width: 100%;
		top: 45%;
		font-size: 4rem;
		font-weight: 900;
		text-align: center;

		color: var(--cover);
		opacity: 0.75;
		text-shadow: -2px -4px 0 var(--text), 2px 4px 0 gold;
		-webkit-text-stroke: #0036 1px;
	}
</style>

<div class="cover" class:closed>
	<h1>CW</h1>
</div>
