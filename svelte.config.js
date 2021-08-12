import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import replace from "@rollup/plugin-replace";
import copy from "rollup-plugin-copy";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		adapter: adapter(),
		ssr: false,
		//prerender: { enabled: false },
		vite: {
			plugins: [
				replace({
					// the following replacements build the site URLs.
					// In the templates, use (for example) __BASE_SITE_URL__/__FAQ_PATH__
					__BASE_SITE__: "https://rally.mozilla.org",
					// Support enabling/disabling the locale check to enable
					// the development workflows on other locales.
				}),
				copy({
					targets: [
						{ src: "node_modules/@mozilla-protocol/core/protocol/fonts/Inter-Bold.woff2", dest: "static/fonts/"},
						{ src: "node_modules/@mozilla-protocol/core/protocol/fonts/Inter-Regular.woff2", dest: "static/fonts/"},
						{ src: "node_modules/@mozilla-protocol/core/protocol/fonts/Inter-Italic.woff2", dest: "static/fonts/"},
						{ src: "node_modules/@mozilla-protocol/core/protocol/fonts/ZillaSlab-Bold.woff2", dest: "static/fonts/"},
						{ src: "node_modules/@mozilla-protocol/core/protocol/fonts/Metropolis-*.woff2", dest: "static/fonts/"},
						{ src: "node_modules/@mozilla-protocol/core/protocol/css/protocol.css", dest: "static/build/"},
						{ src: "node_modules/@mozilla-protocol/core/protocol/css/protocol-extra.css", dest: "static/build/"}
					]
				}),
			]
		}
	}
};

export default config;
