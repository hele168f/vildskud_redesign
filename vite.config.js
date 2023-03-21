// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        frivillig: resolve(__dirname, "src/frivillig.html"),
        om: resolve(__dirname, "src/om.html"),
        sponsorer: resolve(__dirname, "src/sponsorer.html"),
        billetter: resolve(__dirname, "src/billetter.html"),
        cookies: resolve(__dirname, "src/cookies.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        privatliv: resolve(__dirname, "src/privatliv.html"),
        program: resolve(__dirname, "src/program.html"),
        venues: resolve(__dirname, "src/venues.html"),
        sitemaphtml: resolve(__dirname, "src/sitemap.html"),
      },
    },
  },
});
