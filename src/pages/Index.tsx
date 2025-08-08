import EcoNav from "@/components/site/EcoNav";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import LogosStrip from "@/components/site/LogosStrip";
import CaseStudies from "@/components/site/CaseStudies";
import Timeline from "@/components/site/Timeline";
import TeamCred from "@/components/site/TeamCred";
import ContactModal from "@/components/site/ContactModal";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Eco Fusion — AI Automation & Full‑Stack Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Eco Fusion builds AI automation, full‑stack apps, and IoT agents. Request a demo.");

    // Basic canonical handling for SPA
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", "/");
  }, []);

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eco Fusion',
    url: '/',
    sameAs: [],
    description: 'AI automation, full‑stack engineering, and IoT agents.',
  };

  return (
    <div>
      <EcoNav />
      <main>
        <Hero />
        <Services />
        <LogosStrip />
        <CaseStudies />
        <Timeline />
        <TeamCred />
        <ContactModal />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    </div>
  );
};

export default Index;
