import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'public/index.html',
        search: 'public/search.html',
        movie: 'public/movie.html',
      },
    },
  },
});
