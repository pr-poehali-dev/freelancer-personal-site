import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/projects/ProjectsSection";
import ContactSection from "@/components/home/contact/ContactSection";
import { useVisibility } from "@/hooks/useVisibility";
import { useActiveSection } from "@/hooks/useActiveSection";

const Index = () => {
  const isVisible = useVisibility();
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-grow pt-24">
        <HeroSection isVisible={isVisible.hero} />
        <AboutSection isVisible={isVisible.about} />
        <ProjectsSection isVisible={isVisible.projects} />
        <ContactSection isVisible={isVisible.contact} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
