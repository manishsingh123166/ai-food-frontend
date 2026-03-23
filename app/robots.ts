import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Agar koi private dashboard ho toh
    },
    sitemap: 'https://recipeoai.com/sitemap.xml',
  }
}