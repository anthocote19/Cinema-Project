import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    FullReload(['./*.html']), 
  ],
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
    port: 4000,          
    open: true,         
  },
});
