import { motion } from "framer-motion";
import { ArrowRight, Check, LucideIcon } from "lucide-react";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Partners from "./Partners";
import CTASection from "./CTASection";

interface RolePageLayoutProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  tasks: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
}

const RolePageLayout = ({
  icon: Icon,
  title,
  subtitle,
  description,
  benefits,
  tasks,
  stats,
}: RolePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background pt-4 pb-8 overflow-hidden">
          <div className="mx-auto px-3 md:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
                boxShadow:
                  "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
              }}
            >
              {/* Background orbs */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 44% 51% / 0.3) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(102 40% 55% / 0.25) 0%, transparent 70%)",
                  }}
                />
              </div>

              <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-sage/10 rounded-2xl mb-6"
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-sage" />
                  </motion.div>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-sage font-medium text-sm md:text-base uppercase tracking-wide mb-4"
                  >
                    {subtitle}
                  </motion.p>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                  >
                    {title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                  >
                    {description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                  >
                    <Link to="/get-started">
                      <button className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden">
                        <span className="px-6 py-3 text-white font-medium">
                          Hire {title}
                        </span>
                        <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                          <ArrowRight className="w-4 h-4 text-sage" />
                        </span>
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why outsource your {title.toLowerCase()}?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Free up your core team to focus on growth while our expert
                  professionals handle your {title.toLowerCase()} needs with
                  precision and care.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-5 h-5 bg-sage/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-sage" />
                      </span>
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center"
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-sage mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tasks Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What our {title.toLowerCase()} specialists handle
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our trained professionals are equipped to manage a wide range of
                tasks, allowing you to scale without the overhead.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl border border-border p-6 hover:border-sage/50 hover:shadow-hover transition-all duration-300"
                >
                  <h3 className="font-sans text-lg font-semibold text-foreground mb-2">
                    {task.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {task.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />

        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default RolePageLayout;
