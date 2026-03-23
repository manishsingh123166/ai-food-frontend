import React from "react";
import { ShieldCheck, Lock, Eye, Cookie, Globe, UserCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | RecipeoAI - Global Privacy Standards",
  description: "Learn how RecipeoAI protects your culinary data. GDPR, CCPA, and Google AdSense compliant privacy terms.",
};

export default function PrivacyPage() {
  const lastUpdated = "March 22, 2026";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 px-4 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-bold mb-6 border border-orange-100">
            <ShieldCheck className="w-4 h-4" /> Global Privacy Standard 2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Privacy <span className="text-orange-600">Policy</span>
          </h1>
          <p className="text-stone-500 text-lg font-light">
            Effective Date: <span className="font-bold text-stone-900">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* 1. Introduction */}
          <section className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6 text-orange-600">
              <Globe className="w-8 h-8" />
              <h2 className="text-3xl font-bold tracking-tight text-stone-900">1. Introduction</h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              Welcome to RecipeoAI ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
              This policy explains how we collect, use, and safeguard your data when you use our AI-powered recipe generation platform. 
              By using our services, you consent to the practices described in this policy.
            </p>
          </section>

          {/* 2. Data Collection (AI Vision) */}
          <section className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6 text-orange-600">
              <Eye className="w-8 h-8" />
              <h2 className="text-3xl font-bold tracking-tight text-stone-900">2. Information We Collect</h2>
            </div>
            <div className="space-y-4 text-stone-600 text-lg font-light">
              <p className="font-bold text-stone-900 uppercase text-xs tracking-widest mb-2">A. Images & AI Processing</p>
              <p>We collect images of food and ingredients you upload. Our AI Vision analyzes these to identify food items. <strong>Crucial:</strong> We do not intentionally collect or store images containing human faces or sensitive personal environments.</p>
              
              <p className="font-bold text-stone-900 uppercase text-xs tracking-widest mt-6 mb-2">B. Log & Device Data</p>
              <p>We automatically collect certain information when you visit, such as IP address, browser type, and operating system, for security and platform optimization.</p>
            </div>
          </section>

          {/* 3. Google AdSense & Cookies (Very Important for Approval) */}
          <section className="bg-orange-600 p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Cookie className="w-8 h-8" />
                <h2 className="text-3xl font-bold tracking-tight">3. Cookies & Advertising</h2>
              </div>
              <div className="space-y-4 text-orange-100 text-lg font-light">
                <p>We use cookies and similar tracking technologies to access or store information. These help us understand how you use our site and improve your experience.</p>
                <p className="p-4 bg-white/10 rounded-2xl border border-white/20">
                  <strong>Google AdSense Disclosure:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
                </p>
                <p>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="underline font-bold text-white hover:text-stone-900 transition-colors">Google Ad Settings</a>.</p>
              </div>
            </div>
          </section>

          {/* 4. GDPR & CCPA Rights */}
          <section className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6 text-orange-600">
              <UserCheck className="w-8 h-8" />
              <h2 className="text-3xl font-bold tracking-tight text-stone-900">4. Your Global Privacy Rights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 text-lg font-light">
              <div className="space-y-3">
                <p className="font-bold text-stone-900">GDPR (European Union)</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>Right to Access Data</li>
                  <li>Right to Rectification</li>
                  <li>Right to Erasure (Forget Me)</li>
                  <li>Right to Data Portability</li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-bold text-stone-900">CCPA (California Residents)</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>Right to know what data is sold</li>
                  <li>Right to opt-out of sale</li>
                  <li>Right to non-discrimination</li>
                  <li>Right to delete personal info</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Data Security */}
          <section className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6 text-orange-600">
              <Lock className="w-8 h-8" />
              <h2 className="text-3xl font-bold tracking-tight text-stone-900">5. Data Protection</h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed font-light mb-6">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. 
              However, despite our safeguards, no electronic transmission over the Internet can be guaranteed to be 100% secure.
            </p>
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 flex items-center gap-4">
              <ShieldCheck className="w-6 h-6 text-green-600" />
              <span className="text-sm font-bold text-stone-500 uppercase tracking-widest">End-to-End Encrypted Storage Active</span>
            </div>
          </section>

          {/* 6. Contact Info */}
          <section className="py-12 border-t border-stone-200 text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Privacy Officer</h2>
            <p className="text-stone-500 font-light mb-8">If you have questions about this policy, please email us at:</p>
            <a 
              href="mailto:privacy@recipeoai.com" 
              className="inline-block bg-stone-900 text-stone-50 px-10 py-5 rounded-2xl font-bold hover:bg-orange-600 transition-all active:scale-95"
            >
              privacy@recipeoai.com
            </a>
          </section>

        </div>
      </section>

      {/* Footer Branding */}
      <div className="text-center py-10 opacity-30 text-xs uppercase tracking-[0.5em] font-black">
        RecipeoAI Privacy Enforcement Division • 2026
      </div>
    </div>
  );
}