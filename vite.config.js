import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["quill"],
  },
  build: {
    commonjsOptions: {
      include: [/quill/, /node_modules/],
      transformMixedEsModules: true,
    },
  },
});
