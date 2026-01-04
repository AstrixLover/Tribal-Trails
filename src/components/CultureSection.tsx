import tribalFestival from "@/assets/tribal-festival.jpg";
import { Music, Palette, Users, Sparkles } from "lucide-react";

const cultureAspects = [
  {
    icon: Music,
    title: "Music & Dance",
    description:
      "Rhythmic drums, bamboo flutes, and feet that tell stories. From Odisha's Dhemsa to Maharashtra's Tarpa, every beat connects to the earth.",
  },
  {
    icon: Palette,
    title: "Art & Craft",
    description:
      "Warli paintings, Dokra metalwork, and Saura murals — each stroke carries generations of wisdom and spiritual meaning.",
  },
  {
    icon: Users,
    title: "Community Living",
    description:
      "In tribal villages, decisions are made together. Youth dormitories teach tradition, and festivals unite scattered families.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Beliefs",
    description:
      "Nature worship, ancestor veneration, and sacred groves. Every ritual honors the delicate balance between human and nature.",
  },
];

const CultureSection = () => {
  return (
    <section id="culture" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-tribal-forest/10 text-tribal-forest text-sm font-medium mb-4">
            Living Traditions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Culture That{" "}
            <span className="text-tribal-forest">Breathes Life</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            Tribal culture isn't found in museums — it's lived, celebrated, and 
            passed down through songs sung at dusk and dances under the stars.
          </p>
        </div>

        {/* Culture Aspects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cultureAspects.map((aspect, index) => (
            <div
              key={aspect.title}
              className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-tribal-forest/10 flex items-center justify-center mb-4 group-hover:bg-tribal-forest group-hover:text-tribal-cream transition-colors">
                <aspect.icon className="text-tribal-forest group-hover:text-tribal-cream" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {aspect.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {aspect.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src={tribalFestival}
            alt="Vibrant tribal festival celebration"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tribal-charcoal/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-tribal-ochre/80 text-tribal-charcoal text-xs font-medium mb-3">
                Featured Festival
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-tribal-cream mb-2">
                The Dance of Fire & Spirit
              </h3>
              <p className="text-tribal-cream/90 font-serif">
                During harvest festivals, tribal dancers perform through the night, 
                their movements telling stories of creation, love, and the eternal 
                cycle of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
