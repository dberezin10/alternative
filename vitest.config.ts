import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";
import { resolve } from "node:path";
import path from "path";

export default mergeConfig(
  viteConfig,
  defineConfig({
    // resolve: {
    //   alias: [{ find: "@", replacement: resolve(__dirname, "@utils/sum") }],
    // },
    test: {
      // include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      //exclude: ["packages/template/*"],
    },
    resolve: {
      alias: {
        "@/utils": path.resolve(__dirname, "./src/utils"),
      },
    },
  })
);
