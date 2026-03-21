"use server";
import { revalidatePath } from "next/cache";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function postComment(formData, blogId) {
  const content = formData.get("content")?.trim();
  const authorName = formData.get("authorName")?.trim();

  // Safety Check: Agar blogId nahi hai toh comment link nahi ho payega
  if (!blogId) return { error: "Technical error: Blog ID missing!" };
  if (!content || !authorName) return { error: "Please fill all fields!" };

  try {
    const res = await fetch(`${STRAPI_URL}/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          content: content,
          authorName: authorName,
          // ✅ LINKING: Ye blogId Number hona chahiye (e.g., 1)
          blog: Number(blogId), 
        },
      }),
    });

    const data = await res.json();

    if (res.ok) {
      // 🚀 SEO & CACHE REFRESH: Isse naya comment turant dikhega
      revalidatePath("/blog/[slug]", "page"); 
      return { success: true, message: "Comment published successfully! ✅" };
    } else {
      console.error("Strapi Response Error:", data);
      return { error: data.error?.message || "Failed to link comment to blog." };
    }
  } catch (error) {
    return { error: "Server connection error." };
  }
}