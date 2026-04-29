// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  vite: {
      plugins: [tailwindcss(),]
  },
  image: {
      service: passthroughImageService(),
      remotePatterns: [
          { protocol: 'https' }
      ]
  }
});
