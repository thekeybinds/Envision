"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Benefits from "@/components/Benefits";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQAccordion from "@/components/FAQAccordion";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";

// We want the galaxy canvas to load only on the client
const GalaxyBackground = dynamic(() => import("@/components/GalaxyBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <GalaxyBackground />
      <Navbar />
      <Hero />
      <Showcase />
      <CaseStudySection />
      <Benefits />
      <ProcessTimeline />
      <FAQAccordion />
      <Footer />
    </main>
  );
}
