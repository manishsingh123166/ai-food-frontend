import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Send, 
  MessageCircle,
  Clock,
  ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// SEO Metadata for Google indexing
export const metadata = {
  title: "Contact Manish Singh - Owner & Developer of RecipeoAI",
  description: "Get in touch with Manish Singh, the developer of RecipeoAI. Office address: Shrawasti, UP, India. Reach out for technical support or partnerships.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 px-4 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
            Have questions regarding our AI tools, privacy policy, or need technical support? 
            We are here to help. Reach out to us directly or fill out the form below.
          </p>
        </div>
      </section>

      {/* --- INFO CARDS SECTION (PDFTara Style) --- */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Owner */}
          <InfoCard 
            icon={<User className="w-6 h-6 text-blue-600" />}
            title="Owner & Developer"
            primaryText="Manish Singh"
            secondaryText="PDFTara Administrator / RecipeoAI Lead"
            bgColor="bg-blue-50"
          />

          {/* Card 2: Address */}
          <InfoCard 
            icon={<MapPin className="w-6 h-6 text-green-600" />}
            title="Office Address"
            primaryText="Raja habeli, Chotikothi Peeche, Mo. Kotriyast"
            secondaryText="Bhinga, Shrawasti, Pin 271831, UP, India"
            bgColor="bg-green-50"
          />

          {/* Card 3: Contact */}
          <InfoCard 
            icon={<Phone className="w-6 h-6 text-purple-600" />}
            title="Contact Number"
            primaryText="+91 9451091583"
            secondaryText="Available: Mon-Fri (10 AM - 6 PM)"
            bgColor="bg-purple-50"
          />

        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black tracking-tight mb-4 text-stone-900">Send us a Message</h2>
            <p className="text-stone-500 font-light">Prefer email? Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <Card className="bg-white border-none shadow-2xl shadow-stone-200/50 rounded-[2.5rem] overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-stone-900 ml-1">Your Name</label>
                    <Input placeholder="John Doe" className="h-14 rounded-2xl border-stone-200 focus:border-orange-600 focus:ring-orange-600 bg-stone-50/50" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-stone-900 ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-14 rounded-2xl border-stone-200 focus:border-orange-600 focus:ring-orange-600 bg-stone-50/50" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-stone-900 ml-1">Subject</label>
                  <Input placeholder="How can we help?" className="h-14 rounded-2xl border-stone-200 focus:border-orange-600 focus:ring-orange-600 bg-stone-50/50" />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-stone-900 ml-1">Message</label>
                  <Textarea 
                    placeholder="How can we help you today?" 
                    className="min-h-[180px] rounded-3xl border-stone-200 focus:border-orange-600 focus:ring-orange-600 p-6 bg-stone-50/50 text-lg" 
                  />
                </div>

                <Button className="w-full h-16 bg-orange-600 hover:bg-orange-700 text-white text-xl font-black rounded-2xl shadow-xl shadow-orange-200 transition-all active:scale-95 flex gap-3">
                  Send Message <Send className="w-6 h-6" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- QUICK ANSWERS FOOTER --- */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <MessageCircle className="w-12 h-12 text-stone-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Looking for quick answers?</h2>
          <p className="text-stone-500 font-light mb-8">Check out our Frequently Asked Questions section for immediate help with common issues.</p>
          <Link href="/faq">
            <Button variant="outline" size="lg" className="rounded-2xl px-10 py-7 text-lg font-bold hover:bg-orange-600 hover:text-white transition-all border-stone-200">
              Visit FAQ Center
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

// HELPER COMPONENT: Info Cards
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  primaryText: string;
  secondaryText: string;
  bgColor: string;
}

function InfoCard({ icon, title, primaryText, secondaryText, bgColor }: InfoCardProps) {
  return (
    <Card className="border-none shadow-sm bg-white rounded-[2rem] p-8 text-center hover:shadow-xl transition-all duration-300">
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-stone-400 uppercase tracking-widest mb-4">{title}</h3>
      <p className="text-2xl font-black text-stone-900 mb-2">{primaryText}</p>
      <p className="text-stone-500 font-light leading-relaxed">{secondaryText}</p>
    </Card>
  );
}