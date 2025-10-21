'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function RefundPolicy() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Modern Navigation */}
            <Header/>

            {/* Hero Section */}
            <div className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                            Refund Policy
                        </h1>
                        <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Our policies are designed to protect your rights and ensure a trustworthy, respectful experience.
          </p>
          <p className="mt-4 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Customers may apply for refunds at the RETURNS & EXCHANGES center of EasyPrints (a wholly owned subsidiary of EasyPrints) for any legitimate order-related issues.
          </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">

                    <article className="prose prose-slate text-black max-w-none lg:prose-lg xl:prose-xl p-8">
          {/* Introduction */}
          <p className="mb-4 leading-relaxed">
            Every customer is valuable to EasyPrints, and the company strives to ensure that users enjoy its products and services. The functionality of trial versions is limited to help buyers make informed decisions and avoid purchasing incorrect products.
          </p>
          <p className="mb-4 leading-relaxed">
            EasyPrints offers a "try-before-you-buy" feature with a 14-day money-back guarantee on most products. Refunds are granted only under specified conditions and are unavailable after the guarantee period.
          </p>

          {/* Section: Circumstances of No Refund */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-6">Circumstances of No Refund</h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Non-Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Failure to read the product description before purchase. Refunds are not provided if dissatisfaction arises from misunderstanding the product's features or functions. Exchanges may be allowed if the price difference does not exceed USD $20.</li>
            <li>Refund requests related to credit card fraud or unauthorized payments must be addressed via the card issuer. EasyPrints cannot cancel processed orders but may provide exchanges for alternative products. Subscription cancellations follow our Terms of Use.</li>
            <li>Delayed registration code delivery within two hours post-purchase. Customers may contact the EasyPrints Support Center for assistance.</li>
            <li>Purchasing the wrong product immediately followed by acquiring the correct one elsewhere.</li>
            <li>Price differences for products between regions or companies.</li>
            <li>Partial bundle refunds are not possible through our payment processor; a full refund may be provided if a correct product is purchased separately.</li>
            <li>Customer changes their mind post-purchase.</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refund requests where customers refuse to assist support staff or provide necessary information to troubleshoot technical issues.</li>
            <li>Orders placed beyond the 14-day guarantee period experiencing technical issues.</li>
          </ul>

          {/* Section: Accepted Circumstances */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-6">Accepted Circumstances</h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Non-Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Purchase of services like Registration Backup Service (RBS), Download Insurance Service, or Extended Download Service (EDS) without awareness that they can be canceled after purchase. EasyPrints will assist in recovering costs via the payment platform.</li>
            <li>Exchanging a program by purchasing the correct one, after which the original purchase cost is refunded.</li>
            <li>Duplicate purchases or similar product purchases. EasyPrints may exchange one product or refund one purchase.</li>
            <li>No response from EasyPrints Support within 24 hours, registration code not received, and the customer no longer needs the product. Refund will be issued.</li>
            <li>Purchasing alternative software due to technical errors. Product exchange or full refund may be issued.</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Technical Problems</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Purchased software has significant technical issues with no response for 30 days. Customers may receive a refund if they choose not to wait for future upgrades.</li>
          </ul>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Refund Process</h4>
          <p className="mb-4 leading-relaxed">
            Once a refund is approved, the associated license will be deactivated. For downloaded software, the product must be removed from your device. Refunds are issued to the original payment method (credit card, bank account, or PayPal). Processing times may vary, typically 48 to 72 hours.
          </p>
        </article>
                </div>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
