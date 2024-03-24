import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 
   server: {
    port: 5175,
    strictPort: true,
    open: true,
    proxy: {
      '/api': {
        target: 'https://fitapi.sakthinirmala2107.workers.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})