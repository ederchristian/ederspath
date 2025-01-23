import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  site: SITE_URL,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    }
  },
  vite: {
    plugins: [
      {
        name: 'custom-favicons',
        transformIndexHtml(html) {
          return html.replace(
            /<\/head>/,
            `
              <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
              <link rel="icon" type="image/svg+xml" href="/favicon.svg">
              <link rel="shortcut icon" href="/favicon.ico">
              <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
              </head>
            `
          );
        },
      },
    ],
  }
});