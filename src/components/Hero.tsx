import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const rotatingWords = [
    "customer service",
    "finance & accounting",
    "payroll admin",
    "social media management",
    "video editing",
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
    <section className="relative min-h-screen bg-background pt-4 pb-16 overflow-hidden">
      {/* Soft Hero Box */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/20 bg-gradient-to-b from-sage/5 via-sage/[0.02] to-transparent overflow-hidden"
          style={{
            boxShadow: "0 4px 40px -12px hsl(var(--sage) / 0.15), inset 0 1px 0 0 hsl(var(--sage) / 0.1)"
          }}
        >
          {/* Background Pattern inside the box */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-10 right-10 w-72 h-72 bg-sage/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32">
            <div className="max-w-4xl mx-auto text-center pt-8 md:pt-12">
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="text-foreground">Time is money.</span>
                <br />
                <span className="text-foreground">Save both by offshoring your</span>
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
                className="flex justify-center"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
