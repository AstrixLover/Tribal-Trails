import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-tribal.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-tribal-charcoal/60 via-tribal-charcoal/40 to-tribal-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-tribal-ochre/20 text-tribal-ochre text-sm font-medium mb-6 backdrop-blur-sm border border-tribal-ochre/30">
            Discover India's Living Heritage
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-tribal-cream leading-tight mb-6">
            Journey Into the Heart of{" "}
            <span className="text-gradient-tribal">Tribal India</span>
          </h1>
          
          <p className="font-serif text-lg sm:text-xl text-tribal-cream/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore the ancient traditions, vibrant festivals, and untold stories 
            of Maharashtra and Odisha's indigenous communities — a world where 
            history breathes and culture thrives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#destinations")}
            >
              Explore Destinations
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#history")}
            >
              Learn Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-tribal-ochre mb-1">
                <Users size={20} />
                <span className="font-display text-2xl sm:text-3xl font-bold text-tribal-cream">50+</span>
              </div>
              <p className="text-tribal-cream/70 text-sm">Tribal Communities</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-tribal-ochre mb-1">
                <MapPin size={20} />
                <span className="font-display text-2xl sm:text-3xl font-bold text-tribal-cream">100+</span>
              </div>
              <p className="text-tribal-cream/70 text-sm">Heritage Sites</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-tribal-ochre mb-1">
                <Calendar size={20} />
                <span className="font-display text-2xl sm:text-3xl font-bold text-tribal-cream">200+</span>
              </div>
              <p className="text-tribal-cream/70 text-sm">Annual Festivals</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("#history")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <ChevronDown className="text-tribal-cream/80" size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
