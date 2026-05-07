import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Check, Users, FileText, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { useRef } from "react";
import { pageMeta } from "@/lib/seo";

export const meta = () =>
  pageMeta({
    title: "Get Started | NorthOak",
    description:
      "Book a free discovery call with NorthOak. Tell us about the operations work you want to offload and we'll match you with vetted specialists in days.",
    path: "/get-started",
  });

const GetStarted = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse following
  const springConfig = {
    damping: 25,
    stiffness: 150
  };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse position to movement ranges for orbs
  const orb1X = useTransform(smoothMouseX, [0, 1], [-30, 30]);
  const orb1Y = useTransform(smoothMouseY, [0, 1], [-30, 30]);
  const orb2X = useTransform(smoothMouseX, [0, 1], [20, -20]);
  const orb2Y = useTransform(smoothMouseY, [0, 1], [25, -25]);
  const orb3X = useTransform(smoothMouseX, [0, 1], [-15, 15]);
  const orb3Y = useTransform(smoothMouseY, [0, 1], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const benefits = [
    "Thoroughly vetted talent in your timezone, ready to onboard in 2-3 weeks",
    "Fully managed recruiting, onboarding, HR and compliance",
    "100% Match Guarantee",
  ];

  const callTopics = [
    {
      icon: Users,
      title: "Your unique needs",
      description: "We tailor our approach to the challenges and opportunities you're facing",
    },
    {
      icon: FileText,
      title: "JD alignment",
      description: "We get specific about the job you need done and the ideal candidate profile",
    },
    {
      icon: Lightbulb,
      title: "Our process",
      description: "We walk you through our process, pricing, and expectations",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Soft background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-sage/5 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -right-[15%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-sage/4 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]" />
      </div>

      <Header />

      <main>
        {/* Hero Section with Box - matching homepage structure */}
        <section className="relative bg-background pt-4 pb-8 overflow-hidden">
          <div className="mx-auto px-3 md:px-4 relative z-10">
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
                  className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
                  style={{
                    background: "radial-gradient(circle, hsl(102 44% 51% / 0.3) 0%, transparent 70%)",
                    x: orb1X,
                    y: orb1Y
                  }}
                />
                
                {/* Secondary orb - bottom left */}
                <motion.div
                  className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
                  style={{
                    background: "radial-gradient(circle, hsl(102 40% 55% / 0.25) 0%, transparent 70%)",
                    x: orb2X,
                    y: orb2Y
                  }}
                />
                
                {/* Center accent orb */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
                  style={{
                    background: "radial-gradient(circle, hsl(102 35% 60% / 0.18) 0%, transparent 60%)",
                    x: orb3X,
                    y: orb3Y
                  }}
                />
                
                {/* Subtle floating particles */}
                <motion.div
                  className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full blur-2xl"
                  style={{
                    background: "hsl(102 44% 51% / 0.2)",
                    x: useTransform(smoothMouseX, [0, 1], [10, -10]),
                    y: useTransform(smoothMouseY, [0, 1], [15, -15])
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full blur-2xl"
                  style={{
                    background: "hsl(102 44% 51% / 0.15)",
                    x: useTransform(smoothMouseX, [0, 1], [-8, 8]),
                    y: useTransform(smoothMouseY, [0, 1], [-12, 12])
                  }}
                />
              </div>

              {/* Content - with top padding to account for fixed navbar, matching homepage */}
              <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-40 md:pt-52 pb-12 md:pb-16">
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left side - Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                        Ready to scale your team?
                      </h1>
                      
                      <p className="text-lg md:text-xl text-muted-foreground mb-8">
                        Learn more to see if NorthOak is a good fit for your needs.
                      </p>

                      {/* Benefits list */}
                      <ul className="space-y-4 mb-12">
                        {benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center mt-0.5 shrink-0">
                              <Check className="w-3 h-3 text-sage" />
                            </div>
                            <span className="text-foreground">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Divider */}
                      <div className="max-w-md h-px bg-gradient-to-r from-muted-foreground/30 via-muted-foreground/30 to-transparent my-10" />

                      {/* What we'll cover */}
                      <div>
                        <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                          Here's what we'll cover in an intro call
                        </h2>
                        
                        <div className="space-y-6">
                          {callTopics.map((topic, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                              className="flex items-start gap-4"
                            >
                              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                                <topic.icon className="w-5 h-5 text-sage" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground mb-1">{topic.title}</h3>
                                <p className="text-sm text-muted-foreground">{topic.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Right side - Form */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <BookingForm />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
