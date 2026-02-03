import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="">
        <HeroSection />
        <ArticleSection />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
