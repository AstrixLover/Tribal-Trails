import tribalFood from "@/assets/tribal-food.jpg";
import { Leaf, Heart, Sparkles } from "lucide-react";

const dishes = [
  {
    name: "Handia",
    type: "Traditional Beverage",
    description: "Fermented rice beer, a staple at festivals and ceremonies. Each family has its own secret recipe passed down through generations.",
    region: "Odisha",
  },
  {
    name: "Mahua",
    type: "Spirit & Food",
    description: "The Mahua flower is used to make liquor, sweets, and even cooking oil. It's called the 'Tree of Life' by many tribes.",
    region: "Maharashtra & Odisha",
  },
  {
    name: "Bamboo Shoot Curry",
    type: "Main Dish",
    description: "Fresh bamboo shoots slow-cooked with local spices, a delicacy that showcases the forest-to-table tradition.",
    region: "Both Regions",
  },
  {
    name: "Red Ant Chutney",
    type: "Specialty",
    description: "Known locally as 'Chapda', this protein-rich chutney made from red ants is a prized delicacy in tribal Odisha.",
    region: "Odisha",
  },
  {
    name: "Pej",
    type: "Daily Staple",
    description: "A nutritious rice gruel often consumed for breakfast, sometimes fermented overnight for extra health benefits.",
    region: "Maharashtra",
  },
  {
    name: "Mandia Roti",
    type: "Bread",
    description: "Flatbread made from finger millet (Ragi), a nutritious grain that has sustained tribal communities for millennia.",
    region: "Odisha",
  },
];

const CuisineSection = () => {
  return (
    <section id="cuisine" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-tribal-earth/10 text-tribal-earth text-sm font-medium mb-4">
            Forest to Table
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Flavors of the{" "}
            <span className="text-tribal-earth">Wild</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            Tribal cuisine is nature's gift — organic, seasonal, and bursting with 
            flavors unknown to city palates. Every meal tells a story of the forest.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Food Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={tribalFood}
                alt="Traditional tribal food spread"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-elevated max-w-[200px] hidden lg:block">
              <div className="flex items-center gap-2 text-tribal-forest mb-2">
                <Leaf size={18} />
                <span className="font-medium text-sm">100% Organic</span>
              </div>
              <p className="text-xs text-muted-foreground">
                All ingredients sourced from forests and traditional farms
              </p>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-elevated max-w-[180px] hidden lg:block">
              <div className="flex items-center gap-2 text-tribal-terracotta mb-2">
                <Heart size={18} />
                <span className="font-medium text-sm">Healing Foods</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Many dishes have medicinal properties
              </p>
            </div>
          </div>

          {/* Dishes List */}
          <div className="space-y-4">
            {dishes.map((dish, index) => (
              <div
                key={dish.name}
                className="bg-card p-5 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-tribal-earth transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">{dish.type}</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    {dish.region}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </div>
            ))}
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
              <Sparkles size={16} className="text-tribal-ochre" />
              <span className="font-serif italic">
                "Food is not just sustenance — it's our connection to the forest spirits."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;
