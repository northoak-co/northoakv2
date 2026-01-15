import { motion } from "framer-motion";
import { Check, Users, Briefcase, TrendingUp, Shield, Clock, Headphones, Award, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Assistant",
    price: "$3K",
    period: "/month",
    description: "Skilled operators for execution with years of experience in specific channels.",
    features: [
      "Marketing, ops, or finance expertise",
      "Channel-specific experience",
      "Task execution & reporting",
      "Full-time dedicated support",
      "Slack/Teams integration",
    ],
    popular: false,
  },
  {
    name: "Specialist",
    price: "$3K - $4K",
    period: "/month",
    description: "Expert marketers with depth and range, capable of taking ownership of workflows.",
    features: [
      "Paid media & lifecycle expertise",
      "Workflow ownership & optimization",
      "Strategic execution",
      "Cross-functional collaboration",
      "Performance analytics",
      "Process documentation",
    ],
    popular: true,
  },
  {
    name: "Lead",
    price: "$3.5K - $5K",
    period: "/month",
    description: "Strategic operators who guide and manage teams or lead complex scaling initiatives.",
    features: [
      "Team leadership & management",
      "Complex scaling initiatives",
      "Strategic planning",
      "Cross-departmental coordination",
      "Executive reporting",
      "Process architecture",
      "Mentorship & training",
    ],
    popular: false,
  },
];

const includedFeatures = [
  {
    icon: Shield,
    title: "100% Match Guarantee",
    description: "If you're not satisfied, we'll find you a replacement at no additional cost.",
  },
  {
    icon: Clock,
    title: "30-60-90 Day Onboarding",
    description: "Structured onboarding plan to ensure your new team member hits the ground running.",
  },
  {
    icon: Users,
    title: "Full-Service HR & Admin",
    description: "We handle payroll, benefits, compliance, and performance monitoring.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Your dedicated account manager is always available to help.",
  },
  {
    icon: Briefcase,
    title: "Strategic Hiring Support",
    description: "Custom role scoping and access to our vetted talent network.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Regular performance reviews and continuous improvement programs.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Soft background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-sage/5 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -right-[15%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-sage/4 rounded-full blur-[100px]" />
      </div>

      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-2 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-6">
                Simple, Transparent Pricing
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Invest in growth, not overhead
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Full-time, embedded talent starting at $3K/month. No hidden fees, no long-term contracts.
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative p-8 rounded-2xl border ${
                    tier.popular
                      ? "bg-sage text-primary-foreground border-sage shadow-hover"
                      : "bg-card border-border hover:border-sage/50"
                  } transition-all duration-300`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-forest text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className={`font-display text-xl font-semibold mb-2 ${
                      tier.popular ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display text-4xl font-bold ${
                        tier.popular ? "text-primary-foreground" : "text-foreground"
                      }`}>
                        {tier.price}
                      </span>
                      <span className={tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                        {tier.period}
                      </span>
                    </div>
                    <p className={`mt-3 text-sm ${
                      tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.popular ? "text-primary-foreground" : "text-sage"
                        }`} />
                        <span className={`text-sm ${
                          tier.popular ? "text-primary-foreground/90" : "text-foreground"
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full h-12 rounded-xl font-semibold ${
                      tier.popular
                        ? "bg-primary-foreground text-sage hover:bg-primary-foreground/90"
                        : "bg-sage text-primary-foreground hover:bg-sage-dark"
                    }`}
                  >
                    <Link to="/get-started">Get Started</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-sage-light rounded-xl flex items-center justify-center mb-6">
                    <Building2 className="w-7 h-7 text-sage" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Enterprise
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Volume-based pricing with dedicated account management, custom onboarding, and monthly reporting. Perfect for teams looking to scale rapidly.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["Volume-based pricing", "Dedicated AM support", "Custom onboarding", "Monthly reporting"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-foreground">
                        <Check className="w-5 h-5 text-sage" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 px-8 rounded-xl bg-sage text-primary-foreground hover:bg-sage-dark"
                  >
                    <Link to="/get-started">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What's included with every hire
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Beyond great talent, you get a full support system designed to make your team successful.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {includedFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-sage/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "How does the match guarantee work?",
                  a: "If you're not 100% satisfied with your match within the first 30 days, we'll find you a replacement at no additional cost. Our goal is your success.",
                },
                {
                  q: "What's the minimum commitment?",
                  a: "We require a 3-month minimum commitment to ensure both you and your team member have enough time to build a productive working relationship.",
                },
                {
                  q: "How quickly can I get started?",
                  a: "Most clients are matched with their new team member within 1-2 weeks. Enterprise clients with specific requirements may take slightly longer.",
                },
                {
                  q: "What if I need to scale my team?",
                  a: "We make scaling easy. Contact your account manager and we'll start the matching process for additional team members right away.",
                },
                {
                  q: "Do you handle payroll and benefits?",
                  a: "Yes! We handle all HR administration including payroll, benefits, compliance, and performance management so you can focus on working with your team.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to grow your team?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a 25-minute intro call to discuss your needs and find the perfect match.
              </p>
              <Button
                asChild
                size="lg"
                className="h-14 px-8 rounded-xl bg-sage text-primary-foreground hover:bg-sage-dark"
              >
                <Link to="/get-started">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
