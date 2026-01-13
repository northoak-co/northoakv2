import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Roles", href: "#services", hasDropdown: true },
    { label: "Industries", href: "#industries", hasDropdown: true },
    { label: "Why NorthOak?", href: "#about", hasDropdown: false },
    { label: "Pricing", href: "#pricing", hasDropdown: false },
    { label: "Resources", href: "#resources", hasDropdown: true },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="max-w-7xl mx-auto bg-card/95 backdrop-blur-md rounded-2xl border border-border/50 shadow-card px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="NorthOak" className="h-7" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium rounded-lg hover:bg-muted/50"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4 opacity-60" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="hero" size="sm" className="rounded-xl px-5">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-2 max-w-7xl mx-auto bg-card/95 backdrop-blur-md rounded-2xl border border-border/50 shadow-card overflow-hidden"
        >
          <nav className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-medium">{link.label}</span>
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 opacity-60" />
                )}
              </a>
            ))}
            <Button variant="hero" className="mt-3 rounded-xl">
              Get Started
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
