import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
              🚀 AI-Powered Local Marketplace
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Empowering Local Skills with{" "}
              <span className="text-gradient">AI-Driven Discovery</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              SkillKart connects local service providers, home-based workers, and
              customers through intelligent matching, hyperlocal search, and
              trust-driven interactions.
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-card border border-border card-elevated max-w-md mb-6">
              <Search className="ml-2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder='Try "tailor near me" or "home food"'
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2"
              />
              <Button size="sm">Search</Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg">Find Services</Button>
              <Button size="lg" variant="outline">
                Join as Provider
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="font-bold text-foreground">5,000+</span> Providers
              </span>
              <span className="flex items-center gap-1">
                <span className="font-bold text-foreground">50+</span> Services
              </span>
              <span className="flex items-center gap-1">
                <span className="font-bold text-foreground">4.8★</span> Avg Rating
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroImage}
              alt="SkillKart community illustration"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
