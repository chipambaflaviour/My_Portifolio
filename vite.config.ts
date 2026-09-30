import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

/**
 * SEO files depend on where the site is deployed, so they are generated from
 * VITE_SITE_URL instead of hard-coding a domain. Without it, canonical/og:url
 * tags and the sitemap are simply left out.
 */
function seo(siteUrl: string | undefined): Plugin {
  const url = siteUrl?.replace(/\/+$/, '')
  return {
    name: 'portfolio-seo',
    transformIndexHtml() {
      if (!url) return []
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: `${url}/` }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: `${url}/` }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image', content: `${url}/og-image.png` }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:image', content: `${url}/og-image.png` }, injectTo: 'head' },
      ]
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', ...(url ? [`Sitemap: ${url}/sitemap.xml`] : [])].join('\n')
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots}\n` })
      if (!url) return
      const today = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    // Set VITE_BASE=/repo-name/ when deploying to a GitHub Pages project site.
    base: env.VITE_BASE || '/',
    plugins: [react(), tailwindcss(), seo(env.VITE_SITE_URL)],
  }
})
