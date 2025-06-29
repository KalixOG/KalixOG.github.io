import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/KalixOG.github.io/',  // 👈 important
  plugins: [react()],
});

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
