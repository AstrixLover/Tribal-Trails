import { Button } from "@/components/ui/button";
import { MapPin, Mountain, TreePine, Users } from "lucide-react";
import maharashtraImage from "@/assets/maharashtra-landscape.jpg";
import odishaImage from "@/assets/odisha-landscape.jpg";

const destinations = [
  {
    region: "Maharashtra",
    title: "Satpura & Sahyadri Ranges",
    image: maharashtraImage,
    description:
      "Home to the Warli, Bhil, Gond, and Koli tribes. Explore dense teak forests, ancient cave paintings, and villages where Warli art was born.",
    tribes: ["Warli", "Bhil", "Gond", "Koli", "Mahadev Koli"],
    highlights: [
      "Warli Art Villages",
      "Tarpa Dance Performances",
      "Satpura Tiger Reserve",
      "Bhandardara Lake Region",
    ],
    color: "tribal-terracotta",
  },
  {
    region: "Odisha",
    title: "Koraput & Niyamgiri Hills",
    image: odishaImage,
    description:
      "Discover the Dongria Kondh, Bonda, and Saora tribes in some of India's most pristine landscapes. Sacred mountains, terraced farms, and living traditions.",
    tribes: ["Dongria Kondh", "Bonda", "Saora", "Gadaba", "Paraja"],
    highlights: [
      "Niyamgiri Sacred Hills",
      "Bonda Tribal Markets",
      "Saora Mural Villages",
      "Koraput Coffee Plantations",
    ],
    color: "tribal-forest",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 lg:py-32 bg-tribal-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-tribal-terracotta/10 text-tribal-terracotta text-sm font-medium mb-4">
            Plan Your Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Two States, Infinite{" "}
            <span className="text-tribal-terracotta">Stories</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            Each destination offers unique encounters with communities that have 
            preserved their heritage against all odds. Choose your adventure.
          </p>
        </div>

        {/* Destinations */}
        <div className="space-y-16">
          {destinations.map((destination, index) => (
            <div
              key={destination.region}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                  <img
                    src={destination.image}
                    alt={`${destination.region} tribal landscape`}
                    className="w-full h-[300px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tribal-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-tribal-cream">
                      <MapPin size={16} />
                      <span className="font-medium">{destination.region}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${destination.color}/10 text-${destination.color} text-sm font-medium mb-4`}
                >
                  <Mountain size={14} />
                  {destination.region}
                </div>
                
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {destination.title}
                </h3>
                
                <p className="text-muted-foreground font-serif leading-relaxed mb-6">
                  {destination.description}
                </p>

                {/* Tribes */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Users size={16} />
                    Indigenous Communities
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.tribes.map((tribe) => (
                      <span
                        key={tribe}
                        className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                      >
                        {tribe}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <TreePine size={16} />
                    Must-Experience
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {destination.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-${destination.color}`}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="tribal" size="lg">
                  Explore {destination.region}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
