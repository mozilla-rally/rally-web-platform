import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
//need to add terser for production
// import { terser } from "rollup-plugin-terser";
import preprocess from "svelte-preprocess";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import replace from "@rollup/plugin-replace";
import sizes from "rollup-plugin-sizes";
import cleaner from "rollup-plugin-cleaner";
import alias from "@rollup/plugin-alias";
import { routify } from "@sveltech/routify";
import path from "path";
import svg from "rollup-plugin-svg";
import { hoistImportDeps } from "rollup-plugin-hoist-import-deps";

const emulatorMode = process.argv.includes("--config-emulator-mode");

const aliases = alias({
  entries: [{ find: "$lib", replacement: path.resolve(__dirname, "src/lib") }],
});

const config = {
  input: "src/main.js",
  output: {
    sourcemap: true,
    dir: "static/bundle/",
    format: "esm",
    name: "app"
  },
  //see https://github.com/rollup/plugins/tree/master/packages/babel
  external: ['@babel/runtime'],
  plugins: [
    svelte({
      // Consult https://github.com/sveltejs/svelte-preprocess
      // for more information about preprocessors
      preprocess: preprocess({
        sourceMap: true,
      }),
      emitCss: false,
    }),
    //Added routify plugin with dynamic import support
    routify({ dynamicImports: true }),

    //Added cleaner to clean the chunk files on changes
    cleaner({
      targets: ["static/bundle/"],
    }),
    aliases,
    // see https://www.npmjs.com/package/@rollup/plugin-node-resolve
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({ include: "node_modules/**", exclude: "**/*.css" }),
    //babel support
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      presets: [["@babel/preset-env", { useBuiltIns: "entry", corejs: 3 }]],
      // handling async/await
      plugins: [
        "@babel/transform-runtime",
        "@babel/transform-regenerator",
        "@babel/transform-async-to-generator",
      ],
    }),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
      plugins: [autoprefixer()],
    }),
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
    }),
    replace({
      preventAssignment: true,
      // the following replacements build the site URLs.
      // In the templates, use (for example) __BASE_SITE_URL__/__FAQ_PATH__
      __BASE_SITE__: "https://rally.mozilla.org",
      __EMULATOR_MODE__: emulatorMode,
    }),
    //simple analysis on rollup bundling
    sizes(),
    svg(),
    hoistImportDeps(),
  ],
};

export default config;
