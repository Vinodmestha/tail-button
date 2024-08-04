import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig( {
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.jsx"),
      name: 'tail-button',
      fileName: "tail-button"
    }
  },
  css: {
    postcss: {
        plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [react(), tailwindcss(), libInjectCss()],
})
