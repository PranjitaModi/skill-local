import { motion } from "framer-motion";
import { Star, MapPin, BadgeCheck, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const providers = [
  {
    name: "Anita Sharma",
    skill: "Tailoring & Stitching",
    rating: 4.9,
    reviews: 128,
    distance: "1.2 km",
    price: "₹200 – ₹800",
    reliability: 96,
    verified: true,
    badge: "Best Match",
    avatar: "AS",
  },
  {
    name: "Rajesh Kumar",
    skill: "AC & Appliance Repair",
    rating: 4.7,
    reviews: 89,
    distance: "2.5 km",
    price: "₹300 – ₹1,200",
    reliability: 92,
    verified: true,
    badge: "Popular",
    avatar: "RK",
  },
  {
    name: "Meena Devi",
    skill: "Homemade Food & Tiffin",
    rating: 4.8,
    reviews: 215,
    distance: "0.8 km",
    price: "₹50 – ₹250",
    reliability: 98,
    verified: true,
    badge: "Top Rated",
    avatar: "MD",
  },
  {
    name: "Sunil Patel",
    skill: "Home Cleaning",
    rating: 4.6,
    reviews: 67,
    distance: "3.1 km",
    price: "₹150 – ₹500",
    reliability: 89,
    verified: false,
    badge: null,
    avatar: "SP",
  },
];

const ProviderCard = ({ provider, index }: { provider: typeof providers[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="bg-card rounded-2xl border border-border card-elevated p-5 flex flex-col"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-primary font-bold text-sm">{provider.avatar}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold truncate">{provider.name}</h3>
          {provider.verified && (
            <BadgeCheck className="text-primary shrink-0" size={16} />
          )}
        </div>
        <p className="text-sm text-muted-foreground">{provider.skill}</p>
      </div>
      {provider.badge && (
        <span className="text-[10px] font-bold uppercase bg-accent/15 text-accent px-2 py-0.5 rounded-full whitespace-nowrap">
          {provider.badge}
        </span>
      )}
    </div>

    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Star className="text-accent" size={14} />
        <span className="font-medium text-foreground">{provider.rating}</span>
        <span>({provider.reviews})</span>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <MapPin size={14} />
        <span>{provider.distance}</span>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Clock size={14} />
        <span>{provider.price}</span>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <TrendingUp size={14} />
        <span className="font-medium text-foreground">{provider.reliability}%</span>
        <span>reliable</span>
      </div>
    </div>

    <Button variant="outline" className="mt-auto w-full" size="sm">
      View Profile
    </Button>
  </motion.div>
);

const ProvidersSection = () => {
  return (
    <section id="providers" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Recommended for You
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Top-Rated Providers Nearby
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            AI-curated picks based on your location, preferences, and community
            trust signals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((p, i) => (
            <ProviderCard key={p.name} provider={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
