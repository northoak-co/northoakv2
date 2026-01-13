import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-forest text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="NorthOak" className="h-8 brightness-0 invert" />
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-sage transition-colors">About</a>
            <a href="#services" className="hover:text-sage transition-colors">Services</a>
            <a href="#process" className="hover:text-sage transition-colors">Process</a>
            <a href="#careers" className="hover:text-sage transition-colors">Careers</a>
            <a href="#contact" className="hover:text-sage transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm opacity-70">
            © {currentYear} NorthOak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
