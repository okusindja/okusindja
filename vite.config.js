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
        about: resolve(root, "pages/about", "index.html"),
        skills: resolve(root, "pages/skills", "index.html"),
        experience: resolve(root, "pages/experience", "index.html"),
        projects: resolve(root, "pages/projects", "index.html"),
        hire: resolve(root, "pages/hire", "index.html"),
      },
    },
  },
  // plugins: [
  //   legacy({
  //     targets: ["defaults", "not IE 11"],
  //   }),
  // ],
});
