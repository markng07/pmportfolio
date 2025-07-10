import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceTimeline from "@/components/experience-timeline";
import ProductShowcase from "@/components/product-showcase";
import SkillsSection from "@/components/skills-section";
import AchievementsDashboard from "@/components/achievements-dashboard";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <ExperienceTimeline />
      <ProductShowcase />
      <SkillsSection />
      <AchievementsDashboard />
      <ContactSection />
      <Footer />
    </div>
  );
}
