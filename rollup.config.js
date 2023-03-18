import { babel } from "@rollup/plugin-babel";

export default {
    input: "./index.js",
    output: {
        file: "./build/bundle.js",
        format: "iife"
    },
    plugins: [
        babel({ babelHelpers: "bundled" })
    ]
};