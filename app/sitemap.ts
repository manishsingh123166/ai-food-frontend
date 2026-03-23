import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.recipeoai.com'
  // Production mein env variable use karein, development mein localhost
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

  // 1. STATIC PAGES - Google Indexing ke liye base pages
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/recipes',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  let dynamicPages: MetadataRoute.Sitemap = [];

  try {
    // 2. FETCH RECIPES FROM STRAPI (Using Slugs)
    const recipesRes = await fetch(`${strapiUrl}/api/recipes?fields[0]=slug&fields[1]=updatedAt`, {
      cache: 'no-store' 
    });
    const recipesData = await recipesRes.json();

    const recipePages = (recipesData.data || []).map((recipe: any) => ({
      // Agar slug nahi hai toh documentId fallback rakha hai (Saftey ke liye)
      url: `${baseUrl}/recipes/${recipe.slug || recipe.documentId}`, 
      lastModified: new Date(recipe.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    // 3. FETCH BLOGS FROM STRAPI (Using Slugs)
    const blogsRes = await fetch(`${strapiUrl}/api/blogs?fields[0]=slug&fields[1]=updatedAt`, {
      cache: 'no-store'
    });
    const blogsData = await blogsRes.json();

    const blogPages = (blogsData.data || []).map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    // Dono ko dynamicPages array mein daal do
    dynamicPages = [...recipePages, ...blogPages];

  } catch (error) {
    // Backend band ho toh terminal mein warning aayegi, site nahi pategi
    console.warn("Sitemap Alert: Strapi fetch failed. Static pages indexed only.");
  }

  return [...staticPages, ...dynamicPages]
}