<script lang="ts">
	import { stores } from "@sapper/app";
	import { onMount } from "svelte";
	import resize from "svelte-actions-resize";
	import Cover from "../components/Cover.svelte";
	import Nav from "../components/Nav.svelte";

	const { preloading, page, session } = stores();

	export let segment: string;
	$: closed = segment === undefined && $page.error === null;

	let node: HTMLElement;
	let images: NodeListOf<HTMLImageElement>;
	let videos: NodeListOf<HTMLVideoElement>;

	const setResponsiveElements = () => {
		node = document.querySelector(".page");
		if (!node) return Promise.resolve(["no node"]);
		const promises: Promise<string>[] = [];
		images = node.querySelectorAll("img");
		images.forEach((image) =>
			promises.push(
				new Promise(async (resolve) => {
					if (image.dataset.loaded === "loaded") resolve(image.dataset.ratio);
					await image.decode();
					const ratio = image.naturalWidth / image.naturalHeight;
					image.dataset.ratio = ratio.toString();
					image.dataset.loaded = "loaded";
					resolve(ratio.toString());
				})
			)
		);
		videos = node.querySelectorAll("video");
		videos.forEach((video) =>
			promises.push(
				new Promise((resolve) => {
					if (video.dataset.loaded === "loaded") resolve(video.dataset.ratio);
					video.addEventListener("loadedmetadata", () => {
						const ratio = video.videoWidth / video.videoHeight;
						video.dataset.ratio = ratio.toString();
						video.dataset.loaded = "loaded";
						resolve(ratio.toString());
					});
				})
			)
		);
		return Promise.all(promises);
	};

	const setSize = (element: HTMLElement) => {
		const pageWidth = node.clientWidth;

		const ratio = parseFloat(element.dataset.ratio);
		const height = Math.round(pageWidth / ratio / 20);
		element.style.height = `${height}rem`;
	};

	const handlePageResize = () => {
		setResponsiveElements().then(() => {
			images.forEach(setSize);
			videos.forEach(setSize);
		});
	};

	onMount(setResponsiveElements);
</script>

<style>
	#notebook {
		display: grid;
		grid-template-areas:
			"nav"
			"page"
			"page";
		width: 100%;
		max-width: 36rem;
		padding: 1rem 1rem 2rem;
		margin: 0 auto;

		transition: 240ms ease;
		transform-origin: top center;
	}

	#notebook.closed {
		width: min(24rem, 100%);
	}

	main {
		position: relative;
		grid-area: page;

		color: var(--text);
		background-color: var(--paper);
		border: 2px solid;
		border-radius: 0 1rem 1rem 0;
		padding: 1rem;
		padding-bottom: 1rem;
		box-sizing: border-box;
		line-height: 1rem;

		font-size: 0.8rem;

		background-image: repeating-linear-gradient(
			var(--lines),
			var(--lines) var(--line),
			var(--paper) var(--line),
			var(--paper) calc(1rem)
		);
		background-repeat: no-repeat;
		background-position: 1rem 7rem;
		background-size: calc(100% - 2rem);

		box-shadow: 4px 4px 0 -2px var(--paper), 4px 4px 0 var(--text),
			-4px 8px 0 -2px var(--paper), -4px 8px 0 var(--text),
			0 12px 0 -2px var(--paper), 0 12px 0 var(--text);
	}
</style>

<div id="notebook" class:closed>
	<Nav {segment} />
	<Cover {closed} />

	{#if !closed}
		<main class="page" use:resize on:resize={handlePageResize}>
			<slot />
		</main>
	{/if}
</div>
