import { getBlogs } from "@/actions/blog.actions";
import Link from "next/link";
import { Calendar, ArrowRight, UserCheck, Star } from "lucide-react";
import Script from "next/script";

// --- 1. DYNAMIC CONFIG ---
export const dynamic = 'force-dynamic';

// --- 2. VIEWPORT CONFIG ---
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// --- 3. SEO METADATA ---
export const metadata = {
  title: "Manish Singh Official Blog | AI Cooking, Recipes & Tech Insights",
  description: "Explore advanced culinary stories, AI-driven recipe secrets, and professional cooking tips by Master AI Chef Manish Singh.",
  keywords: ["AI Recipes", "Manish Singh", "Cooking Blog", "AI Chef", "RecipeoAI", "Culinary Technology"],
  openGraph: {
    title: "Manish Singh Official Blog | AI Cooking Insights",
    description: "Master the art of AI cooking with Manish Singh.",
    url: "https://www.recipeoai.com/blog",
    siteName: "RecipeoAI",
    images: [
      {
        url: "https://www.recipeoai.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function BlogPage() {
  // Fetch blogs with error handling
  let blogs = [];
  try {
    blogs = await getBlogs() || [];
  } catch (error) {
    console.error("Blog fetch error:", error);
  }

  // Strapi v4/v5 compatibility fix & sorting
  const sortedBlogs = blogs.length > 0 ? [...blogs].sort((a, b) => {
    const dateA = new Date(a.attributes?.createdAt || a.createdAt);
    const dateB = new Date(b.attributes?.createdAt || b.createdAt);
    return dateB - dateA;
  }) : [];

  // GOOGLE SCHEMA (JSON-LD) - FIXED VERSION (Rating removed to fix Search Console error)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Manish Singh Official Blog",
    "description": "AI-driven recipe secrets and culinary tech insights.",
    "publisher": {
      "@type": "Organization",
      "name": "RecipeoAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.recipeoai.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-stone-50/50 pt-28 pb-20 px-4 font-sans">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 text-[10px] font-black uppercase rounded-full mb-6 border border-orange-200">
             <UserCheck size={14} /> Manish Singh Official
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] tracking-tighter mb-6">
            COOKING <span className="text-orange-600 italic">STORIES.</span>
          </h1>
          <div className="flex items-center gap-2 text-orange-500 mb-4">
             {/* UI Stars: Ye website par dikhenge, par Google ko disturb nahi karenge */}
             {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
             <span className="text-stone-400 text-xs font-bold ml-2">4.9/5 Rating by AI Enthusiasts</span>
          </div>
        </div>

        {/* --- BLOG GRID --- */}
        {sortedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sortedBlogs.map((post) => {
              const data = post.attributes || post;
              const postSlug = data.Slug || data.slug;
              const imageUrl = data.Banner?.url || data.Banner?.data?.attributes?.url;
              
              const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || '';
              const fullImageUrl = imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `${strapiUrl}${imageUrl}`) : "/placeholder.jpg";

              return (
                <div key={post.id} className="group flex flex-col bg-white rounded-[3rem] overflow-hidden shadow-sm hover:-translate-y-3 transition-all duration-700 ring-1 ring-stone-100">
                  <div className="aspect-[16/10] relative overflow-hidden bg-stone-200">
                    <img 
                      src={fullImageUrl} 
                      alt={data.Title || "Blog Post"}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>

                  <div className="p-10 flex flex-col flex-grow">
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4 line-clamp-2">
                      {data.Title}
                    </h2>
                    <p className="text-stone-500 line-clamp-3 mb-10 text-sm font-medium">
                      {data.Excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between border-t border-stone-50 pt-8">
                      <span className="flex items-center gap-2 text-stone-400 text-[10px] font-black uppercase">
                        <Calendar size={12} className="text-orange-500" /> 
                        {data.createdAt ? new Date(data.createdAt).toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' }) : "Recently"}
                      </span>

                      <Link 
                        href={`/blog/${postSlug}`} 
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-[10px] font-black rounded-2xl hover:bg-orange-600 transition-all"
                      >
                        READ FULL ARTICLE 
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-32">
            <h3 className="text-2xl font-black text-stone-300">The chef is writing new stories...</h3>
          </div>
        )}
      </div>
    </div>
  );
}
