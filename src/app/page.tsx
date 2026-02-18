'use client'
import AboutSection from "../modules/home/AboutSection";
import GetHelpSection from "../modules/home/GetHelpSection";
import HeroSection from "../modules/home/HeroSection";
import MissionSection from "../modules/home/MissionSection";
import ProfessionalServices from "../modules/home/ProfessionalServices";
import ServicesSection from "../modules/home/ServicesSection";
import SupportSection from "../modules/home/SupportSection";
import WhyServeSection from "../modules/home/WhyServeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>  
      <GetHelpSection/>
      <ProfessionalServices/>
      <SupportSection/>
      <WhyServeSection/>
      <MissionSection/>
    </main>
  );
}
