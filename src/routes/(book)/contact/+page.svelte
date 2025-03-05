<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	let message: string = $state("Hey Clare,");
	let email: string = $state();

	const url = "https://formspree.io/f/mayljwap";

	let submitted: boolean = $state(false);

	const sendMessage = () => {
		fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				_replyto: email,
				message,
			}),
		}).then((response) => {
			submitted = true;
			console.log(response);
		});
	};
</script>

<svelte:head>
	<title>Contact Clare</title>
</svelte:head>

<h1>Get in touch</h1>

<p>
	Say <a href="mailto:hey@clare.ink">hey@clare.ink</a>, or use the form below 👇
</p>

{#if submitted}
	<br />
	<blockquote>Thank you for your message!</blockquote>
{:else}
	<form action={url} method="POST" onsubmit={preventDefault(sendMessage)}>
		<label>
			<p>Your email:</p>
			<input type="text" name="_replyto" required bind:value={email} />
		</label>
		<label>
			<p>Your message:</p>
			<textarea name="message" bind:value={message}></textarea>
		</label>
		<button type="submit">Send</button>
	</form>
{/if}

<style>
	label {
		display: block;
		padding-bottom: 1rem;
	}

	input,
	textarea {
		background: var(--lines);
		font-family: inherit;
		border: none;
		width: 100%;
		margin: 0;
		padding: 0;
		padding: 1rem;
		position: relative;
		top: -3px;
	}

	input {
		height: 3rem;
	}

	textarea {
		height: 18rem;
		font-size: 0.8rem;
	}

	button {
		background: var(--contrast);
		border: var(--line) solid var(--text);
		padding: 0.5rem 1rem;
		font-family: inherit;
		font-size: 2rem;
		transform: rotate(-5deg);
		display: block;
		margin: 0 auto;

		transition: 240ms;
	}

	button:hover {
		background-color: var(--background);
		cursor: pointer;
		transform: rotate(-3deg) scale(1.1);
	}
</style>
