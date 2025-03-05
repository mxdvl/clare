<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Cover from "$lib/components/Cover.svelte";
	import Nav from "$lib/components/Nav.svelte";

	import "@fontsource/nunito/400.css";
	import "@fontsource/nunito/600.css";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let closed = $derived($page.url.pathname === "/" && $page.error === null);

	let node: HTMLElement;
	let images: NodeListOf<HTMLImageElement>;
	let videos: NodeListOf<HTMLVideoElement>;

	const setResponsiveElements = () => {
		// @ts-expect-error -- We’re pretty sure it will be there;
		node = document.querySelector(".page");
		if (!node) return Promise.resolve(["no node"]);
		const promises: Promise<string>[] = [];
		images = node.querySelectorAll("img");
		images.forEach((image) =>
			promises.push(
				new Promise(async (resolve) => {
					if (image.dataset.loaded === "loaded")
						resolve(image.dataset.ratio ?? "1");
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
					if (video.dataset.loaded === "loaded")
						resolve(video.dataset.ratio ?? "1");
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

		const ratio = parseFloat(element.dataset.ratio ?? "1");
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

<div id="notebook" class:closed>
	<Nav />
	<Cover {closed} />

	{#if !closed}
		<main class="page" onresize={handlePageResize}>
			{@render children?.()}
		</main>
	{/if}
</div>

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
	}
</style>
