import { useState } from "react";
import { Menu, X, Search, Wrench, Sparkles, Laptop, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find Services", href: "#services" },
  { label: "Categories", href: "#categories" },
  { label: "AI Features", href: "#ai-features" },
  { label: "Become a Provider", href: "#providers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-sm">
              SK
            </span>
          </div>
          <span className="font-bold text-xl text-foreground">
            Skill<span className="text-primary">Kart</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.label === "Find Services") {
              return (
                <Popover key={link.label}>
                  <PopoverTrigger asChild>
                    <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                      {link.label}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-80 p-4 mt-2 border-border/50 shadow-xl"
                    align="start"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search services..."
                          className="pl-9 h-9 border-border/50 focus-visible:ring-primary/20"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                          Recommendations
                        </p>
                        <div className="flex flex-col gap-1">
                          <button className="flex items-center gap-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 p-2 rounded-md transition-colors text-left">
                            <div className="p-1.5 bg-primary/10 rounded-md text-primary">
                              <Wrench className="h-4 w-4" />
                            </div>{" "}
                            Home Repair
                          </button>
                          <button className="flex items-center gap-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 p-2 rounded-md transition-colors text-left">
                            <div className="p-1.5 bg-accent/10 rounded-md text-accent">
                              <Sparkles className="h-4 w-4" />
                            </div>{" "}
                            Cleaning
                          </button>
                          <button className="flex items-center gap-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 p-2 rounded-md transition-colors text-left">
                            <div className="p-1.5 bg-blue-500/10 rounded-md text-blue-500">
                              <Laptop className="h-4 w-4" />
                            </div>{" "}
                            Tech Support
                          </button>
                          <button className="flex items-center gap-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 p-2 rounded-md transition-colors text-left">
                            <div className="p-1.5 bg-green-500/10 rounded-md text-green-500">
                              <Heart className="h-4 w-4" />
                            </div>{" "}
                            Wellness
                          </button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Log In
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => {
                if (link.label === "Find Services") {
                  return (
                    <div
                      key={link.label}
                      className="flex flex-col gap-3 py-3 border-b border-border/30"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {link.label}
                      </span>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search for services..."
                          className="pl-9 h-9 bg-secondary/50 border-none focus-visible:ring-1"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="text-[11px] font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20">
                          Plumbing
                        </span>
                        <span className="text-[11px] font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full border border-accent/20">
                          Cleaning
                        </span>
                        <span className="text-[11px] font-medium bg-blue-500/10 text-blue-500 px-2.5 py-1 rounded-full border border-blue-500/20">
                          Tech
                        </span>
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  Log In
                </Button>
                <Button size="sm" className="flex-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
