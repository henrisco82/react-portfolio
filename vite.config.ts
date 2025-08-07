import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/react-portfolio/', // <-- make sure this is your GitHub repo name
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '', // this will copy it into dist/ as 404.html
          rename: '404.html',
        },
      ],
      watch: {
        reloadPageOnChange: false,
      },
    }),
  ],
});
