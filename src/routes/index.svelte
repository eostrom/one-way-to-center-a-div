<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>one way to center content in a div dot com</title>
</svelte:head>

<section>
	<h1>
	  one way to center content in a div
	</h1>

	<div id="the-div">
		<pre>
div {'{'}
  display: flex;
  /* vertical */
  align-items: center;
  /* horizontal */
  justify-content: center;
{'}'}
		</pre>
	</div>
</section>

<style>
	div {
		display: flex;
		/* vertical */
		align-items: center;
		/* horizontal */
		justify-content: center;
	}

  #the-div {
		background: yellow;
		flex-grow: 1;
	}

  pre {
    background: white;
		padding: 2em;
		box-shadow: 100px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		flex: 1;
	}
</style>
