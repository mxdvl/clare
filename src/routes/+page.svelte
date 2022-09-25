<script lang="ts">
	import "@fontsource/nunito/400.css";
	import "@fontsource/nunito/600.css";
</script>

<svelte:head>
	<title>Clare Welch: User Researcher</title>
</svelte:head>

<main>
	<h1>Nice to meet you. 👋</h1>

	<p class="bold">
		User Researcher with expertise in learning and education. Currently on <a
			href="https://medium.com/sopra-steria-uk-design-team/tagged/user-research"
			>the Sopra Steria Design Team</a
		>.
	</p>

	<p>
		Having worked extensively in education and abroad, my experience spans a
		breadth of cultures and age groups. I bring a wide skill set to the user
		researcher role. People have always been at the centre of my work. From
		understanding the way people learn, to working with diverse groups in the UK
		and abroad, I am a strong advocate of user centred design.
	</p>

	<p>Passionate about creating spaces where people feel they belong.</p>

	<h2>
		Read some of <a href="https://clarelwelch.medium.com/">my recent posts</a>:
	</h2>

	<ul>
		<li>
			<a
				href="https://uxdesign.cc/top-considerations-before-conducting-user-research-2e8c24e9f793"
				>Top considerations before conducting user research | UX Collective</a
			> Sep 2022
		</li>
		<li>
			<a href="https://uxdesign.cc/using-trello-for-user-research-d767ce0eb37c"
				>Using Trello for User Research | UX Collective</a
			> May 2022
		</li>
		<li>
			<a
				href="https://medium.com/sopra-steria-uk-design-team/why-must-design-teams-consider-the-growing-digital-divide-in-the-uk-50aaddbd672f"
				>Why must design teams consider the growing digital divide in the UK? |
				Sopra Steria</a
			> Feb 2022
		</li>
		<li>
			<a
				href="https://clarelwelch.medium.com/reviewing-the-user-experience-of-language-learning-in-schools-cafc355edea0"
				>Reviewing the ‘user experience’ of language learning in schools</a
			> Jul 2021
		</li>
	</ul>

	<p>
		If you want to get in touch, it’s <a href="mailto:hey@clare.ink"
			>hey@clare.ink</a
		>
		or you can find me
		<a href="http://linkedin.com/in/clare-welch">on LinkedIn</a>.
	</p>

	<p>
		In my free time, I love socialising, writing, watching a good series or
		documentary, reading a book I can get lost in, completing a crossword (or at
		least giving it a go), planning my next adventure, dancing to Lady Gaga,
		trying new foods and eating pizza.
	</p>

	<p>Way too much pizza. 🍕</p>
</main>

<style>
	main {
		position: relative;
		max-width: 24rem;
		margin: 2rem auto;

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
		font-size: 1em;
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
