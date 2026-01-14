import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, SlidersVertical, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Clock,
    number: "01",
    title: "Free consultation",
    description: "Start your journey with a complimentary call to dive into your current situation and possible solutions. Tell us what's blocking you from growing faster.",
  },
  {
    icon: SlidersVertical,
    number: "02",
    title: "Build a bespoke package",
    description: "Tailor your package to fit your unique needs. Choose from various services and let us create a customized solution that aligns with your objectives.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Get the job done!",
    description: "Our dedicated team will work closely with your organization to implement strategies, optimize processes, and ensure your business thrives.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
          >
            How it Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Step-by-step towards operational excellence
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/get-started">
              <Button variant="hero" size="lg" className="gap-2">
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connection Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto bg-sage-light rounded-2xl flex items-center justify-center mb-6 relative">
                  <step.icon className="w-8 h-8 text-sage" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-sage rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
