"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modern Navigation */}
      <Header/>

      {/* Hero */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Software Principles
          </h1>
          <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Our software policies are designed to protect users’ rights and ensure a safe, reliable, and respectful experience.
          </p>
          <p className="mt-2 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Effective Date: 20/03/2022
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
           <article className="prose prose-slate text-black max-w-none lg:prose-lg xl:prose-xl p-8">

          <p className="mb-4 leading-relaxed">
            Developing reliable software starts with prioritizing the end-user experience. For over seven years, NowStart Solution has been focused on delivering complete PC driver solutions. Our mission is to place the user at the center of every interaction, ensuring smooth installation, safe usage, and ongoing support. From helping first-time users download drivers to providing a transparent refund policy and top-notch customer assistance, we aim to keep PCs running efficiently and safely.
          </p>

          <p className="mb-4 leading-relaxed">
            NowStart Solution offers fast, secure, and straightforward access to the latest Windows drivers. Users who register fully with NowStart Solution gain complete access to our software, automatic updates, and proactive driver monitoring for plug-and-play devices.
          </p>

          <p className="mb-6 leading-relaxed">
            Here is a breakdown of our core software principles. For any questions, contact our support team at <a href="mailto:support@nowstart.co" className="text-sky-700 underline">support@nowstart.co</a>.
          </p>

          {/* Section 1: Easy Uninstallation */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-4">Effortless Uninstallation</h2>
          <p className="mb-4 leading-relaxed">
            NowStart Solution ensures that uninstalling the software is straightforward and stress-free. Users can remove it safely without affecting other system functions. Options are available through the Windows Start Menu or Control Panel, and the process is completely free. Step-by-step uninstallation instructions are provided online to guide users.
          </p>

          {/* Section 2: Transparent Software Behavior */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-4">Transparent Software Operations</h2>
          <p className="mb-4 leading-relaxed">
            Our software is designed to clearly communicate its functions. NowStart Solution scans for outdated or missing drivers and provides actionable steps to resolve issues efficiently.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>NowStart Solution never installs third-party applications without consent.</li>
            <li>System settings remain unchanged unless explicitly approved by the user.</li>
            <li>Driver scans focus only on actual, relevant issues to prevent unnecessary confusion.</li>
            <li>The software’s operations are strictly limited to driver maintenance and system optimization.</li>
            <li>Full-license customers receive a complimentary walkthrough for their first driver installation guided by our support team, accessible via a dedicated phone line during checkout.</li>
          </ul>

          {/* Section 3: Data Privacy */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-4">Data Collection and Privacy</h2>
          <p className="mb-4 leading-relaxed">
            NowStart Solution does not collect any personally identifiable information from your computer. Only hardware and software details are gathered to determine required driver updates accurately.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Why we gather device data:</strong> By collecting hardware and software inventory information, NowStart Solution ensures our driver recommendations are precise. This data allows our system to continuously refine and standardize updates for all supported devices.
          </p>

          {/* Section 4: Partnerships and Transparency */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-4">Transparent Partnerships</h2>
          <p className="mb-4 leading-relaxed">
            NowStart Solution is committed to transparency not only with our users but also with our partners. We build long-lasting relationships with organizations that prioritize user experience and uphold high-quality standards.
          </p>
          <p className="mb-4 leading-relaxed">
            Our app has received certifications from reputable entities, such as AppEsteem, confirming compliance with stringent consumer protection standards in the software monetization industry.
          </p>
        </article>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
