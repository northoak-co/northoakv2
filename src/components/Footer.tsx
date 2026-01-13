import { motion } from "framer-motion";

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
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-sage rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-primary-foreground"
              >
                <path
                  d="M12 3L4 9v12h16V9l-8-6z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="font-display font-bold text-xl">northoak</span>
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
