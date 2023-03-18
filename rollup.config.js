import { babel } from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import image from "rollup-plugin-img";

export default {
    input: "./src/index.js",
    output: {
        file: "./build/bundle.js",
        format: "iife"
    },
    plugins: [
        babel({ babelHelpers: "bundled" }),
        styles(),
        image({ limit: 1000000 })
    ]
};