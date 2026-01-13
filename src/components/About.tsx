import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-sage-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-sage/20 shadow-soft">
              <img
                src="https://cdn.prod.website-files.com/65d631f6892f8b862233316f/670fd95f025fb17621766bc7_workroom_cropped.webp"
                alt="NorthOak team working"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
              Our Mission
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              For businesses with talent gaps and a need for scale
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                NorthOak is a leading Operations Outsourcing partner, specializing in high-growth technology companies with 1-200 team members. Our customer-first philosophy and ownership mentality are central to our approach.
              </p>
              <p>
                We are tired of agencies who promise the world but fail to deliver after the contracts are signed. Instead, we are radically candid about what we can and cannot do, and we focus on continually "earning the right" to advise our clients.
              </p>
              <p className="font-medium text-foreground">
                We only win if you win, so you can rest assured that your ROI will be positive.
              </p>
            </div>
            <Button variant="hero" size="lg" className="gap-2">
              Find out more
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
