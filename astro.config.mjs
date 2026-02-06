// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx({
      // Shiki 설정 (Syntax Highlighting)
      shikiConfig: {
        theme: 'dracula', // 다크 모드에 어울리는 테마
        wrap: true,       // 긴 줄 자동 줄바꿈
      },
    }), 
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
