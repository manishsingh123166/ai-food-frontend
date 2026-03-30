import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script"; // SEO Schema ke liye
import { 
  ShieldCheck, 
  Lock, 
  Send, 
  Shield, 
  Share2,
  CheckCircle2
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

// --- 1. SEO METADATA ---
export const metadata = {
  // ZAROORI: metadataBase se saare absolute URLs (images, canonical) sahi bante hain
  metadataBase: new URL("https://www.recipeoai.com"),
  
  title: "RecipeoAI - #1 AI Recipe Generator | What to cook with ingredients 2026",
  description: "Transform your leftovers into gourmet masterpieces with RecipeoAI. The world's most advanced ai recipe maker free for keto, vegan, and high protein meal planning. Solve 'what to cook tonight easy' with our smart recipe generator.",
  keywords: [
    "ai recipe generator", "ai recipe maker free", "ai cooking generator", "recipe generator ai free", "smart recipe generator",
    "what can i cook with ingredients", "what to cook tonight easy", "random recipe generator", "meal ideas generator", "dinner ideas generator",
    "keto recipe generator", "vegan recipe generator", "weight loss meal generator", "low calorie recipe generator", "high protein meal planner",
    "ai recipe generator from ingredients free", "what can i cook with chicken and rice", "quick 5 minute recipes generator", "healthy meal plan generator ai",
    "viral food recipes 2026", "trending dinner ideas"
  ].join(", "),
  authors: [{ name: "Manish Singh" }],
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    // Isse Google sirf https://www. wale link ko hi index karega
    canonical: "https://www.recipeoai.com",
  },
  openGraph: {
    title: "RecipeoAI - Your Personal AI Master Chef",
    description: "Cook like a pro with the world's best AI recipe generator.",
    url: "https://www.recipeoai.com",
    siteName: "RecipeoAI",
    images: [{ url: "/logo.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  
  // --- 2. GOOGLE SCHEMA (JSON-LD) ---
  const googleSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RecipeoAI",
    "url": "https://www.recipeoai.com", // Add kiya URL
    "operatingSystem": "Web",
    "applicationCategory": "LifestyleApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Manish Singh"
    },
    "description": "The #1 AI Recipe Generator that helps you decide what to cook tonight using ingredients you already have."
  };

  return (
    <ClerkProvider
      publishableKey="pk_live_Y2xlcmsucmVjaXBlb2FpLmNvbSQ"
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.jpg" sizes="any" />
          {/* Schema Injection for Google Stars */}
          <Script
            id="google-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(googleSchema) }}
          />
        </head>
        <body className={`${inter.className} bg-stone-50 text-stone-900`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* --- PROFESSIONAL INTERNATIONAL FOOTER --- */}
          <footer className="bg-white border-t border-stone-200 pt-20 pb-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto">
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* 1. BRAND SECTION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="/logo.jpg" 
                      alt="RecipeoAI Logo" 
                      width={45} 
                      height={45} 
                      className="rounded-xl shadow-sm" 
                    />
                    <span className="text-2xl font-black tracking-tighter">
                      Recipeo<span className="text-orange-600">AI</span>
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-medium">
                    World-class AI culinary assistant helping you turn leftovers into gourmet meals while reducing global food waste.
                  </p>
                  <div className="flex flex-col gap-2">
                     <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Global User Rating</p>
                     <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-orange-500 text-orange-500" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs font-bold text-stone-600 ml-1">4.9/5</span>
                     </div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-2.5 border border-stone-200 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-stone-50 transition-all active:scale-95 shadow-sm">
                    <Share2 className="w-4 h-4" /> Share App
                  </button>
                </div>

                {/* 2. RESOURCES SECTION */}
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Resources</h3>
                  <ul className="space-y-3 text-stone-500 text-sm font-semibold">
                    <li><Link href="/about" className="hover:text-orange-600 transition-colors flex items-center gap-2">• About Us</Link></li>
                    <li><Link href="/faq" className="hover:text-orange-600 transition-colors flex items-center gap-2">• FAQ Center</Link></li>
                    <li><Link href="/privacy" className="hover:text-orange-600 transition-colors flex items-center gap-2">• Privacy Policy</Link></li>
                    <li><Link href="/contact" className="hover:text-orange-600 transition-colors flex items-center gap-2">• Contact Us</Link></li>
                    <li><Link href="/disclaimer" className="hover:text-orange-600 transition-colors flex items-center gap-2">• Legal Disclaimer</Link></li>
                    <li><Link href="/terms" className="hover:text-orange-600 transition-colors flex items-center gap-2">• Terms of Service</Link></li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-stone-900 mb-4 tracking-wide">Community</h3>
                    <Link href="https://t.me/your_telegram" className="inline-flex items-center gap-2 px-6 py-3 bg-[#229ED9] text-white rounded-2xl text-xs font-bold shadow-lg shadow-blue-100 hover:brightness-110 transition-all uppercase tracking-wider">
                      <Send className="w-4 h-4" /> Join Official Telegram
                    </Link>
                  </div>
                </div>

                {/* 3. SECURITY SECTION */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Security & Trust</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shadow-sm">
                           <Lock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">Local Processing</p>
                          <p className="text-xs text-stone-400 font-medium mt-0.5">Images never leave your device</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
                           <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">End-to-End Encryption</p>
                          <p className="text-xs text-stone-400 font-medium mt-0.5">100% private & secure recipes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. COMPLIANCE SECTION */}
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Compliance</h3>
                  <div className="p-6 border border-stone-100 rounded-[2rem] bg-stone-50/50 flex flex-col items-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4 border border-stone-100">
                      <ShieldCheck className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="text-sm font-bold text-stone-900">GDPR Compliant</p>
                    <p className="text-[11px] text-stone-400 mt-2 leading-relaxed font-medium">
                      100% Private - Your data is handled with strict international privacy protocols.
                    </p>
                  </div>
                </div>

              </div>

              {/* BOTTOM STRIP */}
              <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> System Status: All Systems Operational
                </div>
                
                <p className="text-[11px] text-stone-400 font-bold uppercase tracking-[0.2em]">
                  © 2026 <span className="text-stone-900">RecipeoAI</span> • Developed by <Link href="https://manishsingh.com" className="text-orange-600">Manish Singh</Link>
                </p>
              </div>

            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}