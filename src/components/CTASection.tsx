import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-primary p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
              Join thousands of local service providers and customers already
              building trust-driven connections on SkillKart.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                variant="secondary"
              >
                Find Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Join as Provider
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
