import { motion } from "framer-motion";
import { Check, Users, FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";

const GetStarted = () => {
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(102 35% 92%) 0%, hsl(102 25% 96%) 50%, hsl(102 20% 98%) 100%)",
        }}
      />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, hsl(102 44% 51% / 0.25) 0%, transparent 70%)",
          }}
        />
        <motion.div 
          className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, hsl(102 40% 55% / 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10 px-6 md:px-12 lg:px-20 py-12 md:py-20">
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
              <div className="border-t border-border/50 my-10" />

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
                        placeholder="https://yourcompany.com"
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
                    Let's go!
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetStarted;
