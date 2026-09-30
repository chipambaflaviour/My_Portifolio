/**
 * Content paths are written from the site root ("/images/x.jpg"). Prefixing the
 * Vite base keeps them working when the site is served from a sub-path, such as
 * a GitHub Pages project site.
 */
export function assetUrl(path: string): string {
  if (!path.startsWith('/')) return path
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
}
