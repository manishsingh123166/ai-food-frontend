"use server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * 1. Saare blogs ki list mangwane ke liye (Blog List Page)
 */
export async function getBlogs() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blogs?populate=*`, {
      headers: { 
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json"
      },
      cache: "no-store", 
    });
    
    if (!res.ok) {
       const errorData = await res.json();
       console.error("Strapi List Error:", errorData);
       throw new Error("Failed to fetch blogs list");
    }
    
    const data = await res.json();
    return data.data || []; 
  } catch (error) {
    console.error("Blog list fetch error:", error);
    return [];
  }
}

/**
 * 2. Ek single blog mangwane ke liye (Single Blog Page)
 * FIXED: 'populate=*' use kiya hai taaki 'Invalid key comments' wala error na aaye.
 */
export async function getBlogBySlug(slug) {
  if (!slug || slug === "undefined") {
    console.warn("getBlogBySlug: Slug is empty.");
    return null;
  }

  try {
    /** 
     * 🔥 THE FIX: 
     * Tune populate[comments]=* likha tha, lekin Blog model me 'comments' field nahi hai.
     * Isliye hum sirf 'populate=*' use karenge jo saare sahi relations (Banner etc.) le aayega.
     */
    const query = `filters[Slug][$eq]=${encodeURIComponent(slug)}&populate=*`;
    const url = `${STRAPI_URL}/api/blogs?${query}`;
    
    const res = await fetch(url, {
      headers: { 
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json"
      },
      cache: "no-store",
    });

    if (!res.ok) {
       const errorData = await res.json();
       console.error("Strapi Single Fetch Error:", errorData);
       return null;
    }

    const data = await res.json();
    const post = data.data?.[0];

    if (!post) {
      console.log(`404: No article found for slug: ${slug}`);
      return null;
    }

    return post;
  } catch (error) {
    console.error("Single blog fetch error:", error);
    return null;
  }
}