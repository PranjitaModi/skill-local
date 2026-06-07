import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Star, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]"
        />

        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-secondary-foreground/10 text-secondary-foreground text-xs font-semibold mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              #1 Local Service Marketplace
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground"
            >
              Find the Perfect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative">
                Local Expert
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Connect with trusted professionals for home repairs, tutoring,
              beauty services, and more. Quality services, right at your
              doorstep.
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              variants={itemVariants}
              className="relative max-w-xl mb-10"
            >
              <div className="flex items-center p-2 rounded-2xl bg-white/80 dark:bg-card/80 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="pl-4 text-muted-foreground">
                  <Search size={22} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="What service do you need today?"
                  className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/70 font-medium"
                />

                <div className="hidden md:flex h-8 w-[1px] bg-border mx-2"></div>
                <div className="min-w-[140px] hidden md:flex items-center gap-2 px-4 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                  <MapPin size={18} />
                  <span>New York, NY</span>
                </div>
                <Button
                  className="rounded-xl px-6 h-12 shadow-md hover:shadow-lg transition-all"
                  size="lg"
                >
                  Search
                </Button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground pl-4">
                Popular:{" "}
                <span className="text-foreground hover:underline cursor-pointer">
                  Plumbing
                </span>
                ,{" "}
                <span className="text-foreground hover:underline cursor-pointer">
                  Cleaning
                </span>
                ,{" "}
                <span className="text-foreground hover:underline cursor-pointer">
                  Yoga
                </span>
              </p>
            </motion.div>

            {/* Stats / Trust Signals */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 border-t border-border/50 pt-8"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-foreground font-bold text-2xl">
                  <span>5k+</span>
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Active Providers
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-foreground font-bold text-2xl">
                  <span>4.9</span>
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Average Rating
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-foreground font-bold text-2xl">
                  <span>100%</span>
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Verified Experts
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image / Interaction Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="SkillKart Community"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 bg-card p-4 rounded-xl shadow-xl border border-border/50 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Verified</p>
                    <p className="text-xs text-muted-foreground">
                      Professionals
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 bg-card p-4 rounded-xl shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-background bg-gray-200"
                      />
                    ))}
                  </div>
                  <div className="text-xs font-medium">
                    <span className="text-primary font-bold">2k+</span> booked
                    today
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decor for Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10 transform scale-110" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
