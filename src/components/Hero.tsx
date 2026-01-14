import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import decorativeLeaves from "@/assets/decorative-leaves.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const rotatingWords = [
    "customer service",
    "finance & accounting",
    "payroll admin",
    "social media",
    "virtual assistance",
    "back office admin",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen bg-gradient-hero pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-16 md:pt-24">
          {/* Decorative Leaves */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <img src={decorativeLeaves} alt="Decorative leaves" className="w-48 md:w-64 h-auto" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Time is money.</span>
            <br />
            <span className="text-foreground">Save both with our</span>
            <br />
            <span className="inline-block min-w-[280px] md:min-w-[380px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-sage italic inline-block"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span className="text-foreground">offshore talent</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Quickly and seamlessly scale your team with agile, highly customizable solutions that power your growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
              <span className="px-6 py-3 text-white font-medium">Speak With an Expert</span>
              <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                <ArrowRight className="w-4 h-4 text-sage" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Organic Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 50C240 80 480 90 720 70C960 50 1200 30 1440 50V100H0V50Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
