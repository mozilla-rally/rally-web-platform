import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import replace from "@rollup/plugin-replace";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#rally",
		adapter: adapter(),
		ssr: false,
		vite: {
			plugins: [
				replace({
					// the following replacements build the site URLs.
					// In the templates, use (for example) __BASE_SITE_URL__/__FAQ_PATH__
					__BASE_SITE__: "https://rally.mozilla.org",
					__INTEGRATION_TEST_MODE__: (process.argv.includes("--config-integration-test-mode")),
				}),
			]
		}
	}
};

export default config;
