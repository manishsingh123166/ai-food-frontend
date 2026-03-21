import { getBlogs } from "@/actions/blog.actions";
import Link from "next/link";
import { Calendar, ArrowRight, UserCheck } from "lucide-react";

export const metadata = {
  title: "Manish Singh Official Blog | AI Cooking & Tech Insights",
  description: "Advanced culinary stories and AI-driven recipe secrets by Manish Singh.",
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  const sortedBlogs = blogs ? [...blogs].sort((a, b) => 
    new Date(b.createdAt) - new Date(a.createdAt)
  ) : [];

  return (
    <div className="min-h-screen bg-stone-50/50 pt-28 pb-20 px-4 font-sans">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 border border-orange-200">
             <UserCheck size={14} /> Manish Singh Official
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] tracking-tighter mb-6">
            COOKING <span className="text-orange-600 italic">STORIES.</span>
          </h1>
        </div>

        {/* Blog Grid */}
        {sortedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sortedBlogs.map((post) => {
              // YAHA DHAYAN DE: Hum check kar rahe hain ki slug 'Slug' me hai ya 'slug' me
              const postSlug = post.Slug || post.slug || post.attributes?.Slug || post.attributes?.slug;

              return (
                <div key={post.id} className="group flex flex-col bg-white rounded-[3rem] overflow-hidden shadow-sm hover:-translate-y-3 transition-all duration-700 ring-1 ring-stone-100">
                  {/* Image */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-stone-200">
                    <img 
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.Banner?.url}`} 
                      alt={post.Title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col flex-grow">
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4 line-clamp-2">
                      {post.Title}
                    </h2>
                    <p className="text-stone-500 line-clamp-3 mb-10 text-sm font-medium">
                      {post.Excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between border-t border-stone-50 pt-8">
                      <span className="flex items-center gap-2 text-stone-400 text-[10px] font-black uppercase">
                        <Calendar size={12} className="text-orange-500" /> 
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>

                      {/* FIXED LINK: postSlug variable use kar rahe hain */}
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
          <div className="text-center py-32"><h3>No posts found.</h3></div>
        )}
      </div>
    </div>
  );
}