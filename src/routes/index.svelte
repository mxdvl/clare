<svelte:head>
	<title>Clare Welch: User Researcher</title>
</svelte:head>

<main>
	<h1>Nice to meet you. 👋</h1>

	<p>
		I’m <bold>Clare</bold> without an <bold>i</bold>.
	</p>

	<p>A User Researcher working at Sopra Steria.</p>

	<p>
		Say <a href="mailto:hey@clare.ink">hey@clare.ink</a>, or find me
		<a href="http://linkedin.com/in/clare-welch">on LinkedIn</a>.
	</p>

	<h2>Read some of my recent posts:</h2>

	<ul>
		<li>
			<a href="https://uxdesign.cc/using-trello-for-user-research-d767ce0eb37c"
				>Using Trello for User Research | UX Collective</a
			>
		</li>
	</ul>

	<p>
		In my free time, I love socialising, writing, watching a good series or
		documentary, reading a book I can get lost in, completing a crossword (or at
		least giving it a go), planning my next adventure, dancing to Lady Gaga,
		trying new foods and eating pizza.
	</p>

	<p>Way too much pizza.</p>
</main>

<style>
	main {
		position: relative;
		max-width: 24rem;
		margin: auto;
		margin-top: 2rem;

		color: var(--text);
		background-color: var(--paper);
		border: 2px solid;
		border-radius: 0 0.5rem 0.5rem 0;
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

	h2 {
		font-size: 0.95rem;
		line-height: 1rem;
		padding-bottom: 1rem;
	}

	ul {
		margin: 0;
		padding: 0;
		padding-left: 1rem;
	}

	li {
		padding-bottom: 1rem;
	}
</style>
