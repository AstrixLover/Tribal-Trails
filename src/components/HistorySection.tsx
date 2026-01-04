import warliArt from "@/assets/warli-art.jpg";
import tribalElder from "@/assets/tribal-elder.jpg";

const HistorySection = () => {
  return (
    <section id="history" className="py-20 lg:py-32 bg-tribal-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-tribal-terracotta/10 text-tribal-terracotta text-sm font-medium mb-4">
            Our Ancient Roots
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Untold History of{" "}
            <span className="text-tribal-terracotta">India's First People</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            Long before empires rose and fell, the Adivasi communities lived in 
            harmony with the forests, rivers, and mountains — guardians of knowledge 
            that predates written history.
          </p>
        </div>

        {/* Pre-Dikus Era */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tribal-forest/10 text-tribal-forest text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-tribal-forest"></span>
              Pre-Dikus Era
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Life Before the Outsiders
            </h3>
            <div className="space-y-4 text-muted-foreground font-serif leading-relaxed">
              <p>
                <strong className="text-foreground">"Diku"</strong> — a term meaning 
                "outsider" in several tribal languages — marks the divide between two 
                worlds. Before the Dikus arrived, tribal communities thrived as 
                self-governing societies with their own laws, beliefs, and economies.
              </p>
              <p>
                The forests were sacred, not resources. Rivers held spirits, not just 
                water. Every hill had a story, every tree a purpose. The Gonds, Bhils, 
                Santhals, and Oraons lived by a rhythm set by nature itself.
              </p>
              <p>
                They practiced sustainable agriculture, knew medicinal herbs unknown 
                to modern science, and governed through councils of elders where every 
                voice mattered — democracy in its purest form.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={warliArt}
                alt="Traditional Warli Art depicting tribal life"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-tribal-charcoal/90 to-transparent">
                <p className="text-tribal-cream text-sm font-serif">
                  Warli Art — Ancient visual storytelling from Maharashtra tribes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Post-Dikus Era */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={tribalElder}
                alt="Tribal elder preserving ancient traditions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-tribal-charcoal/90 to-transparent">
                <p className="text-tribal-cream text-sm font-serif">
                  Wisdom Keepers — Elders preserving centuries of knowledge
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tribal-terracotta/10 text-tribal-terracotta text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-tribal-terracotta"></span>
              Post-Dikus Era
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Resilience Through Change
            </h3>
            <div className="space-y-4 text-muted-foreground font-serif leading-relaxed">
              <p>
                Colonial rule brought disruption — forests became "reserved," 
                traditional lands were seized, and ancient rights were denied. 
                The tribal communities faced exploitation, displacement, and 
                cultural suppression.
              </p>
              <p>
                Yet they resisted. The Santhal Rebellion of 1855, Birsa Munda's 
                uprising, and countless local movements showed that the spirit 
                of the Adivasi could not be broken.
              </p>
              <p>
                Today, while challenges persist, there's a renaissance. Young 
                tribals are reclaiming their heritage, blending ancient wisdom 
                with modern advocacy. Their art sells globally, their movements 
                protect forests, and their stories are finally being heard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
