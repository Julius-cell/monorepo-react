import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  build: {
    lib: {
      entry: resolve('src', 'main.tsx'),
      name: 'library-sb',
      formats: ['es', 'cjs'],
      fileName: (format) => `library-sb.${format === 'cjs' ? 'cjs' : 'es.js'}`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
}));
