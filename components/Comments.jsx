"use client";
import { postComment } from "@/actions/comment.actions";
import { useState, useRef } from "react";
import { 
  MessageSquare, 
  User, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  MessageCircle
} from "lucide-react";

export default function Comments({ blogId, initialComments }) {
  const [status, setStatus] = useState({ type: null, msg: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  // Handle Form Submission
  async function handleSubmit(formData) {
    setLoading(true);
    setStatus({ type: null, msg: "" });

    const res = await postComment(formData, blogId);
    
    setLoading(false);
    if (res?.success) {
      setStatus({ 
        type: "success", 
        msg: "Your comment has been published successfully! ✅" 
      });
      formRef.current?.reset();
      // Clear message after 5 seconds
      setTimeout(() => setStatus({ type: null, msg: "" }), 5000);
    } else {
      setStatus({ 
        type: "error", 
        msg: res?.error || "Failed to post comment. Please try again." 
      });
    }
  }

  return (
    <section 
      className="mt-24 pt-12 border-t border-stone-200"
      itemScope 
      itemType="https://schema.org/UserComments"
    >
      {/* 1. Header with Icon */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
           <MessageCircle size={24} />
        </div>
        <div>
          <h3 className="text-3xl font-black text-stone-900 tracking-tight">
            Reader Insights
          </h3>
          <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">
            {initialComments?.length || 0} Discussions Joined
          </p>
        </div>
      </div>

      {/* 2. Feedback Messages */}
      {status.msg && (
        <div className={`mb-8 p-5 rounded-[2rem] flex items-center gap-3 font-bold transition-all animate-in fade-in slide-in-from-top-4 ${
          status.type === "success" 
          ? "bg-green-50 text-green-700 border border-green-100" 
          : "bg-red-50 text-red-700 border border-red-100"
        }`}>
          {status.type === "success" ? <CheckCircle2 size={22} /> : <AlertCircle size={22} />}
          <span>{status.msg}</span>
        </div>
      )}

      {/* 3. Modern Comment Form */}
      <form 
        ref={formRef} 
        action={handleSubmit} 
        className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-sm border border-stone-100 mb-20 group focus-within:ring-2 focus-within:ring-orange-500/20 transition-all"
      >
        <div className="space-y-6">
          <div className="relative">
            <User className="absolute left-4 top-4 text-stone-300" size={20} />
            <input 
              name="authorName" 
              type="text"
              placeholder="Your Full Name" 
              required 
              className="w-full pl-12 pr-6 py-4 bg-stone-50 rounded-2xl border-none outline-none font-bold text-stone-800 placeholder:text-stone-300 transition-all focus:bg-white"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-stone-300" size={20} />
            <textarea 
              name="content" 
              placeholder="Share your culinary thoughts or questions..." 
              required 
              className="w-full pl-12 pr-6 py-4 h-40 bg-stone-50 rounded-2xl border-none outline-none font-medium text-stone-700 placeholder:text-stone-300 resize-none transition-all focus:bg-white"
            />
          </div>

          <button 
            disabled={loading}
            type="submit" 
            className="w-full md:w-auto px-12 py-4 bg-stone-900 text-white font-black rounded-2xl hover:bg-orange-600 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-stone-200"
          >
            {loading ? "PUBLISHING..." : <>PUBLISH INSIGHT <Send size={18} /></>}
          </button>
        </div>
      </form>

      {/* 4. Comments List (SEO Optimized) */}
      <div className="space-y-8">
        {initialComments && initialComments.length > 0 ? (
          initialComments.map((comment) => (
            <div 
              key={comment.id} 
              className="group flex gap-6 p-8 bg-white rounded-[3rem] border border-stone-50 shadow-sm hover:shadow-md transition-all"
              itemProp="comment" 
              itemScope 
              itemType="https://schema.org/Comment"
            >
              {/* Avatar Placeholder */}
              <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-orange-50 items-center justify-center text-orange-600 font-black text-xl shrink-0">
                {comment.authorName?.charAt(0).toUpperCase()}
              </div>

              <div className="flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h4 
                    className="font-black text-stone-900 text-lg tracking-tight"
                    itemProp="author"
                  >
                    {comment.authorName}
                  </h4>
                  <span className="text-[10px] font-black text-stone-300 uppercase tracking-widest">
                    Verified Reader
                  </span>
                </div>
                
                <p 
                  className="text-stone-600 leading-relaxed font-medium"
                  itemProp="text"
                >
                  {comment.content}
                </p>

                <div className="mt-6 flex items-center gap-4">
                   <button className="text-[10px] font-black text-stone-400 hover:text-orange-600 uppercase tracking-widest transition-colors">
                      Helpful?
                   </button>
                   <span className="text-stone-100">|</span>
                   <button className="text-[10px] font-black text-stone-400 hover:text-stone-900 uppercase tracking-widest transition-colors">
                      Reply
                   </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-stone-50/50 rounded-[4rem] border-2 border-dashed border-stone-100">
             <div className="text-5xl mb-4 opacity-50">✍️</div>
             <p className="text-stone-400 font-black text-sm uppercase tracking-[0.3em]">
                Be the first to start the conversation
             </p>
          </div>
        )}
      </div>
    </section>
  );
}