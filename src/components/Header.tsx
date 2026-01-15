import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest >= 50);
  });

  const navLinks = [
    { label: "Roles", href: "#services", hasDropdown: true, isRoute: false },
    { label: "Why NorthOak?", href: "#about", hasDropdown: false, isRoute: false },
    { label: "Pricing", href: "/pricing", hasDropdown: false, isRoute: true },
    { label: "Careers", href: "/careers", hasDropdown: false, isRoute: true },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed top-8 left-0 right-0 z-50 px-9 md:px-10"
    >
      <motion.div
        className="mx-auto h-[4.5rem] flex items-center transition-all duration-300 relative"
        style={{ borderStyle: "solid" }}
        animate={{
          backgroundColor: isScrolled ? "hsl(var(--card) / 0.98)" : "transparent",
          boxShadow: isScrolled
            ? "0 8px 32px -8px hsl(102 44% 51% / 0.15), 0 4px 16px -4px hsl(0 0% 0% / 0.1)"
            : "none",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderRadius: isScrolled ? "1rem" : "0",
          borderColor: isScrolled ? "hsl(var(--border) / 0.5)" : "transparent",
          borderWidth: isScrolled ? "1px" : "0px",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo - animates from center-left to far left edge */}
        <Link to="/" className="absolute left-6">
          <motion.div
            className="flex items-center"
            animate={{
              x: isScrolled ? 0 : "calc(50vw - 50% - 580px)",
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={logo} alt="NorthOak" className="h-7 w-auto object-contain" style={{ imageRendering: "auto" }} />
          </motion.div>
        </Link>

        {/* Desktop Navigation - stays centered */}
        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {navLinks.map((link, index) =>
            link.isRoute ? (
              <Link key={link.label} to={link.href}>
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </motion.span>
              </Link>
            ) : (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium rounded-lg hover:bg-muted/50"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
              </motion.a>
            )
          )}
        </nav>

        {/* CTA Button - animates from center-right to far right edge */}
        <motion.div
          className="hidden lg:block absolute right-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: isScrolled ? 0 : "calc(-50vw + 50% + 580px)",
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Link to="/get-started">
            <Button
              variant="hero"
              size="sm"
              className="rounded-xl px-5 transition-transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-card/98 backdrop-blur-xl rounded-2xl border border-border/50 shadow-hover overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link, index) =>
                link.isRoute ? (
                  <Link key={link.label} to={link.href} onClick={() => setIsMenuOpen(false)}>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      className="flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                    >
                      <span className="font-medium">{link.label}</span>
                    </motion.span>
                  </Link>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-medium">{link.label}</span>
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
                  </motion.a>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.2 }}
              >
                <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="mt-3 w-full rounded-xl">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
