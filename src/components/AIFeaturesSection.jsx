import { motion } from "framer-motion";
import { Brain, MapPin, TrendingUp, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Recommendations",
    description:
      "AI analyzes your preferences, location, and history to surface the best service providers nearby.",
    badge: "AI-Powered",
  },
  {
    icon: Zap,
    title: "Intelligent Matching",
    description:
      "Matches based on location, ratings, availability, and your preferences for a perfect fit every time.",
    badge: "Best Match",
  },
  {
    icon: TrendingUp,
    title: "Predictive Suggestions",
    description:
      "Smart search that anticipates what you need before you finish typing — instant, relevant results.",
    badge: "Smart Search",
  },
  {
    icon: MapPin,
    title: "Hyperlocal Intelligence",
    description:
      "Distance-based ranking and real-time availability ensure you find someone close, fast.",
    badge: "Nearby",
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description:
      "AI-driven reliability scores, response rates, and completion metrics you can trust.",
    badge: "Verified",
  },
];

const AIFeaturesSection = () => {
  return (
    <section id="ai-features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Powered by AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Intelligence That Works for You
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our AI engine makes service discovery effortless, trustworthy, and
            personalized.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative bg-card rounded-2xl p-6 border border-border card-elevated group"
            >
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {feat.badge}
              </span>
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feat.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
