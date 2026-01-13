import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Footer from "./components/Footer";
import ArticleSection from "./components/ArticleSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="">
        <Hero />
        <ArticleSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
