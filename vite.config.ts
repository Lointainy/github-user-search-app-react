import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "sass:math";
        @import "@/assets/scss/partials";
        @import "@/assets/scss/grid";
        `,
      },
    },
  },
})
