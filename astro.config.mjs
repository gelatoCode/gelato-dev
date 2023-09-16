import { defineConfig } from 'astro/config';
import remarkCodeTitle from 'remark-code-title';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  markdown : {
    syntaxHighlight : 'prism',
    remarkPlugins : [remarkCodeTitle]
  },
  integrations : [sitemap()]
});
