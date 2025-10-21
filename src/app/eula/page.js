'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function EULA() {
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
            <Header/>

            {/* Hero */}
            <div className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">End User License Agreement (EULA)</h1>
                    <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            This agreement outlines your rights and responsibilities when using EasyPrints software. Please read carefully to ensure proper use.
          </p>
          <p className="mt-4 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            By using our software, you acknowledge and accept these terms, which are designed to protect both your interests and those of EasyPrints.
          </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                    <article className="prose prose-slate text-black max-w-none lg:prose-lg xl:prose-xl p-8">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">End User License Agreement</h2>

          <p className="mb-4 leading-relaxed">
            Upon proceeding, a system scan will start automatically. You may continue other tasks while the scan runs, but it cannot be interrupted once initiated.
          </p>

          <p className="mb-4 leading-relaxed">
            Before installing or accessing the EasyPrints software, including any related files, media, or documentation (collectively referred to as the “Software”), you must accept this agreement. By clicking “Accept,” installing, or using the Software, you agree to be legally bound by these terms. This agreement constitutes the full understanding between you and EasyPrints and supersedes any prior communications regarding the Software. If you do not agree, do not install or use the Software.
          </p>

          {/* Section 1 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 1. Ownership of Intellectual Property</h3>
          <p className="mb-4 leading-relaxed">
            The Software is protected by copyright, trademarks, and other intellectual property laws. All rights, title, and interest in the Software are owned exclusively by EasyPrints, located at 14 West Second Street, Suite 108, Upland, CA 91786. Third-party content included or accessible through the Software remains the property of the respective owner. This agreement does not grant you rights to such third-party content. All rights not expressly granted are reserved by EasyPrints. The Software is licensed, not sold.
          </p>

          {/* Section 2 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 2. License Terms and Restrictions</h3>
          <p className="mb-4 leading-relaxed">
            Subject to compliance with this agreement, EasyPrints grants you a limited, non-transferable, non-exclusive license to install and use the Software on a single device. You may use the Software for personal or internal business purposes only. A single backup copy may be made for archival purposes and may only be used when the original is unavailable. You may not remove or alter copyright notices, share the Software, sublicense it, rent, or lease it. Reverse engineering, decompiling, or disassembling is prohibited except where explicitly allowed by law. Updates or supplementary components provided by EasyPrints are also subject to this agreement.
          </p>

          {/* Section 3 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 3. Limited Warranty</h3>
          <p className="mb-4 leading-relaxed">
            EasyPrints guarantees that the Software will operate substantially as described in the accompanying documentation for thirty (30) days after installation (“Warranty Period”), provided the issue is reported within this timeframe. This warranty does not cover misuse, accidents, or unauthorized modifications. Remedies include repair, replacement, or refund of the purchase price, at EasyPrints’s discretion.
          </p>

          {/* Section 4 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 4. Disclaimer of Additional Warranties</h3>
          <p className="mb-4 leading-relaxed">
            The Software is provided “as is” and “as available.” Except for the limited warranty above, EasyPrints disclaims all other warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. EasyPrints does not guarantee uninterrupted or error-free operation. Users assume all risks associated with performance and quality of the Software.
          </p>

          {/* Section 5 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 5. Limitation of Damages</h3>
          <p className="mb-4 leading-relaxed">
            To the extent permitted by law, EasyPrints is not liable for indirect, incidental, consequential, or punitive damages arising from your use of the Software, including lost profits or data. Some jurisdictions do not allow exclusion of such damages, so limitations may not apply in all cases.
          </p>

          {/* Section 6 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 6. Maximum Liability</h3>
          <p className="mb-4 leading-relaxed">
            EasyPrints’s total liability for any claim related to the Software will not exceed the amount you paid for the Software. This limitation applies regardless of legal theory, whether in contract, tort, or otherwise.
          </p>

          {/* Section 7 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 7. Export Compliance</h3>
          <p className="mb-4 leading-relaxed">
            You must comply with all U.S. export laws. You agree not to export or re-export the Software to prohibited countries, persons, or entities. You represent that you are not restricted from receiving the Software under these laws.
          </p>

          {/* Section 8 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 8. Taxes</h3>
          <p className="mb-4 leading-relaxed">
            You are responsible for any applicable taxes related to your acquisition or use of the Software, excluding taxes based on EasyPrints’s income.
          </p>

          {/* Section 9 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 9. Government End Users</h3>
          <p className="mb-4 leading-relaxed">
            If acquired by the U.S. Government, the Software is provided with “Restricted Rights” as defined under applicable statutes and regulations. Use, reproduction, or disclosure is subject to government contract provisions.
          </p>

          {/* Section 10 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 10. Termination</h3>
          <p className="mb-4 leading-relaxed">
            EasyPrints may terminate this agreement immediately if you fail to comply with any term. Upon termination, you must delete all copies of the Software and cease use.
          </p>

          {/* Section 11 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 11. Governing Law</h3>
          <p className="mb-4 leading-relaxed">
            For U.S. users, this agreement is governed by California law. For non-U.S. users, Hong Kong law applies. If any provision is invalid, the remaining terms remain in effect. Amendments must be in writing and signed by EasyPrints.
          </p>

          {/* Section 12 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 12. Dispute Resolution</h3>
          <p className="mb-4 leading-relaxed">
            Most issues can be resolved through EasyPrints support. If unresolved, disputes may proceed to informal notice, mediation, or arbitration. Terms apply to all related parties, including affiliates.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Claim Notification</h4>
          <p className="mb-4 leading-relaxed">
            Send written notice to EasyPrints including your details and the Software in question: <a href="mailto:support@easyprintsnow.com" className="text-sky-700 underline">support@easyprintsnow.com</a>. The purpose is to attempt informal resolution.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Mediation</h4>
          <p className="mb-4 leading-relaxed">
            Mediation is voluntary and non-binding. For U.S. users, mediation can be conducted via JAMS or AAA. For international users, contact EasyPrints.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Arbitration</h4>
          <p className="mb-4 leading-relaxed">
            U.S. users may opt for binding arbitration rather than court action. Arbitration is individual, confidential, and final, subject to FAA rules.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Opting Out</h4>
          <p className="mb-4 leading-relaxed">
            You may reject arbitration by emailing EasyPrints within 30 days of Software acquisition: <a href="mailto:support@easyprintsnow.com" className="text-sky-700 underline">support@easyprintsnow.com</a>. Include your name, date, and license info. Opt-out does not affect other rights.
          </p>
        </article>
                </div>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
