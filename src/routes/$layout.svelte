<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<footer>
	<p>built with <a href="https://kit.svelte.dev">SvelteKit</a> because why not</p>
	<p>(<a href="https://twitter.com/wycats/status/1420261629761966080">thanks @wycats</a>)
	<p>(<a href="https://mobile.twitter.com/omsface/status/1420264666706628608">you're welcome @omsface</a>)</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
		white-space: nowrap;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
