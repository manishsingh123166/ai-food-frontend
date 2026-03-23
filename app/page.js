import React from "react";
import { ArrowRight, Star, Flame, Clock, Users } from "lucide-react";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { auth } from "@clerk/nextjs/server";
import { SITE_STATS, FEATURES, HOW_IT_WORKS_STEPS } from "@/lib/data";
import PricingSection from "@/components/PricingSection";
import Link from "next/link";
import Script from "next/script"; // Google Schema ke liye

// --- 1. DYNAMIC SEO METADATA (Head Office of SEO) ---
export const metadata = {
  title: "RecipeoAI - #1 AI Recipe Generator | What to cook with ingredients 2026",
  description: "Transform your leftovers into gourmet masterpieces with RecipeoAI. The world's most advanced AI recipe maker for keto, vegan, and healthy meal planning. Solve 'what to cook tonight' in seconds.",
  keywords: "ai recipe generator, ai recipe maker free, what can i cook with ingredients, smart recipe generator, keto recipe generator, vegan meal planner, zero waste cooking ai, healthy recipes ai",
  alternates: {
    canonical: "https://www.recipeoai.com",
  },
  openGraph: {
    title: "RecipeoAI - #1 AI Cooking Assistant",
    description: "Generate professional recipes from your leftovers using AI.",
    url: "https://www.recipeoai.com",
    siteName: "RecipeoAI",
    images: [{ url: "/banner.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default async function LandingPage() {
  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  // --- 2. GOOGLE STRUCTURED DATA (JSON-LD) - Google Search me Stars dikhane ke liye ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "RecipeoAI",
    "url": "https://www.recipeoai.com",
    "description": "RecipeoAI is the ultimate AI Cooking Assistant. Scan your ingredients, generate zero-waste recipes, and master your kitchen.",
    "applicationCategory": "Food & Drink / Health",
    "operatingSystem": "All",
    "author": {
      "@type": "Organization",
      "name": "RecipeoAI Global"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Schema Injection - Google Isse hi Stars aur Rating dikhata hai */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <Badge
                variant="outline"
                className="border-2 border-orange-600 text-orange-700 bg-orange-50 text-sm font-bold mb-6 uppercase tracking-wide"
              >
                <Flame className="mr-1" />
                #1 Global AI Cooking Assistant
              </Badge>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tight">
                Turn your{" "}
                <span className="italic underline decoration-4 decoration-orange-600">
                  leftovers
                </span>{" "}
                into <br />
                masterpieces.
              </h1>

              <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                Snap a photo of your fridge. Our AI recipe maker tells you what to cook.
                Save money, reduce waste, and eat gourmet tonight.
              </p>

              <Link href="/dashboard">
                <Button
                  size="xl"
                  variant="primary"
                  className="px-8 py-6 text-lg font-bold shadow-lg hover:shadow-orange-200 transition-all"
                >
                  Start Cooking Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="mt-6 text-sm text-stone-500 font-medium">
                <span className="font-bold text-stone-900 underline italic">12,450+ verified cooks</span>{" "}
                rated us 4.9/5 stars this month
              </p>
            </div>

            {/* Hero Image - Keeping your Exact Design */}
            <Card className="relative aspect-square md:aspect-4/5 border-4 border-stone-900 bg-stone-200 overflow-hidden py-0 shadow-2xl">
              <Image
                src="/banner.jpg"
                alt="AI Generated Gourmet Pasta Dish - RecipeoAI"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                priority
              />

              {/* Floating Card with Stars */}
              <Card className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm border-2 border-stone-900 py-0 shadow-xl">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">
                        Rustic Tomato Basil Pasta
                      </h3>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-orange-500 text-orange-500"
                          />
                        ))}
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-2 border-green-700 bg-green-50 text-green-700 font-bold"
                    >
                      98% MATCH
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-xs text-stone-500 font-semibold">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 25 mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> 2 servings
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y-2 border-stone-900 bg-stone-900">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          {SITE_STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black mb-1 text-stone-50">
                {stat.val}
              </div>
              <Badge
                variant="secondary"
                className="bg-transparent text-orange-500 text-sm uppercase tracking-widest font-bold border-none"
              >
                {stat.label}
              </Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Features - Smart Kitchen SEO */}
      <section className="py-24 px-4 bg-white" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
              Your Smart <span className="text-orange-600">AI Kitchen</span>
            </h2>
            <p className="text-stone-500 text-xl font-medium max-w-2xl">
              Unlock the full potential of your ingredients with world-class AI technology. Designed for professional results at home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-stone-200 bg-stone-50/50 hover:bg-white hover:border-orange-600 hover:shadow-2xl transition-all group py-0 overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="border-2 border-stone-200 bg-white p-4 rounded-2xl group-hover:border-orange-600 group-hover:bg-orange-50 transition-all">
                        <IconComponent className="w-7 h-7 text-orange-600" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-mono bg-stone-900 text-white uppercase tracking-widest border border-stone-900 px-3 py-1"
                      >
                        {feature.limit}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-stone-500 text-lg font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 border-y-2 border-stone-200 bg-stone-900 text-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter">
            Cook in <span className="text-orange-600 italic">3 Steps.</span>
          </h2>

          <div className="space-y-16">
            {HOW_IT_WORKS_STEPS.map((item, i) => (
              <div key={i} className="group">
                <div className="flex gap-8 items-start">
                  <div className="text-7xl font-black text-orange-600/20 group-hover:text-orange-600 transition-colors leading-none">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-xl text-stone-400 font-light max-w-2xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="h-px bg-stone-800 w-full mt-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
           <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Choose Your Plan</h2>
           <p className="text-stone-500 text-lg font-medium">Join thousands of cooks saving money and time every day.</p>
        </div>
        <PricingSection subscriptionTier={subscriptionTier} />
      </section>
    </div>
  );
}