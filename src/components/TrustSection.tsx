import { motion } from "framer-motion";
import { BadgeCheck, Star, ShieldCheck, Activity } from "lucide-react";

const signals = [
  {
    icon: BadgeCheck,
    title: "Verified Providers",
    description: "Identity and skill verification through our onboarding process.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description: "Real feedback from real customers to guide your choice.",
  },
  {
    icon: Activity,
    title: "Reliability Score",
    description: "AI-calculated metric based on response rate, completion, and consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Transparent",
    description: "Clear pricing, service guarantees, and dispute resolution.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Trust & Safety
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Built on Trust, Backed by AI
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every interaction on SkillKart is designed to be safe, transparent,
            and trustworthy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
