'use client'
import AboutSection from "../modules/home/AboutSection";
import GetHelpSection from "../modules/home/GetHelpSection";
import HeroSection from "../modules/home/HeroSection";
import ProfessionalServices from "../modules/home/ProfessionalServices";
import ServicesSection from "../modules/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <GetHelpSection/>
      <ProfessionalServices/>
    </main>
  );
}
