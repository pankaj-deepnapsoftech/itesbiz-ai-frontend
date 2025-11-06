import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["quill"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          swiper: ["swiper"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          editor: ["quill", "lexical", "@lexical/react"],
        },
      },
    },
    commonjsOptions: {
      include: [/quill/, /node_modules/],
      transformMixedEsModules: true,
    },
  },
});
