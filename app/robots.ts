import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/recipe'], // Explicitly allow /recipe path
      disallow: ['/private/', '/admin/'], 
    },
    sitemap: 'https://www.recipeoai.com/sitemap.xml',
  }
}
