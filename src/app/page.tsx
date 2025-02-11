import AlliancesSection from "@/components/AlliancesSection";
import BlogArticles from "@/components/BlogArticles";
import CasinoGamesExperience from "@/components/CasinoGameExperience";
import CopyRightFooter from "@/components/CopyRightFooter";
import ExchangeList from "@/components/ExchangeList";
import FAQSection from "@/components/FAQSection";
import { Footer } from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection";
import TopNavigation from "@/components/Navigation/TopNavigation";
import RandomChatsSection from "@/components/RandomChatsSection";
import SignupForm from "@/components/SignupForm";
import Tokenomics from "@/components/Tokenomics";
import TrailerSneakpeaks from "@/components/TrailerSneakPeaks";
import VisionAndMission from "@/components/VisionAndMission";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <HeroSection />
      <TrailerSneakpeaks />
      <CasinoGamesExperience />
      <RandomChatsSection />
      <AlliancesSection />
      <VisionAndMission />
      <Tokenomics />
      <ExchangeList />
      <SignupForm />
      <FAQSection />
      <BlogArticles />
      <CopyRightFooter />
      <Footer />
    </>
  );
}
