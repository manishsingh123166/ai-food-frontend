import { getBlogBySlug } from "@/actions/blog.actions";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { notFound } from "next/navigation";
import Script from "next/script";
import { UserCheck, ArrowLeft, Share2, Calendar } from "lucide-react";
import Link from "next/link";
import Comments from "@/components/Comments";

/**
 * 1. DYNAMIC SEO METADATA
 * Next.js 15 Rule: Await params to get the slug for SEO crawling.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  
  if (!post) return { title: "Article Not Found | Manish Singh" };

  const imageUrl = post.Banner?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.Banner.url}` 
    : "";

  return {
    title: `${post.MetaTitle || post.Title} | Manish Singh AI Chef`,
    description: post.MetaDescription || post.Excerpt,
    openGraph: {
      title: post.Title,
      description: post.Excerpt,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: "article",
    },
  };
}

export default async function SingleBlog({ params }) {
  // NEXT.JS 15 RULE: Always await params first
  const { slug } = await params;
  
  // Data Fetching: Ensuring comments are populated from blog.actions.js
  const post = await getBlogBySlug(slug);

  if (!post) return notFound();

  const imageUrl = post.Banner?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.Banner.url}` 
    : "https://images.unsplash.com/photo-1495195129352-aec325a55b65";

  // 2. GOOGLE SCHEMA (JSON-LD) for Master-level SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.Title,
    "image": imageUrl,
    "datePublished": post.createdAt,
    "author": { "@type": "Person", "name": "Manish Singh" },
    "description": post.Excerpt,
  };

  return (
    <>
      <Script 
        id="schema-script" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      <article className="min-h-screen bg-stone-50/50 pt-28 pb-20 px-4 font-sans">
        <div className="container mx-auto max-w-4xl">

          {/* Back Navigation */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-all mb-12 font-black text-xs uppercase tracking-[0.2em]">
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          {/* ADMIN BRANDING SECTION */}
          <div className="flex items-center gap-5 mb-16 p-8 bg-white rounded-[2.5rem] shadow-sm border border-stone-100">
             <div className="w-20 h-20 rounded-[1.5rem] bg-stone-900 flex items-center justify-center text-white text-3xl font-black">MS</div>
             <div>
                <h4 className="text-2xl font-black text-stone-900 leading-none mb-2">Manish Singh</h4>
                <div className="flex items-center gap-2">
                   <span className="px-3 py-1 bg-orange-600 text-white text-[9px] font-black uppercase rounded-full flex items-center gap-1">
                     <UserCheck size={10} /> Verified Admin
                   </span>
                   <span className="text-xs font-bold text-stone-400 uppercase tracking-tighter italic font-serif">Master AI Chef</span>
                </div>
             </div>
          </div>

          {/* ARTICLE HEADER */}
          <header className="mb-16">
             <h1 className="text-5xl md:text-8xl font-black text-stone-900 leading-[0.95] tracking-tighter mb-10">
               {post.Title}
             </h1>
             <p className="text-xl md:text-3xl text-stone-500 leading-relaxed font-medium italic border-l-8 border-orange-500 pl-8 py-2">
                {post.Excerpt}
             </p>
          </header>

          {/* PREMIUM BANNER IMAGE */}
          <div className="relative aspect-[21/10] w-full mb-20 rounded-[3.5rem] overflow-hidden shadow-2xl ring-1 ring-stone-200">
            <img src={imageUrl} className="object-cover w-full h-full" alt={post.Title} />
          </div>

          {/* MAIN ARTICLE BODY */}
          <div className="max-w-3xl mx-auto bg-white p-10 md:p-20 rounded-[4rem] shadow-sm border border-stone-100 relative -mt-32 z-10">
             <div className="prose prose-stone lg:prose-2xl max-w-none prose-orange 
               prose-headings:text-stone-900 prose-headings:font-black 
               prose-p:text-stone-700 prose-p:leading-[1.8] prose-img:rounded-[2.5rem]">
               
               {post.Content ? (
                 <BlocksRenderer content={post.Content} />
               ) : (
                 <p className="text-stone-400 italic font-bold">The chef is preparing the content...</p>
               )}
               
             </div>

             {/* SHARE & METRICS SECTION */}
             <div className="mt-24 pt-12 border-t border-stone-100 flex flex-col items-center gap-6">
                <p className="text-stone-400 font-black text-[10px] uppercase tracking-[0.4em]">Share this Insight</p>
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-orange-600 hover:text-white transition-all cursor-pointer shadow-sm">
                      <Share2 size={18} />
                   </div>
                </div>
             </div>
          </div>

          {/* 💬 INTERACTIVE COMMENT SECTION */}
          <div className="max-w-3xl mx-auto mt-20">
             <Comments 
                blogId={post.id} 
                initialComments={post.comments} // Passing populated comments from Strapi
             />
          </div>

        </div>
      </article>
    </>
  );
}