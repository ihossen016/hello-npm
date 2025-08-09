import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"], // ship both ESM and CJS
  dts: true, // generate .d.ts
  clean: true, // wipe dist before build
  sourcemap: true,
  minify: false,
});
