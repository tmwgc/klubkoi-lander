import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import TopNavigation from "@/components/Navigation/TopNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavigation />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
