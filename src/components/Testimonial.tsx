import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 md:py-28 bg-sage-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage font-medium text-sm tracking-wide uppercase mb-8 block"
          >
            Client Testimonials
          </motion.span>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-sage/30 mx-auto mb-6" />
            
            {/* Quote */}
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
              "Everything NorthOak has put together for us is thoughtful, practical, and clear - it really comes through in all the high quality touch points I've had with the team, and many others have expressed the same."
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6719b8ddbe9ad00b35d783a3_1715108275589-modified.png"
                alt="Donnie Yee"
                className="w-14 h-14 rounded-full object-cover border-2 border-sage"
              />
              <div className="text-left">
                <p className="font-display font-semibold text-foreground">
                  Donnie Yee
                </p>
                <p className="text-muted-foreground text-sm">
                  Head of Operations, Prequel
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
