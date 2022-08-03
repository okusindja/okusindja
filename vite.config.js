// import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "index.html"),
        skills: resolve(root, "skills", "index.html"),
        projects: resolve(root, "projects", "index.html"),
        hire: resolve(root, "hire", "index.html"),
      },
    },
  },
  // plugins: [
  //   legacy({
  //     targets: ["defaults", "not IE 11"],
  //   }),
  // ],
});
