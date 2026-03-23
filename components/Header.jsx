import React from "react";
import { Button } from "./ui/button";
import { 
  Cookie, 
  Refrigerator, 
  Sparkles, 
  BookOpenText,
  HelpCircle,
  Menu,
  ChefHat,
  LogIn
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import HowToCookModal from "./HowToCookModal";
import PricingModal from "./PricingModal";
import { checkUser } from "@/lib/checkUser";
import { Badge } from "./ui/badge";
import UserDropdown from "./UserDropdown";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";

export default async function Header() {
  const user = await checkUser();
  const siteUrl = "https://www.recipeoai.com";

  const navLinks = [
    { href: "/recipes", label: "Recipes", icon: <Cookie className="w-5 h-5 text-orange-500" /> },
    { href: "/pantry", label: "Pantry", icon: <Refrigerator className="w-5 h-5 text-orange-500" /> },
    { href: "/blog", label: "Blog", icon: <BookOpenText className="w-5 h-5 text-orange-500" /> },
    { href: "/faq", label: "FAQ", icon: <HelpCircle className="w-5 h-5 text-orange-500" /> },
  ];

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-white/80 backdrop-blur-xl z-50 transition-all duration-300" role="banner">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* --- 1. LOGO SECTION --- */}
        <div className="flex items-center">
          <Link href={user ? "/dashboard" : "/"} className="flex items-center gap-3 group">
            <Image 
              src="/logo.jpg" 
              alt="RecipeoAI" 
              width={45} 
              height={45} 
              className="rounded-xl shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">
              <span className="text-stone-900">Recipeo</span>
              <span className="text-orange-600 italic">AI</span>
            </span>
          </Link>
        </div>

        {/* --- 2. DESKTOP CENTER NAV (Hidden on Mobile) --- */}
        <ul className="hidden lg:flex flex-[3] justify-center items-center space-x-10 text-[13px] font-black text-stone-900 uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-orange-600 transition-colors flex gap-2 items-center py-2">
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* --- 3. ACTION BUTTONS & MOBILE MENU --- */}
        <div className="flex items-center justify-end space-x-3">
          
          {/* Desktop Only Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <HowToCookModal />
            <SignedIn>
                <UserDropdown />
            </SignedIn>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
              <SignedOut>
                <SignInButton mode="modal">
                    <Button variant="ghost" className="text-stone-700 font-black text-[11px] uppercase tracking-widest">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 h-10 font-black text-[11px] uppercase shadow-lg shadow-orange-100">Get Started</Button>
                </SignUpButton>
              </SignedOut>
          </div>

          {/* --- MOBILE HAMBURGER (Drawer Content) --- */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-stone-900">
                  <Menu className="w-8 h-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[350px] bg-white p-0 border-none">
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                
                <div className="flex flex-col h-full">
                   {/* Drawer Header */}
                   <div className="p-6 border-b flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image src="/logo.jpg" alt="Logo" width={35} height={35} className="rounded-lg" />
                        <span className="text-lg font-black uppercase">Recipeo<span className="text-orange-600">AI</span></span>
                      </div>
                   </div>
                   
                   {/* Drawer Links */}
                   <div className="flex-1 overflow-y-auto p-6 space-y-2">
                      <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Navigation</p>
                      {navLinks.map((link) => (
                        <Link 
                          key={link.href}
                          href={link.href} 
                          className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-orange-600 hover:text-white transition-all font-black text-[12px] uppercase tracking-widest text-stone-900"
                        >
                          {link.icon}
                          {link.label}
                        </Link>
                      ))}

                      <div className="pt-6">
                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Quick Actions</p>
                        <div className="bg-orange-50 p-4 rounded-2xl flex flex-col gap-4 border border-orange-100">
                             <HowToCookModal />
                        </div>
                      </div>
                   </div>

                   {/* Drawer Bottom (Auth & Profile) */}
                   <div className="p-6 bg-stone-50 border-t">
                      <SignedIn>
                         <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-stone-200">
                            <div className="flex items-center gap-3">
                                <UserDropdown />
                                <span className="font-bold text-sm">My Account</span>
                            </div>
                            {user && (
                                <PricingModal subscriptionTier={user.subscriptionTier}>
                                    <Badge className="bg-orange-600 text-white text-[10px] uppercase font-black px-3 py-1.5 rounded-full cursor-pointer">
                                        {user.subscriptionTier === "pro" ? "PRO" : "UPGRADE"}
                                    </Badge>
                                </PricingModal>
                            )}
                         </div>
                      </SignedIn>

                      <SignedOut>
                         <div className="flex flex-col gap-3">
                            <SignInButton mode="modal">
                                <Button variant="outline" className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-xs border-stone-200">
                                    <LogIn className="w-4 h-4 mr-2" /> Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <Button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-orange-100">
                                    Get Started Free
                                </Button>
                            </SignUpButton>
                         </div>
                      </SignedOut>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </nav>
    </header>
  );
}