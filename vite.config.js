import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html', 
        movie: './movie.html', 
        search: './search.html',
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    fs: {
      strict: false, 
    },
  },
});

