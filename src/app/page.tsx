// import AlliancesSection from "@/components/AlliancesSection";
import BlogArticles from "@/components/BlogArticles";
// import CasinoGamesExperience from "@/components/CasinoGameExperience";
import ClubOrigin from "@/components/ClubOrigin";
import CopyRightFooter from "@/components/CopyRightFooter";
import ExchangeList from "@/components/ExchangeList";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection";
import TopNavigation from "@/components/Navigation/TopNavigation";
import { NewsHeadlines } from "@/components/NewsHeadlines";
import PurchaseAndStake from "@/components/PurchaseAndStake";
// import RandomChatsSection from "@/components/RandomChatsSection";
import SignupForm from "@/components/SignupForm";
import TeamSection from "@/components/TeamSection";
import Tokenomics from "@/components/Tokenomics";
import TrailerSneakpeaks from "@/components/TrailerSneakPeaks";
import VisionAndMission from "@/components/VisionAndMission";
import FeaturesSection from "@/components/FeatureSection";
import LevelUp from "@/components/LevelUp";
import Leaderboard from "@/components/Leaderboard";
import BossStatus from "@/components/BossStatus";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <HeroSection />
      <ClubOrigin />
      <TrailerSneakpeaks />
      <LevelUp />
      <BossStatus />
      <Leaderboard />
      {/*       <CasinoGamesExperience />
      <RandomChatsSection />
      <AlliancesSection /> */}
      <VisionAndMission />
      <FeaturesSection />
      <Tokenomics />
      <ExchangeList />
      <PurchaseAndStake />
      <NewsHeadlines />
      <TeamSection />
      <Roadmap />
      <SignupForm />
      <FAQSection />
      <BlogArticles />
      <CopyRightFooter />
      <Footer />
    </>
  );
}
