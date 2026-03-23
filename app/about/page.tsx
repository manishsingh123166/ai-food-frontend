import React from "react";
import { 
  Sparkles, 
  Leaf, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Users, 
  ChefHat, 
  ArrowRight 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// SEO Metadata (Next.js App Router style)
export const metadata = {
  title: "About RecipeoAI - Revolutionizing the Future of Home Cooking",
  description: "Discover how RecipeoAI uses world-class AI to eliminate food waste and create gourmet recipes from everyday ingredients.",
};

export default function AboutPage() {
  
  // SEO Schema definition
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "RecipeoAI",
      "description": "An AI-powered culinary platform dedicated to sustainable cooking and recipe innovation.",
      "url": "https://www.recipeoai.com/about"
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden flex flex-col">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4 border-b border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-orange-600 text-orange-600 uppercase tracking-[0.2em] px-4 py-1 font-bold">
            Our Global Mission
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
            Transforming <span className="text-orange-600 italic">Kitchens</span> <br />
            with Intelligence.
          </h1>
          <p className="text-xl md:text-2xl text-stone-500 font-light max-w-3xl mx-auto leading-relaxed">
            RecipeoAI is more than a tool; it's a culinary revolution designed to turn 
            everyday food waste into extraordinary dining experiences.
          </p>
        </div>
      </section>

      {/* --- THE VISION SECTION --- */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">The Vision.</h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                In a world where digital privacy and sustainability are paramount, handling your 
                kitchen data should be seamless and secure. We asked: 
                <span className="font-bold text-stone-900 block mt-2 underline decoration-orange-500 underline-offset-4">
                  "Why waste food when technology can make you a Chef?"
                </span>
              </p>
              <p>
                RecipeoAI utilizes cutting-edge AI vision and machine learning to analyze your 
                ingredients locally, providing instant, gourmet recommendations without the fluff.
              </p>
            </div>
          </div>
          
          <div className="bg-stone-900 rounded-[2.5rem] p-10 md:p-16 text-stone-50 shadow-2xl relative overflow-hidden group">
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px] group-hover:bg-orange-600/30 transition-all duration-700"></div>
             <div className="relative z-10">
                <ChefHat className="w-16 h-16 text-orange-500 mb-8" />
                <h3 className="text-4xl font-bold mb-6 tracking-tight">Zero Waste. <br />Infinite Taste.</h3>
                <p className="text-stone-400 text-lg leading-relaxed font-light">
                  Join 10,000+ chefs worldwide who are redefining home cooking. 
                  Every ingredient has a story; we just help you write the perfect ending.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES GRID --- */}
      <section className="py-24 px-4 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">Core Values</h2>
            <p className="text-stone-500 text-xl font-light">Building the smartest kitchen assistant on the planet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Leaf className="text-orange-600 w-8 h-8" />} 
              title="Eco-Centric" 
              desc="We help reduce global food waste by finding creative uses for every leftover."
            />
            <ValueCard 
              icon={<Zap className="w-8 h-8 text-white" />} 
              title="Neural Speed" 
              desc="Instant recipe generation powered by next-gen AI models for the modern life."
              dark
            />
            <ValueCard 
              icon={<ShieldCheck className="text-orange-600 w-8 h-8" />} 
              title="Fortress Privacy" 
              desc="Your data and photos are encrypted. We prioritize your privacy over everything."
            />
            <ValueCard 
              icon={<Globe className="w-8 h-8 text-white" />} 
              title="World Class" 
              desc="Multi-cultural recipe support, bringing international flavors to your home."
              dark
            />
            <ValueCard 
              icon={<Users className="text-orange-600 w-8 h-8" />} 
              title="Chef Community" 
              desc="Built with feedback from professional chefs and passionate home cooks alike."
            />
            <ValueCard 
              icon={<Sparkles className="w-8 h-8 text-white" />} 
              title="Pure Innovation" 
              desc="Always evolving. We push the boundaries of what AI can do in the kitchen."
              dark
            />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-4 text-center bg-stone-900 text-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Experience the <br /> Future of Food.
          </h2>
          <Link href="/dashboard">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-12 py-8 text-xl rounded-2xl shadow-2xl transition-transform active:scale-95">
              Get Started for Free <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Fixed Props types for ValueCard to avoid TS errors
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  dark?: boolean;
}

function ValueCard({ icon, title, desc, dark = false }: ValueCardProps) {
  return (
    <Card className={`border-2 transition-all duration-300 rounded-3xl overflow-hidden shadow-none hover:shadow-2xl hover:-translate-y-1 ${dark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-100'}`}>
      <CardContent className="p-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${dark ? 'bg-orange-600 shadow-lg shadow-orange-900/20' : 'bg-white shadow-md'}`}>
          {icon}
        </div>
        <h3 className={`text-2xl font-bold mb-4 ${dark ? 'text-white' : 'text-stone-900'}`}>{title}</h3>
        <p className={`text-lg font-light leading-relaxed ${dark ? 'text-stone-400' : 'text-stone-500'}`}>
          {desc}
        </p>
      </CardContent>
    </Card>
  );
}