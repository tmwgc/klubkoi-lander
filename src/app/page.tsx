import { Footer } from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection";
import TopNavigation from "@/components/Navigation/TopNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <HeroSection />
      <div className="h-[100vh]"></div>
      <Footer />
    </>
  );
}
