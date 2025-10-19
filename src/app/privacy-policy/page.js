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

  const sections = [
    { id: "information-collection", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "data-retention", title: "Data Retention" },
    { id: "international-transfers", title: "International Transfers" },
    { id: "children-privacy", title: "Children's Privacy" },
    { id: "policy-changes", title: "Policy Changes" },
    { id: "contact-us", title: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header/>
      {/* Hero */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Our policies are designed to protect your rights and ensure a trustworthy, respectful experience.
          </p>
          <p className="mt-4 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            NowStart Solution (a wholly owned subsidiary of NowStart Solution) is committed to ensuring your privacy at all times. This Privacy Policy explains how we collect, use, and share information when you use our websites, products, or services.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
           <article className="prose prose-slate max-w-none text-black lg:prose-lg xl:prose-xl p-8">
          {/* Main Section */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Privacy Policy Overview</h2>
          <p className="mb-4 leading-relaxed">
            This Privacy Policy governs the collection of information by NowStart Solution across most of its websites and services, including offline product support. It does not apply to NowStart Solution services that display their own distinct privacy statements. Please read carefully to understand how we gather, safeguard, and use your information.
          </p>
          <p className="mb-4 leading-relaxed">
            Contact us if you have any questions or concerns regarding our policy.
          </p>

          {/* Section: Data Collection */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">What Data We Gather and How We Gather It</h3>
          <p className="mb-4 leading-relaxed">
            When you visit our websites, use our products, or contact us via email or other means, we may collect certain information to facilitate interaction and provide support.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Use of Cookies</h4>
          <p className="mb-4 leading-relaxed">
            Our site uses cookies, small text files stored on your device, to enhance website functionality and user experience. Google Analytics may analyze cookie data to identify your location and present content in your preferred language. By using our site, you consent to our use of cookies, but you can disable cookies through your browser settings.
          </p>
          <p className="mb-4 leading-relaxed">
            Cookies may also store registration and shopping basket data, preferred language, and currency settings, helping personalize your online experience.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Use of Third-Party Ad Networks and Social Networks</h4>
          <p className="mb-4 leading-relaxed">
            Some ads may be served by third-party networks that place cookies to deliver targeted ads. NowStart Solution does not control these cookies. Sharing content on social media may also involve cookies controlled by the respective platforms.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Placing Orders</h4>
          <p className="mb-4 leading-relaxed">
            Paid products are processed by third-party service providers. Billing and payment details (including credit card information) are collected by the provider. Information may be shared with NowStart Solution for order verification, subscription updates, and promotions.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">News Subscriptions</h4>
          <p className="mb-4 leading-relaxed">
            Subscribers provide email addresses to receive news, updates, and offers. You can manage your subscription or unsubscribe anytime using provided links.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">NowStart Solution Forum</h4>
          <p className="mb-4 leading-relaxed">
            Registration may require username, password, email, location, language, and device information.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Customer Testimonials</h4>
          <p className="mb-4 leading-relaxed">
            With permission, we publish customer testimonials including names, endorsements, and images. Requests to edit or remove testimonials are promptly addressed.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Contact Us and Technical Support Service</h4>
          <p className="mb-4 leading-relaxed">
            When you contact us for support, we may collect necessary information such as name, email, device details, and technical logs to resolve issues. This information is only used to provide support and is not shared externally without consent.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Non-Personal Information</h4>
          <p className="mb-4 leading-relaxed">
            Non-personal information may include operating system, device ID, IP address, browser type, language, and usage patterns. This helps us understand usage trends and improve our products and services.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Purpose of Collecting Device Hardware and Software Information</h4>
          <p className="mb-4 leading-relaxed">
            NowStart Solution collects hardware/software inventory to provide driver downloads and device recommendations. This data helps match optimal updates for systems and refine our intelligence for better recommendations.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">How We Use the Information We Collect</h4>
          <p className="mb-4 leading-relaxed">
            We use collected data to operate and improve our services, enhance customer support, personalize content and ads, conduct research, and communicate important messages, including newsletters, billing reminders, surveys, or service updates.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">How We Protect the Information We Collect</h4>
          <p className="mb-4 leading-relaxed">
            NowStart Solution implements various security protocols including restricted access, encrypted transmissions (SSL), and responsible password management. Users are encouraged to maintain their account security and log out when sharing devices.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Controlling Spam</h4>
          <p className="mb-4 leading-relaxed">
            We prohibit the use of our services for unsolicited email (spam) and do not share subscriber lists. Tools like Inbox Protector help minimize spam.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Children’s Policy</h4>
          <p className="mb-4 leading-relaxed">
            Services are intended for individuals 16+. We do not knowingly collect data from children under 16. If discovered, it is promptly deleted unless legally required.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">How We Share Your Information</h4>
          <p className="mb-4 leading-relaxed">
            Personal data is not shared externally except with third-party service providers fulfilling specific tasks, or with government/law enforcement when legally required or for safety purposes.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Updating or Removing Your Personal Data</h4>
          <p className="mb-4 leading-relaxed">
            You may request updates, corrections, or deletion of personal data, forum accounts, subscriptions, or support tickets. We will respond promptly, but some data may remain in backups to comply with legal obligations.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Changes to This Privacy Policy</h4>
          <p className="mb-4 leading-relaxed">
            We may update this Privacy Policy as our services evolve. Check regularly for updates. The "Last Updated" date reflects the latest revision.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Contact Information</h4>
          <p className="mb-4 leading-relaxed">
            For inquiries or concerns about this Privacy Policy or how NowStart Solution handles personal information, please contact us through our website. We will investigate and respond promptly to any reported issues.
          </p>
        </article>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
