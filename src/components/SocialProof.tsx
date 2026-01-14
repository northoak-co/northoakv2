import { motion } from "framer-motion";

// Import your logo images here - add them to src/assets/logos/ folder
// Example:
// import logo1 from "@/assets/logos/company1.png";
// import logo2 from "@/assets/logos/company2.png";

// Placeholder logos - replace with your actual imported logos
const logos = [
  { name: "Company 1", src: "" },
  { name: "Company 2", src: "" },
  { name: "Company 3", src: "" },
  { name: "Company 4", src: "" },
  { name: "Company 5", src: "" },
  { name: "Company 6", src: "" },
];

const SocialProof = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-8 md:py-12 bg-background overflow-hidden">
      <div className="px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Trust text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              Trusted by <span className="text-foreground font-semibold">200+</span> customers
              <br />
              <span className="text-foreground/80">to fuel growth</span>
            </p>
          </motion.div>

          {/* Logo carousel container */}
          <div className="relative flex-1 w-full min-w-0 overflow-hidden">
            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling logos */}
            <div className="flex w-max">
              <motion.div
                className="flex items-center gap-12 md:gap-16"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex items-center justify-center shrink-0 h-10 md:h-12"
                  >
                    {logo.src ? (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                      />
                    ) : (
                      // Placeholder for logos - shows company name
                      <div className="h-8 md:h-10 px-6 flex items-center justify-center bg-muted/50 rounded-lg border border-border/50">
                        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                          {logo.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
