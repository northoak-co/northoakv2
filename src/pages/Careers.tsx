import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      <section className="pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Build the Future of Work with Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We're on a mission to transform how businesses operate. Join a team of passionate 
              individuals dedicated to delivering exceptional virtual staffing solutions.
            </p>
            <a
              href="https://apply.workable.com/northoak/?lng=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden"
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