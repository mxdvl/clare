<script lang="ts">
  import { marked } from 'marked';
  import homeMarkdown from '../../content/home.md?raw';

  const homeHtml = marked.parse(homeMarkdown);
</script>

<svelte:head>
  <title>Clare Welch: User Researcher</title>
</svelte:head>

<div class="page" aria-label="Homepage content">
  {@html homeHtml}
</div>

<style>
  :global(.page h2) {
    font-size: 1em;
    line-height: 1rem;
    padding-bottom: 1rem;
  }

  :global(.page ul) {
    margin: 0;
    padding: 0;
    padding-left: 1rem;
  }

  :global(.page li) {
    padding-bottom: 1rem;
  }
</style>
