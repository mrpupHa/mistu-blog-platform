import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="">
          <HeroSection />
          <ArticleSection />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
