import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Atlassian", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/67116cfa1524cef036bbe6fd_2560px-Atlassian-logo.svg.png" },
  { name: "Freshdesk", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/67116db612929faba7c2fdc1_freshdesk.png" },
  { name: "Gorgias", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328db6c1a551c65e5c72_Gorgias-image.png" },
  { name: "Hubspot", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328c484599c48c523f3f_images.png" },
  { name: "Intercom", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328cfcd56570fac15248_intercom-vector-logo-2022.png" },
  { name: "Make", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/67116cfb6962a3648854dee6_make.jpeg" },
  { name: "Monday", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328c9b28af181a3b2da4_Monday_logo.svg.png" },
  { name: "Pipedrive", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328ca23640b475d7c165_Pipedrive_Logo_gray.png" },
  { name: "QuickBooks", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328c686f93c955b34c91_Intuit_QuickBooks_logo.png" },
  { name: "Zendesk", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328ca195c84b1f6a82d7_Zendesk-Logo.png" },
  { name: "Zapier", logo: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6711328cb4d3d4f4a5a1e101_Zapier-Logo.png" },
];

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const orb1X = useTransform(smoothMouseX, [0, 1], [-18, 18]);
  const orb1Y = useTransform(smoothMouseY, [0, 1], [-18, 18]);
  const orb2X = useTransform(smoothMouseX, [0, 1], [14, -14]);
  const orb2Y = useTransform(smoothMouseY, [0, 1], [16, -16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="py-8 bg-background">
      <div className="mx-auto px-3 md:px-4">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
            boxShadow: "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
          }}
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 44% 51% / 0.22) 0%, transparent 70%)",
                x: orb1X,
                y: orb1Y,
              }}
            />
            <motion.div
              className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 40% 55% / 0.18) 0%, transparent 70%)",
                x: orb2X,
                y: orb2Y,
              }}
            />
          </div>

          <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="container mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
                >
                  Our Partners
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                  Work with the best
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground max-w-xl mx-auto"
                >
                  We partner with the best in the industry, integrating with everything you're already using.
                </motion.p>
              </div>

              {/* Logo Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
              >
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center w-28 h-12 md:w-36 md:h-14"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
