
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // API Keys removed
      },
      resolve: {
        alias: {
          '@': path.resolve('.'),
        }
      },
      build: {
        chunkSizeWarningLimit: 2000, // Increased limit to 2000kb to hide warning
        rollupOptions: {
          output: {
            manualChunks(id) {
              // Split node_modules into a separate 'vendor' file
              if (id.includes('node_modules')) {
                return 'vendor';
              }
            }
          }
        }
      }
    };
});
