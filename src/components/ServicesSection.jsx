import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Wrench,
  UtensilsCrossed,
  Home,
  Palette,
  GraduationCap,
  Leaf,
} from "lucide-react";

const categories = [
  { icon: Scissors, label: "Tailoring & Stitching", count: "120+ Providers" },
  { icon: Sparkles, label: "Beauty & Personal Care", count: "95+ Providers" },
  { icon: Wrench, label: "Repair & Fixing", count: "80+ Providers" },
  { icon: UtensilsCrossed, label: "Homemade Food", count: "150+ Providers" },
  { icon: Home, label: "Household Help", count: "200+ Providers" },
  { icon: Palette, label: "Local Crafts", count: "60+ Providers" },
  { icon: GraduationCap, label: "Education & Skills", count: "75+ Providers" },
  { icon: Leaf, label: "Agriculture & Rural", count: "45+ Providers" },
];

const ServicesSection = () => {
  return (
    <section id="categories" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Browse Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Services Built Around You
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover trusted local service providers across categories that
            matter to your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-xl p-6 card-elevated cursor-pointer border border-border hover:border-primary/30 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-sm mb-1">{cat.label}</h3>
              <p className="text-xs text-muted-foreground">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
