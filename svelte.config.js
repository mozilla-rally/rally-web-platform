import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    sourceMap: true,
  }),

  kit: {
    adapter: undefined,
    amp: false,
    appDir: "_app",
    browser: {
      hydrate: true,
      router: true,
    },
  },
};

export default config;
