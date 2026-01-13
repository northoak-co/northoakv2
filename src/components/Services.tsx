import { motion } from "framer-motion";
import { 
  Users, 
  HeadphonesIcon, 
  ClipboardList, 
  Cog, 
  PiggyBank, 
  FileText 
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "CRM Management",
    description: "Keep your customer information up-to-date and manage ongoing sales/marketing workflows.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Provide excellent service over email, chat, and phone at every step in the customer journey.",
  },
  {
    icon: ClipboardList,
    title: "HR Admin",
    description: "Streamline your HR workflows with expert payroll, recruitment, and IT services.",
  },
  {
    icon: Cog,
    title: "Virtual Assistant",
    description: "Supercharge your daily to-dos, scheduling, inbox review, follow ups, and much more.",
  },
  {
    icon: PiggyBank,
    title: "Finance & Accounting",
    description: "Feel confident in your financial operations with expert bookkeeping and accounting services.",
  },
  {
    icon: FileText,
    title: "Back Office Admin",
    description: "Have other manual workflows and processes unique to your business? We'll do it for you!",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Unblocking bottlenecks so you can focus on growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Never let operations be the reason you stop growing. Whether you're facing a spike in demand or your team has too much on their plates, rely on NorthOak.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-sage/50 hover:shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-sage transition-colors duration-300">
                <service.icon className="w-6 h-6 text-sage group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
