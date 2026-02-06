// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://oding-ai.github.io',
  integrations: [
    mdx({
      shikiConfig: {
        theme: 'dracula', 
        wrap: true,
      },
      rehypePlugins: [
        rehypeSlug, // 헤더에 id 자동 생성 (#header)
        [rehypeAutolinkHeadings, { behavior: 'wrap' }], // 헤더에 링크 걸기
      ],
    }), 
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
