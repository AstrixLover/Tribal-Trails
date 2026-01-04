import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import CultureSection from "@/components/CultureSection";
import FestivalsSection from "@/components/FestivalsSection";
import CuisineSection from "@/components/CuisineSection";
import DestinationsSection from "@/components/DestinationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HistorySection />
      <CultureSection />
      <FestivalsSection />
      <CuisineSection />
      <DestinationsSection />
      <Footer />
    </div>
  );
};

export default Index;
