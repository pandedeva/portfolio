import AboutSection from "@/components/about/AboutSection";
import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import ProjectSection from "@/components/project/ProjectSection";
import EmailSection from "@/components/contact/EmailSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-32">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
