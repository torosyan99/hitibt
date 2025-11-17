import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig((env) => {
  const { mode } = env;

  return {
    plugins: [react(), svgr()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.jsx', '.ts', '.js'],
    },
    css: {
      modules: {
        generateScopedName:
          mode === 'development' ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:8]',
      },
    },
  };
});
