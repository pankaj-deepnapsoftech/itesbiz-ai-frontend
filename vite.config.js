import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['quill', 'react-quilljs'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  
})

