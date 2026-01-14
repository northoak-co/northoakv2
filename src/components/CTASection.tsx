import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.png";

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    workEmail: "",
    companyName: "",
    companyUrl: "",
    companySize: "",
    hearAbout: "",
  });

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const orb1X = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const orb1Y = useTransform(smoothMouseY, [0, 1], [-20, 20]);
  const orb2X = useTransform(smoothMouseX, [0, 1], [15, -15]);
  const orb2Y = useTransform(smoothMouseY, [0, 1], [18, -18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative bg-background py-8 overflow-hidden">
      <div className="mx-auto px-3 md:px-4 relative z-10">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
            boxShadow: "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
          }}
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 44% 51% / 0.25) 0%, transparent 70%)",
                x: orb1X,
                y: orb1Y,
              }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, hsl(102 40% 55% / 0.2) 0%, transparent 70%)",
                x: orb2X,
                y: orb2Y,
              }}
            />
          </div>

          <div className="relative z-10 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left">
                {/* Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center justify-center lg:justify-start gap-3 mb-8"
                >
                  <span className="inline-flex items-center px-4 py-2 bg-sage text-white text-sm font-medium rounded-full">
                    Your Team
                  </span>
                  <span className="text-muted-foreground text-lg">+</span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border text-foreground text-sm font-medium rounded-full shadow-sm">
                    <img src={logoImg} alt="NorthOak" className="w-5 h-5 object-contain" />
                    NorthOak
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
                >
                  Ready to scale your team with specialized global talent?
                </motion.h2>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg text-muted-foreground"
                >
                  Book an intro call to learn more.
                </motion.p>

                {/* Decorative Arrow - hidden on mobile */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="hidden lg:block absolute right-[48%] top-1/2 -translate-y-1/2"
                >
                  <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-sage">
                    <path
                      d="M5 5C20 5 50 5 60 25C70 45 75 55 75 55"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M70 45L75 55L65 52"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Right Side - Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border/50">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-6">
                    Book a 25-minute intro call
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Work Email<span className="text-sage">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="name@company-email.com"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Company name<span className="text-sage">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Company URL<span className="text-sage">*</span>
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.companyUrl}
                          onChange={(e) => setFormData({ ...formData, companyUrl: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Company Size<span className="text-sage">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={formData.companySize}
                            onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors cursor-pointer"
                          >
                            <option value="">Please Select</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        How did you hear about us?
                      </label>
                      <div className="relative">
                        <select
                          value={formData.hearAbout}
                          onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors cursor-pointer"
                        >
                          <option value="">Please Select</option>
                          <option value="google">Google Search</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="referral">Referral</option>
                          <option value="social">Social Media</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-sage hover:bg-sage-dark text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 mt-2"
                    >
                      Let's go!
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
