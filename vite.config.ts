import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./assets', import.meta.url))
    }
  },
  build: {
    minify: false,
    // generate manifest.json in outDir
    outDir: 'dist',
    manifest: true,
    copyPublicDir: false,
    rollupOptions: {
      input: './assets/main.ts',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    },
  },
})
