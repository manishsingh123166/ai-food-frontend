import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Send, 
  Shield, 
  Share2,
  CheckCircle2
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata - Google Ranking ke liye perfect keywords
export const metadata = {
  title: "RecipeoAI - #1 AI Recipe Generator & Smart Kitchen 2026",
  description: "Transform your leftovers into gourmet masterpieces with RecipeoAI. The world's most advanced AI cooking assistant for zero-waste, smart meal planning.",
  keywords: "AI Recipe Generator, Smart Kitchen Assistant, Zero Waste Cooking, RecipeoAI, Gourmet Food AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.jpg" sizes="any" />
        </head>
        <body className={`${inter.className} bg-stone-50 text-stone-900`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* --- PROFESSIONAL INTERNATIONAL FOOTER --- */}
          <footer className="bg-white border-t border-stone-200 pt-20 pb-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto">
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* 1. BRAND SECTION (logo.jpg ke sath) */}
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
                  <button className="flex items-center gap-2 px-6 py-2.5 border border-stone-200 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-stone-50 transition-all active:scale-95 shadow-sm">
                    <Share2 className="w-4 h-4" /> Share App
                  </button>
                </div>

                {/* 2. RESOURCES SECTION (Normal Casing) */}
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

              {/* BOTTOM STRIP (Removed Language Selector) */}
              <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> System Status: All Systems Operational
                </div>
                
                <p className="text-[11px] text-stone-400 font-bold uppercase tracking-[0.2em]">
                  © 2026 <span className="text-stone-900">RecipeoAI</span> • All Rights Reserved.
                </p>
              </div>

            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}