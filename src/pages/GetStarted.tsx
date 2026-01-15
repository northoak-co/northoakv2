import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Check, Users, FileText, Lightbulb, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";

const serviceOptions = [
  { value: "crm-management", label: "CRM Management" },
  { value: "customer-support", label: "Customer Support" },
  { value: "hr-admin", label: "HR Admin" },
  { value: "virtual-assistant", label: "Virtual Assistant" },
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "back-office-admin", label: "Back Office Admin" },
];

const GetStarted = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (value: string) => {
    setSelectedServices(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const getSelectedServicesLabel = () => {
    if (selectedServices.length === 0) return "Please Select";
    if (selectedServices.length === 1) {
      return serviceOptions.find(s => s.value === selectedServices[0])?.label;
    }
    return `${selectedServices.length} services selected`;
  };

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
                      <div className="bg-card rounded-2xl md:rounded-3xl border border-border/50 shadow-lg p-6 md:p-8 lg:p-10">
                        <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
                          Book a 25-minute intro call
                        </h2>

                        <form className="space-y-5">
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="email">Work Email*</Label>
                              <Input 
                                id="email" 
                                type="email" 
                                placeholder="name@company.com"
                                className="h-12 rounded-xl"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">Company name*</Label>
                              <Input 
                                id="company" 
                                type="text" 
                                placeholder="Your company"
                                className="h-12 rounded-xl"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="url">Company URL*</Label>
                              <Input 
                                id="url" 
                                type="url" 
                                placeholder="yourcompany.com"
                                className="h-12 rounded-xl"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="size">Company Size*</Label>
                              <Select>
                                <SelectTrigger className="h-12 rounded-xl">
                                  <SelectValue placeholder="Please Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1-10">1-10 employees</SelectItem>
                                  <SelectItem value="11-50">11-50 employees</SelectItem>
                                  <SelectItem value="51-200">51-200 employees</SelectItem>
                                  <SelectItem value="201-500">201-500 employees</SelectItem>
                                  <SelectItem value="500+">500+ employees</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="services">Services you're interested in*</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className="w-full h-12 rounded-xl justify-between font-normal bg-background hover:bg-background"
                                >
                                  <span className={selectedServices.length === 0 ? "text-muted-foreground" : ""}>
                                    {getSelectedServicesLabel()}
                                  </span>
                                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[--radix-popover-trigger-width] p-2 bg-popover z-50" align="start">
                                <div className="space-y-1">
                                  {serviceOptions.map((service) => (
                                    <div
                                      key={service.value}
                                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted cursor-pointer"
                                      onClick={() => toggleService(service.value)}
                                    >
                                      <Checkbox
                                        id={service.value}
                                        checked={selectedServices.includes(service.value)}
                                        onCheckedChange={() => toggleService(service.value)}
                                      />
                                      <label
                                        htmlFor={service.value}
                                        className="text-sm font-medium leading-none cursor-pointer flex-1"
                                      >
                                        {service.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="source">How did you hear about us?*</Label>
                            <Select>
                              <SelectTrigger className="h-12 rounded-xl">
                                <SelectValue placeholder="Please Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="google">Google Search</SelectItem>
                                <SelectItem value="linkedin">LinkedIn</SelectItem>
                                <SelectItem value="referral">Referral</SelectItem>
                                <SelectItem value="social">Social Media</SelectItem>
                                <SelectItem value="podcast">Podcast</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <Button 
                            type="submit" 
                            variant="hero" 
                            className="w-full h-12 rounded-xl text-base mt-4"
                          >
                            Book a Call
                          </Button>
                        </form>
                      </div>
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
