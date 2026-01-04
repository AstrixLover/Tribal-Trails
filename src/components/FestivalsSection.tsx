import { Calendar, MapPin } from "lucide-react";

const festivals = [
  {
    name: "Tarpa Festival",
    region: "Maharashtra",
    month: "October - November",
    description:
      "The Warli community celebrates the harvest with the haunting melody of the Tarpa, a wind instrument, while performing their iconic circle dances.",
    highlight: "Famous for Warli art displays and traditional dances",
  },
  {
    name: "Parab Festival",
    region: "Odisha",
    month: "Throughout the year",
    description:
      "The Dongria Kondh celebrate nature through Parab — festivals marking sowing, harvesting, and thanksgiving to their mountain god, Niyam Raja.",
    highlight: "Sacred rituals in the Niyamgiri Hills",
  },
  {
    name: "Chaitra Parab",
    region: "Odisha",
    month: "March - April",
    description:
      "A spring festival celebrated by Koraput tribes with ritual hunting, community feasts, and the preparation of traditional rice beer (Handia).",
    highlight: "Ritual hunting and community bonding",
  },
  {
    name: "Bohada Festival",
    region: "Maharashtra",
    month: "February - March",
    description:
      "The Bhil tribe's mask festival where performers wear elaborate wooden masks representing gods, demons, and ancestors in a spectacular display.",
    highlight: "Elaborate wooden mask ceremonies",
  },
  {
    name: "Dhemsa Dance Festival",
    region: "Odisha",
    month: "Various occasions",
    description:
      "The Bonda tribe's celebratory dance featuring women in traditional beaded attire, moving in synchronized patterns to drum beats.",
    highlight: "Distinctive Bonda tribal attire",
  },
  {
    name: "Pola Festival",
    region: "Maharashtra",
    month: "August - September",
    description:
      "Tribal farmers honor their bulls with decorations and processions, celebrating the bond between humans and the animals that help cultivate their lands.",
    highlight: "Decorated bulls and agricultural heritage",
  },
];

const FestivalsSection = () => {
  return (
    <section id="festivals" className="py-20 lg:py-32 bg-tribal-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-tribal-ochre/10 text-tribal-ochre text-sm font-medium mb-4">
            Celebrate With Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Festivals That Move the{" "}
            <span className="text-tribal-ochre">Soul</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            Every festival is an invitation — to dance, to feast, to witness 
            rituals unchanged for centuries. Plan your visit around these 
            magical celebrations.
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((festival, index) => (
            <div
              key={festival.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      festival.region === "Maharashtra"
                        ? "bg-tribal-terracotta/10 text-tribal-terracotta"
                        : "bg-tribal-forest/10 text-tribal-forest"
                    }`}
                  >
                    {festival.region}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-tribal-terracotta transition-colors">
                  {festival.name}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{festival.month}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {festival.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-medium text-tribal-ochre">
                    ✨ {festival.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalsSection;
