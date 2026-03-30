import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ZAROORI: Tera main domain yahi hai
  const baseUrl = 'https://www.recipeoai.com'
  
  // Render wala Live Backend URL
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://ai-recipe-backend-l00p.onrender.com'

  // 1. STATIC PAGES
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
    // 2. FETCH RECIPES (Slugs for SEO)
    const recipesRes = await fetch(`${strapiUrl}/api/recipes?fields[0]=slug&fields[1]=updatedAt`, {
      next: { revalidate: 3600 } 
    });
    const recipesData = await recipesRes.json();

    const recipePages = (recipesData.data || [])
      .map((recipe: any) => {
        const attr = recipe.attributes || recipe;
        const slug = attr.slug;

        // Agar slug nahi hai toh null return karo, baad mein filter ho jayega
        if (!slug || slug === "null") return null;

        return {
          url: `${baseUrl}/recipes/${slug}`,
          lastModified: new Date(attr.updatedAt || new Date()),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        };
      })
      .filter((p: any) => p !== null && p.url.indexOf('undefined') === -1); // 'null' aur 'undefined' filter out

    // 3. FETCH BLOGS (Slugs for SEO)
    const blogsRes = await fetch(`${strapiUrl}/api/blogs?fields[0]=slug&fields[1]=updatedAt`, {
      next: { revalidate: 3600 }
    });
    const blogsData = await blogsRes.json();

    const blogPages = (blogsData.data || [])
      .map((post: any) => {
        const attr = post.attributes || post;
        const slug = attr.slug;

        // Agar slug nahi hai toh null return karo
        if (!slug || slug === "null") return null;

        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date(attr.updatedAt || new Date()),
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        };
      })
      .filter((p: any) => p !== null && p.url.indexOf('undefined') === -1);

    dynamicPages = [...recipePages, ...blogPages];

  } catch (error) {
    console.error("Sitemap Fetch Error:", error);
  }

  // Final List return
  return [...staticPages, ...dynamicPages]
}