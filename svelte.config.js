import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: null,

	kit: {
		adapter: adapter(),
		vite: {
			 server: {
				 fs: {
					  allow: [
							'.'
						]
				 }
			 }
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config
