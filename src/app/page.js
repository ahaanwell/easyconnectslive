import FeatureGrid from "@/components/FeatureGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import TrustStrip from "@/components/TrustStrip";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <TrustStrip/>
    <FeatureGrid/>
    <HowItWorks/>
    <Testimonial/>
    <Pricing/>
    <Footer/>
    </>
  );
}
