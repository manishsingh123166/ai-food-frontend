import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  Globe, 
  ChefHat,
  MessageCircle
} from "lucide-react";

export const metadata = {
  title: "Help Center & FAQ - RecipeoAI",
  description: "Detailed answers about AI recipe generation, privacy, and Pro features. Updated March 2026.",
};

export default function FAQPage() {
  const categories = [
    {
      id: "general",
      name: "Platform Basics",
      icon: <Globe className="w-5 h-5" />,
      items: [
        {
          q: "What makes RecipeoAI different from traditional recipe sites?",
          a: "Unlike static recipe blogs, RecipeoAI uses real-time Computer Vision. It doesn't just give you a list; it analyzes the chemical compatibility of your ingredients to suggest gourmet meals that minimize waste."
        },
        {
          q: "Does the AI support international cuisines?",
          a: "Yes. Our models are trained on over 500,000 global recipes, covering everything from Indian street food to French fine dining and Japanese home cooking."
        }
      ]
    },
    {
      id: "tech",
      name: "AI & Privacy",
      icon: <Zap className="w-5 h-5" />,
      items: [
        {
          q: "Is my kitchen data private?",
          a: "Your privacy is our fortress. We use localized AI processing, meaning your ingredient photos are analyzed and then instantly encrypted. We never sell your data to third-party food brands."
        },
        {
          q: "How accurate is the ingredient recognition?",
          a: "As of our March 2026 update, our vision model has a 98.4% accuracy rate. It can distinguish between similar-looking spices and even judge the ripeness of fruits."
        }
      ]
    },
    {
      id: "billing",
      name: "Subscription & Pro",
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        {
          q: "What features are included in the Head Chef (Pro) plan?",
          a: "Pro members get unlimited pantry scans, advanced nutritional analysis (macros/micros), smart ingredient substitution suggestions, and an offline 'Digital Cookbook' export feature."
        },
        {
          q: "Can I cancel my subscription anytime?",
          a: "Absolutely. No hidden contracts. You can downgrade to the 'Sous Chef' free plan with one click from your dashboard settings."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-orange-600 text-orange-600 uppercase tracking-[0.2em] px-4 py-1 font-bold">
            RecipeoAI Help Center
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            How can we <span className="text-orange-600">help</span> you today?
          </h1>
          <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
            Everything you need to know about the future of AI cooking. 
            <span className="block mt-2 font-bold text-stone-400 text-sm">Last System Update: March 22, 2026</span>
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
            {/* Sidebar Categories (Sticky on Desktop) */}
            <div className="hidden lg:block space-y-4 sticky top-32 h-fit">
              <h3 className="text-xs font-bold uppercase text-stone-400 tracking-widest mb-6">Categories</h3>
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all cursor-pointer group">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-orange-100 transition-all">
                    {cat.icon}
                  </div>
                  <span className="font-bold text-sm">{cat.name}</span>
                </div>
              ))}
            </div>

            {/* Accordion Content */}
            <div className="lg:col-span-3 space-y-12">
              {categories.map((cat) => (
                <div key={cat.id} id={cat.id} className="space-y-6">
                  <div className="flex items-center gap-2 pb-4 border-b border-stone-200">
                    <span className="text-orange-600">{cat.icon}</span>
                    <h2 className="text-2xl font-bold tracking-tight">{cat.name}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {cat.items.map((item, idx) => (
                      <AccordionItem 
                        key={idx} 
                        value={`${cat.id}-${idx}`}
                        className="bg-white border border-stone-200 rounded-2xl px-6 transition-all data-[state=open]:shadow-lg data-[state=open]:border-orange-200"
                      >
                        <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-orange-600 decoration-orange-600">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-stone-500 text-lg leading-relaxed pb-6 font-light">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 px-4 border-t border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-[3rem] p-12 text-center text-stone-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full"></div>
          <HelpCircle className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Still have questions?</h2>
          <p className="text-stone-400 text-lg mb-8 font-light">Our culinary and tech experts are ready to help you 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="mailto:support@recipeoai.com" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-2xl transition-all active:scale-95 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Chat with Support
            </a>
            <span className="text-stone-600 hidden md:block">or</span>
            <button className="text-stone-300 hover:text-white underline underline-offset-4 decoration-orange-600 font-bold">
              Visit Community Forum
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Copyright for International Feel */}
      <div className="py-8 text-center text-stone-400 text-xs tracking-widest uppercase">
        
      </div>
    </div>
  );
}