import AlliancesSection from "@/components/AlliancesSection";
import BlogArticles from "@/components/BlogArticles";
import CasinoGamesExperience from "@/components/CasinoGameExperience";
import ClubOrigin from "@/components/ClubOrigin";
import CopyRightFooter from "@/components/CopyRightFooter";
import ExchangeList from "@/components/ExchangeList";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeatureSection";
import { Footer } from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection";
import TopNavigation from "@/components/Navigation/TopNavigation";
import { NewsHeadlines } from "@/components/NewsHeadlines";
import PurchaseAndStake from "@/components/PurchaseAndStake";
import RandomChatsSection from "@/components/RandomChatsSection";
import SignupForm from "@/components/SignupForm";
import TeamSection from "@/components/TeamSection";
import Tokenomics from "@/components/Tokenomics";
import TrailerSneakpeaks from "@/components/TrailerSneakPeaks";
import VisionAndMission from "@/components/VisionAndMission";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <HeroSection />
      <ClubOrigin />
      <TrailerSneakpeaks />
      <CasinoGamesExperience />
      <RandomChatsSection />
      <AlliancesSection />
      <VisionAndMission />
      <FeaturesSection />
      <Tokenomics />
      <ExchangeList />
      <PurchaseAndStake />
      <NewsHeadlines />
      <TeamSection />
      <SignupForm />
      <FAQSection />
      <BlogArticles />
      <CopyRightFooter />
      <Footer />
    </>
  );
}
