import { defineConfig } from 'astro/config';
import remarkCodeTitle from 'remark-code-title';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site : 'https://gelatogeek.web.app',
  markdown : {
    syntaxHighlight : 'prism',
    remarkPlugins : [remarkCodeTitle]
  },
  integrations : [sitemap()]
});
