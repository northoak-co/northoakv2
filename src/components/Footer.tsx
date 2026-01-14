import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const roles = [
    { name: "CRM Management", link: "/roles/crm-management" },
    { name: "Customer Support", link: "/roles/customer-support" },
    { name: "HR Admin", link: "/roles/hr-admin" },
    { name: "Virtual Assistant", link: "/roles/virtual-assistant" },
    { name: "Finance & Accounting", link: "/roles/finance-accounting" },
  ];

  const industries = [
    { name: "Marketing Agencies", link: "#" },
    { name: "eCommerce Brands", link: "#" },
    { name: "B2B SaaS", link: "#" },
    { name: "Consumer Tech", link: "#" },
    { name: "AI Startups", link: "#" },
  ];

  const company = [
    { name: "Why NorthOak?", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Resource Hub", link: "#" },
    { name: "FAQ", link: "#" },
  ];

  const caseStudies = [
    { name: "Case Study 1", link: "#" },
    { name: "Case Study 2", link: "#" },
    { name: "Case Study 3", link: "#" },
    { name: "Case Study 4", link: "#" },
  ];

  return (
    <footer className="bg-sage-light/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Logo & Contact Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img 
                src={logo} 
                alt="NorthOak" 
                className="h-8 w-auto object-contain" 
                style={{ imageRendering: 'auto' }} 
              />
            </motion.div>
            
            <a 
              href="mailto:info@northoak.com" 
              className="text-foreground hover:text-sage transition-colors underline block mb-6"
            >
              info@northoak.com
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white hover:bg-sage transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white hover:bg-sage transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white hover:bg-sage-dark transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Roles Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Roles</h4>
            <ul className="space-y-3">
              {roles.map((role) => (
                <li key={role.name}>
                  <Link 
                    to={role.link} 
                    className="text-muted-foreground hover:text-sage transition-colors text-sm"
                  >
                    {role.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/roles" 
                  className="inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-sage transition-colors mt-2"
                >
                  View all
                  <span className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-sage" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <a 
                    href={industry.link} 
                    className="text-muted-foreground hover:text-sage transition-colors text-sm"
                  >
                    {industry.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-sage transition-colors mt-2"
                >
                  View all
                  <span className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-sage" />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    className="text-muted-foreground hover:text-sage transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Case studies</h4>
            <ul className="space-y-3">
              {caseStudies.map((study) => (
                <li key={study.name}>
                  <a 
                    href={study.link} 
                    className="text-muted-foreground hover:text-sage transition-colors text-sm"
                  >
                    {study.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-sage transition-colors mt-2"
                >
                  View all
                  <span className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-sage" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {currentYear} NorthOak, LLC
            </p>
            <div className="flex items-center gap-8">
              <a 
                href="#" 
                className="text-sm text-foreground hover:text-sage transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-sm text-foreground hover:text-sage transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
