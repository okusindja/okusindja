// import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";
import { defineConfig } from "vite";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";

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
        experience: resolve(root, "experience", "index.html"),
        projects: resolve(root, "projects", "index.html"),
        hire: resolve(root, "hire", "index.html"),
      },
      // output: {
      //   globals: {
      //     jquery: "window.$",
      //   },
      // },
    },
  },
  plugins: [
    ViteFaviconsPlugin({
      logo: "public/kussys-avatar.png",
      favicons: {
        appName: "Okusindja",
        appDescription: "Okusindjas web portfolio",
        developerName: "Okusindja de Almeida",
        developerURL: null,
        background: "#ddd",
        theme_color: "#333",
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
  ],
});
