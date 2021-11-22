const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
