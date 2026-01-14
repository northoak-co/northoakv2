import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for mouse following
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Transform mouse position to movement ranges for orbs
  const orb1X = useTransform(smoothMouseX, [0, 1], [-30, 30]);
  const orb1Y = useTransform(smoothMouseY, [0, 1], [-30, 30]);
  const orb2X = useTransform(smoothMouseX, [0, 1], [20, -20]);
  const orb2Y = useTransform(smoothMouseY, [0, 1], [25, -25]);
  const orb3X = useTransform(smoothMouseX, [0, 1], [-15, 15]);
  const orb3Y = useTransform(smoothMouseY, [0, 1], [-20, 20]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="relative min-h-screen bg-background pt-4 pb-16 overflow-hidden">
      {/* Soft Hero Box */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
            boxShadow: "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)"
          }}
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large primary orb - top right */}
            <motion.div 
              className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 44% 51% / 0.15) 0%, transparent 70%)",
                x: orb1X,
                y: orb1Y,
              }}
            />
            
            {/* Secondary orb - bottom left */}
            <motion.div 
              className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 40% 55% / 0.12) 0%, transparent 70%)",
                x: orb2X,
                y: orb2Y,
              }}
            />
            
            {/* Center accent orb */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 35% 60% / 0.08) 0%, transparent 60%)",
                x: orb3X,
                y: orb3Y,
              }}
            />
            
            {/* Subtle floating particles */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full blur-2xl"
              style={{
                background: "hsl(102 44% 51% / 0.1)",
                x: useTransform(smoothMouseX, [0, 1], [10, -10]),
                y: useTransform(smoothMouseY, [0, 1], [15, -15]),
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full blur-2xl"
              style={{
                background: "hsl(102 44% 51% / 0.08)",
                x: useTransform(smoothMouseX, [0, 1], [-8, 8]),
                y: useTransform(smoothMouseY, [0, 1], [-12, 12]),
              }}
            />
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