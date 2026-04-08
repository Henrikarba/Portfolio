
import path from 'path';
import fs from 'fs';



const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './dist',);

// Plugin to copy index.html to 404.html after build
const copy404Plugin = {
  name: 'copy-404',
  writeBundle() {
    const indexPath = path.join(BUILD_DIR, 'index.html');
    const notFoundPath = path.join(BUILD_DIR, '404.html');
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
    }
  }
};

export default async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');
  return {
    plugins: [
      svelte(),
      copy404Plugin,

    ],
    root: SRC_DIR,
    base: '/',
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
      },
    },
    server: {
      host: true,
    },

  };
}
