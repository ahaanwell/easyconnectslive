'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TermsConditions() {
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
                      
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                            Terms & Conditions
                        </h1>
                        <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Our policies are designed to protect every user's rights and ensure a
            reliable, transparent, and trustworthy experience across all EasyPrints services.
          </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">

                    {/* Content */}
                    <article className="prose prose-slate max-w-none lg:prose-lg xl:prose-xl p-8 text-black">

          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">
            EasyPrints Service Terms and Conditions of Use
          </h2>

          <p className="mb-4 leading-relaxed">
            <strong>Effective Date:</strong> March 20, 2022
          </p>

          <p className="mb-4 leading-relaxed">
            By subscribing to or purchasing our services directly through our website or authorized partners, you acknowledge and agree to the following Terms and Conditions of Use and Service (collectively, the "Terms of Service"). This agreement forms a legally binding contract governing your access to and use of EasyPrints services.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Please Read Carefully</h3>
          <p className="mb-4 leading-relaxed">
            Welcome to <strong>EasyPrints</strong>, a fully owned subsidiary of Sapphire Softech Solutions, doing business as (“we,” “our,” or “us”), headquartered at 14 West Second Street, Suite 108, Upland, CA 91786. Through our services, you can access:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Automatic detection and resolution of common Windows-related errors.</li>
            <li>Access to a comprehensive self-help library for issues that cannot be automated.</li>
            <li>Live technical assistance to resolve complex issues not covered by automated or self-help resources.</li>
          </ul>

          <p className="mb-4 leading-relaxed">
            These Terms govern all interactions between you and EasyPrints, including access to and use of our software, subscription-based services, support features, and all related materials, documentation, and content (collectively referred to as “Services”) provided via our official website at <a href="https://www.easyprintsnow.com" className="text-sky-700 underline">https://www.easyprintsnow.com/</a> or any associated subdomains, partner portals, or customer support centers.
          </p>

          <p className="mb-4 leading-relaxed">
            Throughout these Terms, references to “EasyPrints,” “EasyPrints Service,” “Active Optimization Service,” “our service,” or “the service” all refer to the same subscription-based offerings.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Dispute Resolution and Arbitration</h3>
          <p className="mb-4 leading-relaxed">
            By using our services, you agree that any dispute or claim arising from or relating to your EasyPrints account or the use of our services will be resolved through binding arbitration, rather than in court, except for matters that qualify for small claims court.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Linked Policies</h3>
          <p className="mb-4 leading-relaxed">
            These Terms incorporate our <a href="https://www.easyprintsnow.com/privacy-policy/" className="text-sky-700 underline">Privacy Policy</a> by reference. The Privacy Policy outlines how EasyPrints collects, uses, and safeguards personal data, cookies, and other user-related information.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">
            Acceptance of Terms via Electronic Signature
          </h3>

          <p className="mb-4 leading-relaxed">
            By accessing our website or using our services, you signify your acceptance of these Terms of Service. When you click “I Agree,” “I Consent,” or any similar button or indicator of consent, you authorize EasyPrints to treat your action as a legally binding electronic signature. This has the same effect as a handwritten signature under applicable electronic records and signature laws.
          </p>

          <p className="mb-4 leading-relaxed">
            You confirm your intention to transact electronically and acknowledge that all agreements and communications executed in this format are valid. You may withdraw your consent to conduct transactions electronically at any time by providing written notice to EasyPrints. However, doing so will result in suspension or termination of access to our websites or services until alternative consent is granted through legally recognized means.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Revisions and Updates</h3>
          <p className="mb-4 leading-relaxed">
            EasyPrints reserves the right to modify or update these Terms of Service, including the Privacy Policy, at any time. Updated versions take effect immediately upon posting unless otherwise stated. Existing subscribers will receive at least 30 days’ notice before any major policy changes take effect.
          </p>

          <p className="mb-4 leading-relaxed">
            It is your responsibility to review the posted Terms regularly. Continued use of EasyPrints services after updates indicates your acceptance of the revised terms and your agreement to comply with them.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Electronic Communications and Notifications</h3>
          <p className="mb-4 leading-relaxed">
            By using EasyPrints services, you consent to receiving electronic communications regarding your account. These may include emails, account notifications, or posted messages within your EasyPrints account dashboard. Such communications cover essential topics such as payment confirmations, password resets, billing updates, and service-related alerts.
          </p>

          <p className="mb-4 leading-relaxed">
            You agree that all notices, disclosures, agreements, and communications provided electronically fulfill any legal requirement for written communication. We recommend saving or printing copies of all electronic communications for your records.
          </p>

          <p className="mb-4 leading-relaxed">
            Additionally, you consent to receive optional promotional and informational communications such as product announcements, offers, surveys, and updates about new EasyPrints features. You also agree to receive occasional phone calls related to scheduled technical support sessions or billing inquiries, as required.
          </p>

          <p className="mb-4 leading-relaxed">
            For full details regarding our communications practices, please refer to our <a href="https://www.easyprintsnow.com/privacy-policy/" className="text-sky-700 underline">Privacy Policy</a>.
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Account Setup & Access to Services
        </h1>

        <section className="space-y-4 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-semibold mt-6">Creating an Account</h2>
          <p>
            While anyone can browse the public pages of our website, access to our services requires the creation and activation of an account.
          </p>

          <p>To set up your account:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Complete the online order forms provided by EasyPrints.</li>
            <li>Follow the provided instructions to submit your subscription request.</li>
            <li>Confirm that you are at least 18 years of age.</li>
            <li>Create a unique username and password.</li>
            <li>Provide a valid email address.</li>
            <li>Agree to these Terms of Service and any additional terms outlined during the setup process.</li>
          </ul>

          <p>
            By selecting "I agree", and if you meet the eligibility requirements, your account will be activated. If you select "I do not agree" or fail to meet the criteria, your account will not be activated and access to our services will be denied.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Account Activation</h2>
          <p>
            EasyPrints reserves the right to deny account activation at its sole discretion, without providing a reason. Upon successful activation, you will receive a confirmation email. Once activation steps are complete, you will be able to log in and access the services, including features applicable to your subscription level.
          </p>

          <p>By activating your account, you confirm:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>You have read and understand these Terms of Service.</li>
            <li>You agree to be legally bound by them.</li>
          </ul>

          <p>Additionally:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Some services are subject to additional terms and user limitations, as detailed in your order.</li>
            <li>Services are limited to the number of devices specified in your subscription. Adding more devices requires a separate order.</li>
            <li>Services are provided "as is" and are not contingent on future updates or features unless explicitly stated in the order.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Password Security</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You are responsible for maintaining the confidentiality of your account password.</li>
            <li>You are liable for all activity under your account, whether authorized or not.</li>
            <li>If your password is lost, stolen, or compromised, notify EasyPrints immediately.</li>
            <li>You will only have access to services and areas that EasyPrints has authorized.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Account Information Requirements</h2>
          <p>As a condition of using our services, you agree to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provide accurate, current, and complete information during account setup.</li>
            <li>Promptly update this information as needed.</li>
          </ul>
          <p>
            Providing false, outdated, or incomplete information—or if EasyPrints suspects such—is grounds for account suspension or termination. This may also result in denial of current or future access to the services or website.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Accessing Services Through the EasyPrints Client
          </h2>
          <h3 className="text-xl font-semibold mt-4">Client Overview</h3>
          <p>
            We offer the EasyPrints client applet ("the client") as a tool to enhance your experience by streamlining access to our advisory services.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>The client performs initial system analysis (e.g., internet speed, security settings, drivers).</li>
            <li>It creates your profile and detects connected hardware to begin and manage system optimizations.</li>
            <li>Full functionality is unlocked only with a valid subscription.</li>
            <li>The client includes a third-party component, cpuidsdk.dll, from CPUID EURL to improve performance recommendations.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Installation and Deactivation</h3>
          <p>
            You may deactivate the client at any time using your operating system’s standard procedures:
          </p>
          <p>
            <strong>Windows:</strong> Go to Control Panel &gt; Add/Remove Programs, select “EasyPrints,” and click “Change/Remove.”
          </p>

          <p>
            <strong>Note:</strong> Deactivation may leave behind harmless residual files or registry entries, which can be removed manually. Examples:
          </p>

          <p>
            <strong>Windows XP:</strong>
            <br />
            Downloads – C:\Documents and Settings\*username*\My Documents\Downloads\EasyPrints
            <br />
            License – C:\Documents and Settings\All Users\Application Data\EasyPrints\EasyPrints\dd.lic
          </p>

          <p className="w-full overflow-x-scroll">
            <strong>Windows Vista and above:</strong>
            <br />
            <br />
            Downloads –  C:\Users\*username*\Downloads\EasyPrints
            <br />
            <br />
            License –  C:\ProgramData\EasyPrints\EasyPrints\dd.lic
          </p>

          <p>
            To remove .NET libraries used by the client, go to Control Panel &gt; Add/Remove Programs, select Microsoft .NET 2.0, and click “Change/Remove.”
          </p>

          <h2 className="text-2xl font-semibold mt-6">Usage Rights and Restrictions</h2>
          <p>By accepting these Terms of Service:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>You are granted a license to use the client on the number of computers specified in your subscription.</li>
            <li>You may not:
              <ul className="list-disc ml-6 space-y-1">
                <li>Reverse engineer, decompile, disassemble, or modify the client.</li>
                <li>Attempt to discover its source code or create derivative works.</li>
                <li>Use it to clone system configurations across multiple machines.</li>
              </ul>
            </li>
          </ul>

          <p>The client is subject to U.S. export laws:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>It cannot be exported to embargoed countries or individuals on U.S. government-restricted lists.</li>
            <li>If you are downloading or using the client on behalf of the U.S. Government, it is subject to restricted rights under applicable federal regulations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Client Updates and Performance</h2>
          <p>The client is regularly updated to support ongoing service delivery. By using our services, you:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Consent to receive automatic client updates without additional notice.</li>
            <li>Understand that EasyPrints does not guarantee compatibility with your devices.</li>
            <li>Acknowledge that EasyPrints is not liable for device performance or functionality issues.</li>
            <li>Agree to contact your device manufacturer or vendor for hardware-related issues.</li>
          </ul>

          <p>
            If your device is sold, lost, or stolen, promptly deactivate it from your account. Failing to log out of your account may allow unauthorized access to your services or account information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Termination and Restrictions</h2>
          <p>
            EasyPrints reserves the right to suspend or terminate your account, without notice or compensation, if:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>You violate any Terms of Service.</li>
            <li>You misuse or engage in illegal activities involving the services or the client.</li>
          </ul>
        </section>


        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Using Live Technical Support Assistance to Access Services
        </h1>

        <section className="space-y-4 text-gray-800 leading-relaxed mt-4">
          <p>
            You can contact our live technical support agents by phone if you have an active, paid subscription to the services. These agents can often provide remote diagnostics, where, with your consent, the technician accesses your devices remotely through a proxy connection.
          </p>

          <p>
            You may either call a technician directly or schedule a support call in advance. The technician will request the email address associated with your account. To be eligible for support, you must ensure:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Our agents have full access to the devices, local area network, or system experiencing the issue.</li>
            <li>You have a valid, active subscription in good standing for the affected devices.</li>
          </ul>

          <p>
            You must also have your own internet connection. All supported hardware (as defined below) must be connected to a high-speed internet connection for the services to function properly. Dial-up and satellite internet connections are not supported and do not meet the minimum requirements for remote access through EasyPrints.
          </p>

          <p>
            EasyPrints aims to make support services available 12 hours a day, 7 days a week, excluding recognized legal holidays. However, service availability may be temporarily interrupted at times. For support requests that fall outside the scope of services defined in these Terms of Service, EasyPrints may offer additional support via phone agents for an extra fee.
          </p>

          <p>
            Our agents support both desktops and notebooks running Microsoft® Windows operating systems, collectively referred to as "supported PCs." The following software and applications are supported in publicly available versions:
          </p>

          <h2 className="text-2xl font-semibold mt-6">Supported Operating Systems:</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Windows™ 8</li>
            <li>Windows™ XP Home (SP3+)</li>
            <li>Windows™ XP Pro (SP3+)</li>
            <li>Windows™ Vista 32-bit (all service packs)</li>
            <li>Windows™ Vista 64-bit (all service packs)</li>
            <li>Windows™ 7 32-bit (all service packs)</li>
            <li>Windows™ 7 64-bit (all service packs)</li>
            <li>Windows™ 10 32-bit (all service packs)</li>
            <li>Windows™ 10 64-bit (all service packs)</li>
          </ul>

          <p>
            We assist with the setup, configuration, operation, and use of EasyPrints software, along with support for major internet browsers like Firefox®, Google Chrome™, and Microsoft Edge®. Assistance is also provided for email client setup and configuration, system performance enhancements (including for gaming or other applications), configuration, application usage, and troubleshooting.
          </p>

          <p>We support driver setup for any devices connected to your supported PC, including:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Printer connection setup</li>
            <li>Verifying printer connections</li>
            <li>Running printer test pages</li>
          </ul>

          <p>Additional support includes:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Audio and sound configuration</li>
            <li>Webcam setup</li>
            <li>Spyware and malware removal services</li>
          </ul>

          <p><strong>Please note:</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Some spyware or virus removal processes may affect certain programs’ performance.</li>
            <li>Removal actions may be restricted by software licenses, and it's your responsibility to review these before proceeding.</li>
            <li>While we aim to remove spyware and viruses, we cannot guarantee that new threats will not reappear on your devices or network after service.</li>
          </ul>

          <p>
            Our agents also make commercially reasonable efforts to support peripheral hardware connected to your supported PC, such as:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Printers</li>
            <li>Cameras</li>
            <li>Phones</li>
            <li>Music players</li>
            <li>Gaming systems</li>
          </ul>

          <p>Hardware support may involve:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Device driver configuration</li>
            <li>Debugging software-related issues</li>
            <li>Offering alternatives such as referring you to the device manufacturer for further assistance</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Exclusions from EasyPrints Signature Service</h2>
          <p>The following are not included in our support services:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Support for non-Windows® operating systems or applications</li>
            <li>On-site or at-home hardware/peripheral labor or parts replacement</li>
            <li>Support for systems managed by external IT departments</li>
            <li>Help with accessing corporate systems, email, or data</li>
            <li>Support for live data manipulation</li>
            <li>
              Assistance with:
              <ul className="list-disc ml-6 space-y-1">
                <li>Illegal video editing</li>
                <li>Creating illegal software copies</li>
                <li>Bypassing copyright protections</li>
                <li>Burning commercially available movie DVDs</li>
                <li>Setting up dual-boot operating systems</li>
                <li>Cracking protected files</li>
                <li>Any illegal activities as determined by EasyPrints</li>
              </ul>
            </li>
            <li>We also do not support:</li>
            <ul className="list-disc ml-10 space-y-1">
              <li>Commercial-grade printers</li>
              <li>Third-party browser plugins such as browser helpers or Flash™ players</li>
              <li>Systems that do not meet the minimum software requirements</li>
            </ul>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Limitations of Responsibility</h2>
          <p>EasyPrints is not responsible for the following:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Data loss or corruption</li>
            <li>Hardware replacement</li>
            <li>Software upgrades or new releases</li>
            <li>Older versions of supported hardware (support offered only on a commercially reasonable basis)</li>
            <li>Freeware or shareware, unless specifically stated otherwise</li>
            <li>Remote or on-site training, scripting, programming, database design, or web development</li>
            <li>Providing product keys, except for EasyPrints Signature Service software</li>
            <li>Data or software recovery (offered only on a commercially reasonable basis)</li>
            <li>Issues caused by intentional damage</li>
            <li>Any actions or services not explicitly described in this service documentation</li>
          </ul>

          <p>
            You can also access self-help content and resolve issues related to supported hardware or billing by contacting us via email at <a href="mailto:support@easyprintsnow.com" className="text-blue-600 underline">support@easyprintsnow.com</a>, or through our Sites Portal and Email Access Service.
          </p>
          </section>

          <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-4">
          Subscriptions, Billing, and Cancellation
        </h1>

        <section className="space-y-5 text-gray-800 leading-relaxed mt-4">
          <h2 className="text-2xl font-semibold">Ongoing Subscriptions:</h2>
          <p>
            Your EasyPrints subscription will automatically renew either monthly or annually—depending on your initial purchase—unless you cancel it or we terminate it. If your subscription started with a reduced introductory price, you will be charged the full subscription rate once the introductory period ends, as disclosed at the time of purchase. To use the Services, you must have internet access and provide a valid, accepted, and current payment method (referred to as "Payment Method"), which you may update at any time. We will charge your selected subscription fee to your Payment Method based on the term you chose. To avoid being charged for the next subscription term, you must cancel before the auto-renewal date, according to the term you initially selected.
          </p>

          <p>
            Be aware that applicable taxes may be included in your subscription charge depending on local laws. In some regions, sales tax may apply; if not collected, you may still be responsible for submitting use tax or other similar taxes. If it is later determined that sales tax should have been collected for your region, we will apply that charge to your account.
          </p>

          <h2 className="text-2xl font-semibold">Different Subscription Plans:</h2>
          <p>
            We may offer various subscription plans, including promotional offers or plans with unique terms and conditions. Any significant differences from the terms outlined in these Terms of Service will be clearly disclosed to you during sign-up, in your order, or through our communications. You can access specific details about your EasyPrints subscription by visiting our website and clicking on the “Your Account” link. We reserve the right to modify, discontinue, or otherwise change the subscription plans at our sole discretion.
          </p>

          <h2 className="text-2xl font-semibold">Recurring Billing:</h2>
          <p>
            By starting your EasyPrints subscription and providing a Payment Method, you authorize us to charge your Payment Method at the then-current rate—monthly or annually depending on your selected term—and to include any other charges related to your use of EasyPrints. You agree that the amount charged may vary from term to term due to factors such as promotional offers, redeemed gift cards or promo codes, or plan upgrades. You authorize us to charge your Payment Method for any such changes, which may be billed as one or multiple charges per billing cycle.
          </p>

          <h2 className="text-2xl font-semibold">Price Changes:</h2>
          <p>
            We reserve the right to change the pricing of our services, or any parts thereof, at any time and at our sole discretion. Unless otherwise specified in these Terms, you will be notified of any price changes by email before they take effect.
          </p>

          <h2 className="text-2xl font-semibold">Billing Cycle:</h2>
          <p>
            Subscription fees will be charged at the beginning of each paid subscription period and will automatically continue on each billing cycle until cancellation. Your Payment Method will be billed on the same calendar day that your subscription originally began. Subscription fees are deemed earned once paid. We may modify your billing schedule if there are issues processing your payment. If your subscription starts on a date that does not occur in a future month (e.g., January 31), we may charge your Payment Method on the closest applicable date (e.g., February 28). Any changes to your subscription may alter your renewal date. To find your next renewal date, go to the “Your Account” page and click “View billing details.” We may pre-authorize your Payment Method for upcoming charges. In these Terms, “billing” refers to all processes of charging, debiting, or collecting payments from your Payment Method. The terms “monthly,” “annually,” or “term” refer to your billing cycle unless otherwise indicated.
          </p>

          <h2 className="text-2xl font-semibold">No Refunds:</h2>
          <p>
            All payments are non-refundable. We do not issue refunds or credits for partial subscription periods. After cancellation, you will retain access to the service until the end of your current billing period. In some cases, we may choose—at our sole discretion—to issue refunds, credits, or discounts. The amount, type, and issuance of such credits are entirely up to us and do not establish any obligation to provide similar compensation in the future.
          </p>

          <h2 className="text-2xl font-semibold">Cancellation:</h2>
          <p>
            You may cancel your EasyPrints subscription at any time. Access to the service will continue until the end of your current billing cycle. WE DO NOT ISSUE REFUNDS OR CREDITS FOR PARTIAL PERIODS. To cancel, go to the “Your Account” page on our website and follow the cancellation steps. Your account will automatically close at the end of your billing period. For specific closure dates, click “View billing details” in your account settings.
          </p>

          <h2 className="text-2xl font-semibold">Subscriber Eligibility and Use of Services</h2>
          <p>
            To be eligible for a subscription, you must be at least 18 years old or have reached the legal age of majority in your jurisdiction. Individuals under 18 may only use the service under the supervision of a parent or legal guardian who manages the account and agrees to these Terms of Service.
          </p>

          <p>
            You are granted a limited, non-exclusive, non-transferable license to use the EasyPrints Client and Services solely for personal, non-commercial purposes during your subscription term. This license includes access to updates, optimizations, and service improvements. You do not receive any additional rights or ownership beyond this limited license.
          </p>

          <p>
            We regularly update and test our services, including the Client. These tests may include changes to the website, interface, service quality, subscription plans, features, and more. You agree that you may be included or excluded from such tests at our discretion and without prior notice. We may modify or adjust our Services at any time.
          </p>

          <p>
            By using the Services, you agree to follow all applicable laws, regulations, and usage restrictions. You agree not to:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Archive, download (except temporary caching), reproduce, distribute, modify, display, perform, publish, license, or create derivative works based on EasyPrints’s content or services.</li>
            <li>Circumvent, remove, or tamper with any content protection features.</li>
            <li>Use automated tools like robots, spiders, or scrapers.</li>
            <li>Reverse-engineer or disassemble any software used in the Services.</li>
            <li>Modify the Service’s code or use data mining tools.</li>
            <li>Upload or transmit malicious software, including viruses.</li>
            <li>Use the Services to create competing products or to copy EasyPrints’s features or design.</li>
            <li>Share, resell, or lease the Services to third parties.</li>
            <li>Store or transmit illegal, infringing, or privacy-violating content.</li>
            <li>Interfere with Service performance or data integrity.</li>
            <li>Impersonate someone else or gain unauthorized access to the Services or other users’ devices.</li>
          </ul>

          <p>
            If you violate these Terms, EasyPrints may issue warnings, suspend services, or terminate your account at its sole discretion.
          </p>

          <h2 className="text-2xl font-semibold">Passwords and Account Access</h2>
          <p>
            The person who creates the EasyPrints account and provides the Payment Method is considered the Account Owner, who maintains control over the account through their password. To maintain exclusive control, you should not share your password or Payment Method details (e.g., card’s last four digits or PayPal email) with others.
          </p>

          <p>
            If you're accepting these Terms on behalf of a company or legal entity, you affirm that you have the authority to bind that entity. If you don’t have such authority or don’t agree to these Terms, do not proceed with use.
          </p>

          <p>
            We use technology that helps recognize you as the Account Owner to facilitate seamless access, meaning you may not need to re-enter your password on EasyPrints-ready devices or our website.
          </p>

          <p>
            Be cautious of any request asking for your Payment Method or account information. These may be attempts at identity theft. Always manage your account directly through the official EasyPrints site. EasyPrints may suspend accounts at any time to protect itself and its partners from suspected fraud. Refunds or credits will not be issued for accounts suspended due to such activity.
          </p>

          <h2 className="text-2xl font-semibold">Disclaimers of Warranties and Limitations of Liability</h2>
          <p>
            EasyPrints services—including the Client and all content and features—are provided “as is” and “as available” without warranties of any kind. We do not guarantee uninterrupted use. Except as otherwise stated, EasyPrints disclaims all express or implied warranties, including merchantability, fitness for a particular purpose, non-infringement, and quiet enjoyment.
          </p>

          <p>
            To the fullest extent permitted by law, EasyPrints, its affiliates, and their employees or licensors will not be liable for any indirect, incidental, punitive, or consequential damages—including lost profits, data loss, or business interruption—even if previously advised of such possibilities.
          </p>

          <p>
            Certain jurisdictions may not allow the limitation or exclusion of some liabilities, in which case these limitations may not fully apply to you.
          </p>

          <p>
            If any part of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in effect. These limitations are essential to the agreement between you and EasyPrints.
          </p>

          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p>
            These Terms and all related transactions are governed by the laws of the State of California, U.S.A., regardless of conflict of law rules. You may also have specific consumer rights under local laws that are not affected by these Terms.
          </p>

          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p>
            Copyright: All content and services are protected under copyright, trade secret, and other intellectual property laws.
          </p>

          <p>
            Trademarks: “EasyPrints” is a registered trademark of EasyPrints, 14 West Second Street, Suite 108, Upland, CA 91786.
          </p>

          <p>
            Patents: Our services may be protected by patents. For details, visit:{" "}
            <a
              href="https://www.easyprintsnow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://www.easyprintsnow.com/
            </a>
          </p>

          <h2 className="text-2xl font-semibold">DMCA Compliance</h2>
          <p>
            Under the Digital Millennium Copyright Act (DMCA), if you believe your copyright has been infringed on EasyPrints’s platform, you may send a takedown notice. Your notice must include:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>A physical or electronic signature of the copyright holder or authorized agent.</li>
            <li>Identification of the copyrighted work.</li>
            <li>Identification of the infringing content and where it’s located.</li>
            <li>Your contact information.</li>
            <li>A good faith belief that the use is unauthorized.</li>
            <li>A statement confirming the accuracy of your notice, under penalty of perjury.</li>
          </ul>

          <p>Counter-notices are also allowed under</p>

          <h2 className="text-3xl font-bold mb-6">Arbitration of Claims</h2>
      <p className="mb-4">
        Please read this carefully. It’s important to understand how it affects your rights.
      </p>
      <p className="mb-4">
        At EasyPrints, we strive to ensure that our outstanding service team can resolve most issues you may experience while using our services. You can visit our help center for answers to common questions or contact our customer service team for assistance. In the rare event that a problem remains unresolved, we believe in setting clear expectations from the outset to avoid confusion later. Therefore, both you and EasyPrints agree to the resolution process described below.
      </p>
      <p className="mb-4">
        You and EasyPrints agree to first attempt to resolve any issue informally for a minimum of 30 days to reach the quickest and most efficient resolution possible. To initiate this, please send an email to EasyPrints at:
        EasyPrints, 14 West Second Street, Suite 108, Upland, CA 91786 — Attn: Legal Department.
        Be sure to include your full name, contact information, and your proposed resolution. If we need to contact you, we will reach out using the email address associated with your EasyPrints account.
      </p>
      <p className="mb-4">
        If after at least 30 days of informal communication we are unable to come to an agreement, you and EasyPrints agree to resolve any claim (arising from or related to these terms—including their formation, performance, or breach—our relationship, or your use of the services) through binding arbitration. This arbitration will be conducted by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, which you can access here
        .
      </p>
      <p className="mb-4">
        However, EasyPrints permits you to bring a claim in small claims court as long as you proceed on an individual basis. This is an exception to the arbitration agreement.
      </p>
      <p className="mb-4">
        To ensure a timely resolution, both parties agree that any arbitration must begin within one year from when the claim arises. Any claim not brought within that timeframe will be considered waived. Furthermore, both parties agree to arbitrate only on an individual basis and not to participate in any class actions. Each of us explicitly waives any right to file or participate in a class action or seek relief on a class-wide basis.
      </p>
      <p className="mb-4">All arbitration hearings will take place in Upland, California.</p>
      <p className="mb-4">
        You can download or print a form notice and arbitration initiation form at www.adr.org
        . If you initiate arbitration, your fees will be limited to the filing fee outlined in the AAA's Consumer Arbitration Rules. EasyPrints will cover all other arbitration-related fees, including your portion of the arbitrator’s compensation, regardless of who initiates the process.
      </p>
      <p className="mb-4">
        Please note: the arbitrator's decision is final and can be enforced in any court with appropriate jurisdiction.
      </p>
      <p className="mb-4">
        If you're uncertain about any of these terms, we recommend consulting an attorney.
      </p>
      <p className="mb-4">
        We understand that discussing potential problems may not be ideal, but we are committed to transparency. We appreciate your understanding of the importance of this process and your agreement with the terms outlined here.
      </p>
      <h3 className="text-2xl font-semibold mt-8 mb-4">Survival Clause:</h3>
      <p className="mb-6">
        If any portion of these terms of service is found to be void, unlawful, or unenforceable, the remaining terms will remain valid, lawful, and enforceable.
      </p>

      <h2 className="text-3xl font-bold mb-6"> Cookies Policy</h2>
      <p className="mb-4">
        Cookies are small text files stored by your web browser when visiting websites. You can manage how websites use cookies through your browser’s privacy settings (check your browser’s help section for guidance). Please note that fully disabling cookies may impact the functionality of EasyPrints websites.
      </p>
      <p className="mb-4">
        EasyPrints and its business partners use cookies for various purposes, such as:
      </p>
      <ul className="list-disc ml-8 mb-4 space-y-2">
        <li>Verifying your identity on our websites so we can deliver the services you requested</li>
        <li>Preserving data you've provided, like items in your shopping cart on https://www.easyprintsnow.com</li>
        <li>Delivering the websites and services you use on EasyPrints</li>
        <li>Remembering your preferences or where you left off when using an EasyPrints website</li>
        <li>Monitoring how you use EasyPrints websites to improve them, tailoring the experience to your interests, and conducting market research</li>
        <li>Identifying your likely interests to show you more relevant EasyPrints content and ads on non-EasyPrints websites and apps</li>
        <li>Managing EasyPrints tools that help our business customers improve and personalize their apps, websites, and marketing efforts</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Technologies Similar to Cookies</h3>
      <p className="mb-4">
        While HTTP cookies are the most commonly known, there are other similar technologies like HTML5 Local Storage and Local Shared Objects (LSOs). EasyPrints and the websites hosting its files may use these technologies to verify your identity, store provided information, and remember your settings as described above.
      </p>
      <p className="mb-4">
        If you're using an EasyPrints application offline, we may store website usage data on your device, which will be synchronized with our servers once you're back online.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Hidden Programs can Web Beacons</h3>
      <p className="mb-4">
        We also utilize web beacons and embedded scripts in our emails and advertisements, among other technologies.
      </p>
      <p className="mb-4">
        Web beacons (or “tags”) are small pieces of code in emails, ads, or web pages that notify EasyPrints (or the companies assisting us) when these are viewed or clicked.
      </p>
      <p className="mb-4">
        Embedded scripts are code snippets used in certain web pages to track your interactions (e.g., clicking links). This data helps us improve our websites, tailor content to your interests, and perform market research. You may be able to disable scripting in your browser settings (refer to your browser’s help section), but note that doing so may impact how some EasyPrints websites function.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">EasyPrints and social networking</h3>
      <p className="mb-4">
        Please be aware that any personal information you share via social networking platforms may be collected, accessed, and used by EasyPrints and others. The handling of your data on these platforms is governed by the privacy policy of the specific social network.
      </p>
      <p className="mb-4">
        EasyPrints may collect information about you through social networks in several ways:
      </p>
      <ul className="list-disc ml-8 mb-4 space-y-2">
        <li>When you sign into an EasyPrints app or website using your social network account (e.g., Facebook), this may help create your EasyPrints account</li>
        <li>When you use an EasyPrints app on a social network or interact with an EasyPrints page (e.g., by liking or joining), the platform may share information about you with EasyPrints. Refer to the social network’s privacy policy for details</li>
        <li>When you interact with EasyPrints social content, we may use cookies to track your clicks</li>
        <li>If your social network profile is public, EasyPrints may be able to see that information</li>
      </ul>
      <p className="mb-4">
        For privacy policies regarding social networking services you use with EasyPrints, please review the respective platforms' privacy documentation.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Communications from EasyPrints</h3>
      <p className="mb-4">
        We may contact you in different ways—for example, to inform you about new EasyPrints apps or features we think may interest you.
      </p>
      <h4 className="text-xl font-semibold mt-6 mb-2">Email, Phone, and Mail Marketing</h4>
      <p className="mb-4">
        If you opt to receive marketing communications from us via email, phone, or postal mail, we aim to tailor these messages based on your interests. We track email opens to measure effectiveness and provide personalized product and service suggestions based on your usage.
      </p>
      <p className="mb-4">
        If you're a business customer who has consented to receive EasyPrints marketing, we may share your information with our resellers and sales partners. We do not share personal consumer data with third parties for their own marketing use unless we have your explicit consent.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        Tailoring EasyPrints Apps and Websites to your interests
      </h3>
      <p className="mb-4">
        We may present content, promotions, or suggestions on EasyPrints websites and apps based on your presumed interests.
      </p>
      <h4 className="text-xl font-semibold mt-6 mb-2">Interest-Based Advertising</h4>
      <p className="mb-4">
        EasyPrints runs online ad campaigns that tailor ads to your interests. We gather insights from your interactions with our apps and websites and may also use data from other companies to better understand your preferences across non-EasyPrints sites and apps.
      </p>
      <p className="mb-4">
        These personalized ads (also known as interest-based or behavioral advertising) appear on non-EasyPrints websites and apps via ad networks that may set their own cookies, web beacons, and identifiers. We and our partners collect data about which EasyPrints ads you see and interact with, and where they are shown.
      </p>
      <p className="mb-4">
        Some of these networks also use technologies to recognize users across devices and browsers. This helps us show you personalized ads on other platforms based on how you use EasyPrints services.
      </p>
      <p className="mb-4">
        If you prefer not to receive interest-based ads outside of EasyPrints apps, adjust your mobile device settings to limit ad tracking.
      </p>
      <p className="mb-4">
        Note that even if you opt out of interest-based ads, you may still see EasyPrints advertisements elsewhere—but they won’t be personalized based on your interactions with EasyPrints.
      </p>
      <p className="mb-4">
        We also run ad campaigns on social networks and other third-party platforms. These ads may be personalized based on user insights, such as identifying customers who may benefit from an EasyPrints upgrade. They may also use data users have shared directly with the third-party site or app. When we share information for advertising purposes, it is only used to display EasyPrints ads.
      </p>
      <p>
        To understand how your data is handled on these third-party platforms, please refer to their respective privacy policies.
      </p>
        </section>

        <h1 className="text-3xl font-bold mb-8 mt-4">
          EU-U.S. Privacy Shield / European Data Transfers
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Protection of Personal Information</h2>
          <p>
            EasyPrints adheres to applicable legal requirements when transferring customer
            personal data across international borders.
          </p>

          <h3 className="text-xl font-semibold">How Does EasyPrints Transfer Your EU Personal Data?</h3>
          <p>
            For individual users and customers whose use of EasyPrints websites and applications
            involves the transfer of personal data from the European Economic Area (EEA) or
            Switzerland to countries outside the EEA, EasyPrints relies on one or more of the
            following legal mechanisms:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>The EU-U.S. Privacy Shield</li>
            <li>The Swiss-U.S. Privacy Shield</li>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>The individual's consent</li>
          </ul>
          <p>
            EasyPrints U.S. has confirmed its compliance with the Privacy Shield Principles
            concerning the transfer of your personal data from the EEA and Switzerland to
            EasyPrints websites and applications.
          </p>
          <p>Further details about our Privacy Shield certification can be found below.</p>

          <h3 className="text-xl font-semibold">
            How Does EasyPrints Transfer EU Personal Data on Behalf of Business Customers?
          </h3>
          <p>
            For business clients whose use of EasyPrints solutions results in the transfer of
            personal data from the EEA or Switzerland to non-EEA countries, EasyPrints relies on:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>The EU-U.S. Privacy Shield</li>
            <li>The Swiss-U.S. Privacy Shield</li>
            <li>Standard Contractual Clauses</li>
          </ul>
          <p>
            Further information regarding our Privacy Shield certification is provided below.
            Concerning Standard Contractual Clauses, EasyPrints has prepared a Data Processing
            Agreement (DPA) that includes the SCCs. If you are an EasyPrints business customer and
            wish to enter into a DPA and SCCs with us, please contact us.
          </p>

          <h3 className="text-xl font-semibold">EasyPrints Privacy Shield Certification</h3>
          <p>
            The U.S. Department of Commerce has established the EU-U.S. and Swiss-U.S. Privacy
            Shield Frameworks, to which EasyPrints U.S. has certified in relation to the transfer
            of personal data from the EEA and Switzerland to the U.S.
          </p>
          <p>
            As outlined in our policy, if you are an individual user located outside of North
            America, your relationship is with EasyPrints, which acts as the “data controller” of
            your personal information collected by EasyPrints. Your personal information may be
            transferred to EasyPrints U.S. under our Privacy Shield certification or other legal
            transfer mechanisms described above.
          </p>
          <p>
            Regarding personal data processed on behalf of our business clients located in the EEA
            and Switzerland, EasyPrints typically functions as a "data processor" under EU data
            protection laws. In delivering services to business clients, EasyPrints may transfer
            end-user personal information to EasyPrints U.S. in accordance with the Standard
            Contractual Clauses or our Privacy Shield certification.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h2 className="text-2xl font-semibold ">DMCA</h2>
          <p>
            We are committed to respecting the intellectual property rights of others and will take
            all appropriate actions to address any infringement occurring on our platform.
          </p>

          <h3 className="text-xl font-semibold">DMCA Notices:</h3>
          <p>
            If you believe that any material on our website infringes your copyright or trademark,
            please send us a DMCA notice that includes all of the following details:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              A picture or detailed description of the copyrighted work you believe has been
              infringed
            </li>
            <li>
              A description of the infringing material, along with sufficient detail to locate it on
              the EasyPrints website or service (including the URL, if available)
            </li>
            <li>Your name, address, telephone number, and email address</li>
            <li>
              A statement that reads:
              <br />
              “I have a good faith belief that the use of the copyrighted material described in this
              notice is not authorized by the law (including fair use, fair dealing, or other
              exceptions) or the copyright owner.”
            </li>
            <li>
              The following declaration:
              <br />
              “Under penalty of perjury, I certify that: (i) the information in this notice is
              accurate; and (ii) I am the owner of the copyright or of an exclusive right that is
              allegedly infringed, or authorized to act on behalf of the owner.”
            </li>
            <li>Your physical or electronic signature</li>
          </ul>

          <p>Send your DMCA claim to our designated copyright agent:</p>
          <p>
            By mail: support@easyprintsnow.com
            <br />
            By phone: ______________ (to be updated)
            <br />
            By email: support@easyprintsnow.com
          </p>
          <p>
            Note: Submitting a false DMCA claim may result in liability for costs and legal fees. We
            strongly recommend consulting legal counsel before filing. When we receive a DMCA
            notice, we forward a copy to the user who uploaded the allegedly infringing content.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h2 className="text-2xl font-semibold">
            Consent to These Terms of Service and Electronic Orders
          </h2>
          <p>
            By accessing our sites or using our services, you accept these Terms of Service. By
            clicking “I AGREE,” “I CONSENT,” or any similar form of electronic acceptance, you agree
            to conduct transactions electronically. Both you and EasyPrints affirm that electronic
            signatures carry the same legal weight as handwritten ones concerning these Terms of
            Service and all related electronic records or transactions.
          </p>
          <p>
            You confirm your intent to transact electronically with EasyPrints. You may withdraw
            your consent at any time by providing written notice; however, doing so may result in
            the suspension or termination of your use of EasyPrints sites or services unless an
            alternative legal method is provided for consent.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h2 className="text-2xl font-semibold">Changes to Terms of Service</h2>
          <p>
            EasyPrints reserves the right to revise these Terms of Service, including the Privacy
            Policy, at any time. Updates become effective immediately and override all previous
            versions—however, for current subscribers, changes will take effect 30 days after
            publication unless otherwise stated.
          </p>
          <p>
            We may provide written notice of changes, but it is your responsibility to review and
            comply with the most current version of the Terms. Continued use of our services after
            changes are made indicates your acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h2 className="text-2xl font-semibold">Communication Preferences</h2>
          <p>
            By using EasyPrints services, you agree to receive electronic communications related to
            your account. This may include emails sent to the address used during registration,
            messages posted on the EasyPrints service, or displayed in your “Your Account” section.
            These communications may include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Notices about your account (e.g., payment confirmations, password changes, and
              transactional messages)
            </li>
            <li>
              Marketing materials such as newsletters, special offers, promotional content, and
              surveys
            </li>
            <li>Phone calls regarding live technical support sessions</li>
            <li>Calls from our billing team to resolve any subscription-related issues</li>
          </ul>
          <p>
            All such communications are part of your relationship with EasyPrints.
          </p>
          <p>
            You agree that electronic communications fulfill any legal requirement that
            communications be in writing. We recommend saving or printing copies of all such
            messages. Please refer to our Privacy Policy for more information on how we manage
            marketing communications.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h2 className="text-2xl font-semibold">DMCA Counter Notices</h2>
          <p>
            If a user or customer believes that removed content is not infringing or that they have
            legal authorization (e.g., from the copyright owner), they may submit a DMCA
            counter-notice, including the following:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Identification of the material that was removed or access to which was disabled, and
              the location where it appeared before removal
            </li>
            <li>
              A statement, under penalty of perjury, that the user or authorized representative
              believes in good faith that the removal was due to a mistake or misidentification
            </li>
            <li>
              A statement of consent to the jurisdiction of the Federal Court in the user’s judicial
              district (or any district where the allegedly infringing material is located if
              outside the U.S.), and agreement to accept service of process from the original
              complainant
            </li>
            <li>A physical or digital signature of the user or authorized representative</li>
          </ul>
          <p>
            Note: Filing a false counter-notice may result in legal liability. Legal advice is
            strongly recommended. If a valid counter-notice is received, we may forward it to the
            original complainant. Unless the copyright owner initiates legal proceedings, we may
            reinstate the content or restore access at our discretion.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h2 className="text-2xl font-semibold">Trademark Infringement Notices</h2>
          <p>
            If you are a trademark owner or their agent and believe any content on our websites or
            services infringes your trademark, please send a notice with the same information
            required for a DMCA notice, as outlined above. We may share this notice with the user
            who posted the content and will process trademark complaints similarly to copyright
            claims.
          </p>
        </section>

        <section className="space-y-4 pb-10 mt-4">
          <h2 className="text-2xl font-semibold">AdChoices</h2>
          <p>
            Some ads you see on websites are customized based on your browsing behavior across
            various websites and devices. This type of advertising, known as “interest-based” or
            “online behavioral” advertising, helps support the online content, products, and
            services you use.
          </p>
          <p>
            The DAA Principles guide interest-based advertising and the collection of browsing data
            over time across unrelated websites and devices.
          </p>
          <p>
            Using your browser, you can control how certain participating companies collect and use
            your browsing data for advertising purposes.
          </p>
          <p>With our WebChoices tool, you can:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>View all participating companies</li>
            <li>Learn about each company’s practices</li>
            <li>See which companies are currently delivering personalized ads in your browser</li>
            <li>Check existing ad preferences and settings</li>
            <li>Set opt-out cookies or similar technologies to control participation</li>
          </ul>
          <p>
            Please note that if you clear your browser cookies, your opt-out settings may be lost.
            Return to this page periodically to review or update your preferences.
          </p>
          <p>
            To opt out from all participating companies at once, use the “OPT OUT OF ALL” feature.
          </p>
          <p>
            Keep in mind that even after opting out, participating companies may still use your data
            for other permissible purposes under DAA guidelines, and you may continue to receive
            non-personalized online ads.
          </p>
        </section>
        </article>
                </div>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
