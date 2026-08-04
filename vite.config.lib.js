import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  resolve: {
    conditions: ['import', 'module', 'browser', 'default'],
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'BiginDesignSystem',
      formats: ['es'],
      fileName: () => `bigin-design-system.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        format: 'es',
        interop: 'esModule',
      },
    },
  },
})
