<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 54rem;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;

    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    background-image: url("/ricepaper_v3.png");
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
