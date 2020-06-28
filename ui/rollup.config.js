import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import html from "@rollup/plugin-html";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.tsx",
  output: {
    dir: "public/dist",
    format: "esm",
    sourcemap: true
  },
  plugins: [
    babel({
      extensions: [".js", ".ts", ".jsx", ".tsx"]
    }),
    commonjs(),
    nodeResolve(),
    terser(),
    html(),
  ]
}
