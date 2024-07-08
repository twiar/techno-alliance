import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  server: {
    origin: '/',

  },
  plugins: [react()],
})

// export default defineConfig({
//   build: {
//     outDir: resolve(__dirname, 'dist'),
//   },
//   server: {
//     base: '/',
//     historyApiFallback: true,
//   },
//   plugins: [react()],
// });
