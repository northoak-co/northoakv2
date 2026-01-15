import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with flexible hours that suit your lifestyle.",
  },
  {
    title: "Growth Opportunities",
    description: "Clear career paths and continuous learning opportunities to help you advance.",
  },
  {
    title: "Competitive Compensation",
    description: "Industry-leading salaries plus performance bonuses and equity options.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs for you and your family.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-background pt-4 pb-8 overflow-hidden">
        <div className="mx-auto px-3 md:px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
              boxShadow:
                "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
            }}
          >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 44% 51% / 0.3) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 40% 55% / 0.25) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
              <div className="max-w-4xl mx-auto text-center">
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-sage/10 rounded-2xl mb-6"
                >
                  <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-sage" />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-sage font-medium text-sm md:text-base uppercase tracking-wide mb-4"
                >
                  Join Our Team
                </motion.p>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                >
                  Build the Future of Work with Us
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                  We're on a mission to transform how businesses operate. Join a team of passionate 
                  individuals dedicated to delivering exceptional virtual staffing solutions.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <a
                    href="https://apply.workable.com/northoak/?lng=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden"
                  >
                    <span className="px-6 py-3 text-white font-medium">
                      View Opportunities
                    </span>
                    <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                      <ArrowRight className="w-4 h-4 text-sage" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-10 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work at NorthOak?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where everyone can thrive and do their best work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;