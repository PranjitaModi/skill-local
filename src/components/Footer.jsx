const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-extrabold text-xs">
                  SK
                </span>
              </div>
              <span className="font-bold text-lg">
                Skill<span className="text-primary">Kart</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering local skills with AI-driven discovery. Building
              stronger communities, one service at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">For Customers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Find Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trust & Safety
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">For Providers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Join as Provider
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Provider Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 SkillKart. All rights reserved. Built with ❤️ for local
          communities.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
