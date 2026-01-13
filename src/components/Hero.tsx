import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const services = [
    { label: "CRM Management", delay: 0 },
    { label: "Customer Support", delay: 0.1 },
    { label: "HR Admin", delay: 0.2 },
    { label: "Process Automation", delay: 0.3 },
    { label: "Finance & Accounting", delay: 0.4 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-16 md:pt-24">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-sage">Operations expertise</span>
            <span className="text-foreground"> to unlock your team's potential</span>
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

          {/* Email Input & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-lg mx-auto mb-4"
          >
            <div className="flex items-center bg-card border border-border rounded-full p-1.5 shadow-card">
              <Input
                type="email"
                placeholder="What's your work email?"
                className="flex-1 h-11 px-5 bg-transparent border-0 text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="hero" size="lg" className="rounded-full px-6 whitespace-nowrap">
                Get started for free
              </Button>
            </div>
          </motion.div>
          
          {/* Consent Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs text-muted-foreground mb-12"
          >
            By submitting your email, you agree to opt in to marketing emails.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-xl mx-auto h-px bg-border mb-12"
          />

          {/* Solutions Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm font-medium text-muted-foreground mb-8"
          >
            Which solutions are you looking for?
          </motion.p>

          {/* Service Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + service.delay }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-sage hover:bg-sage-light transition-all duration-200 shadow-card"
              >
                {service.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Organic Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50C240 80 480 90 720 70C960 50 1200 30 1440 50V100H0V50Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
