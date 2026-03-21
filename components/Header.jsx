import React from "react";
import { Button } from "./ui/button";
import { 
  Cookie, 
  Refrigerator, 
  Sparkles, 
  BookOpenText // Naya icon blog ke liye
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import HowToCookModal from "./HowToCookModal";
import PricingModal from "./PricingModal";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import { Badge } from "./ui/badge";
import UserDropdown from "./UserDropdown";

export default async function Header() {
  const user = await checkUser();

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60" role="banner">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Main Navigation">
        
        {/* 1. Logo Section - SEO Optimized with Alt Text */}
        <div className="flex items-center gap-8">
          <Link
            href={user ? "/dashboard" : "/"}
            className="flex items-center gap-2 group transition-transform active:scale-95"
            title="Servd - Home"
          >
            <Image
              src="/orange-logo.png"
              alt="Servd AI Recipe Platform Logo"
              width={60}
              height={60}
              className="w-16"
              priority // Logo ko jaldi load karne ke liye
            />
          </Link>

          {/* 2. Navigation Links - Added Blog Link here */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-bold text-stone-600 uppercase tracking-tight">
            <Link
              href="/recipes"
              className="hover:text-orange-600 transition-all flex gap-2 items-center group"
            >
              <Cookie className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>My Recipes</span>
            </Link>
            
            <Link
              href="/pantry"
              className="hover:text-orange-600 transition-all flex gap-2 items-center group"
            >
              <Refrigerator className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>My Pantry</span>
            </Link>

            {/* 🔥 NEW BLOG LINK ADDED HERE */}
            <Link
              href="/blog"
              className="hover:text-orange-600 transition-all flex gap-2 items-center group relative"
              title="Read our latest AI cooking stories"
            >
              <BookOpenText className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
              <span>Blog</span>
              {/* Chota sa dot indicator SEO and UI ke liye */}
              <span className="absolute -top-1 -right-2 w-1 h-1 bg-orange-600 rounded-full animate-pulse"></span>
            </Link>
          </div>
        </div>

        {/* 3. Action Buttons & User Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <HowToCookModal />
          </div>

          <SignedIn>
            {user && (
              <PricingModal subscriptionTier={user.subscriptionTier}>
                <Badge
                  variant="outline"
                  className={`flex h-8 px-4 gap-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer shadow-sm active:scale-95 ${
                    user.subscriptionTier === "pro"
                      ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white border-none"
                      : "bg-stone-200/50 text-stone-600 border-stone-200 hover:bg-stone-300/50"
                  }`}
                >
                  <Sparkles
                    className={`h-3 w-3 ${
                      user.subscriptionTier === "pro"
                        ? "text-white fill-white/20"
                        : "text-stone-500"
                    }`}
                  />
                  <span>
                    {user.subscriptionTier === "pro" ? "Pro Chef" : "Upgrade"}
                  </span>
                </Badge>
              </PricingModal>
            )}
            <UserDropdown />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-bold uppercase text-[11px] tracking-wider"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="primary" className="rounded-full px-6 font-black uppercase text-[11px] tracking-widest shadow-lg shadow-orange-100 transition-all hover:shadow-orange-200">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}