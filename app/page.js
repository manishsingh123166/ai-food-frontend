import React from "react";
import { ArrowRight, Star, Flame, Clock, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { auth } from "@clerk/nextjs/server";
import { SITE_STATS, FEATURES, HOW_IT_WORKS_STEPS } from "@/lib/data";
import PricingSection from "@/components/PricingSection";
import Link from "next/link";

// ================= HARDCODED ENV KEYS (As requested) =================
const ENV_KEYS = {
  GEMINI_API_KEY: "AIzaSyBJiaomduWlCxM2kA4km6hYb7p6mvBbV-Y",
  STRAPI_API_TOKEN: "debce1bfc72daf8f9f717db912ca4f218d66e3f513052dc19d8be81198a1f4a297750a45ff89847fd11517901d50b35158e130af79a35ed0ef11635b5153313f9a04d01431f683ae68a8f052be7203a53008ed914efdf7d0e6f0b1ac080b3353d797137dcca99842b64292b8abcabf2bd95d723375d99aaa9cd43a79785ee9fa",
  NEXT_PUBLIC_STRAPI_URL: "http://localhost:1337",
  UNSPLASH_ACCESS_KEY: "xdTQoPK0a4xQwhSCDmnACB1s42ItJBuSgSNQTfhP1nc",
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_cG9wdWxhci1tdXN0YW5nLTcuY2xlcmsuYWNjb3VudHMuZGV2JA",
  CLERK_SECRET_KEY: "sk_test_CgeyVUefGoBLV5BJlXmSIYkg1dq9dzpaQYlikHUg22",
  ARCJET_KEY: "ajkey_01kkr7v8rmfjv9sa6q0z7gggfg"
};
// =====================================================================

export default async function LandingPage() {
  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero Section - FULL PAGE BANNER */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center overflow-hidden">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpeg"
            alt="Delicious Food Banner"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/70 md:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl text-center md:text-left">
            <Badge
              variant="outline"
              className="border-2 border-orange-500 text-orange-400 bg-black/30 text-sm font-bold mb-6 uppercase tracking-wide backdrop-blur-sm inline-flex items-center"
            >
              <Flame className="mr-1 w-4 h-4" />
              #1 AI Cooking Assistant
            </Badge>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
              Turn your{" "}
              <span className="italic underline decoration-4 decoration-orange-500">
                leftovers
              </span>{" "}
              into <br className="hidden md:block" />
              masterpieces.
            </h1>

            <p className="text-lg md:text-2xl text-stone-200 mb-10 max-w-xl mx-auto md:mx-0 font-light">
              Snap a photo of your fridge. We&apos;ll tell you what to cook.
              Save money, reduce waste, and eat better tonight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/dashboard">
                <Button
                  size="xl"
                  className="px-8 py-7 text-lg bg-orange-600 hover:bg-orange-700 text-white border-none transition-transform hover:scale-105"
                >
                  Start Cooking Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-stone-300">
              <span className="font-bold text-white text-base">10k+ cooks</span>{" "}
              joined last month
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y-2 border-stone-900 bg-stone-900">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          {SITE_STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-1 text-white">
                {stat.val}
              </div>
              <Badge
                variant="secondary"
                className="bg-transparent text-orange-500 text-sm uppercase tracking-wider font-medium border-none"
              >
                {stat.label}
              </Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Your Smart Kitchen
            </h2>
            <p className="text-stone-600 text-xl font-light">
              Everything you need to master your meal prep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-stone-200 bg-white hover:border-orange-600 hover:shadow-lg transition-all group py-0 overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="border-2 border-stone-200 bg-orange-50 p-3 group-hover:border-orange-600 group-hover:bg-orange-100 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-mono bg-stone-100 text-stone-600 uppercase tracking-wide border border-stone-200"
                      >
                        {feature.limit}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-stone-600 text-lg font-light">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            Cook in 3 Steps
          </h2>

          <div className="space-y-12">
            {HOW_IT_WORKS_STEPS.map((item, i) => (
              <div key={i}>
                <div className="flex gap-6 items-start">
                  <Badge
                    variant="outline"
                    className="text-6xl font-bold text-orange-500 border-none bg-transparent p-0 h-auto"
                  >
                    {item.step}
                  </Badge>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg text-stone-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <hr className="my-8 bg-stone-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4">
        <PricingSection subscriptionTier={subscriptionTier} />
      </section>
    </div>
  );
}
