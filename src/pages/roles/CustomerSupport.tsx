import { HeadphonesIcon } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";

const CustomerSupport = () => {
  return (
    <RolePageLayout
      icon={HeadphonesIcon}
      title="Customer Support"
      subtitle="World-Class Service"
      description="Provide excellent service over email, chat, and phone at every step in the customer journey with our trained support specialists."
      benefits={[
        "24/7 customer support coverage",
        "Multichannel support (email, chat, phone, social)",
        "Reduce average response time by 70%",
        "Improve customer satisfaction scores",
        "Scale support during peak seasons effortlessly",
      ]}
      tasks={[
        {
          title: "Email Support",
          description: "Respond to customer inquiries, resolve issues, and maintain your brand voice across all email communications.",
        },
        {
          title: "Live Chat",
          description: "Provide real-time assistance to website visitors and customers through chat platforms.",
        },
        {
          title: "Phone Support",
          description: "Handle inbound calls, resolve complex issues, and provide personalized customer service.",
        },
        {
          title: "Ticket Management",
          description: "Organize, prioritize, and track support tickets to ensure timely resolution.",
        },
        {
          title: "Knowledge Base",
          description: "Create and maintain help articles, FAQs, and self-service resources for customers.",
        },
        {
          title: "Escalation Handling",
          description: "Manage escalated issues with care, coordinate with internal teams, and ensure customer satisfaction.",
        },
      ]}
      stats={[
        { value: "4.8/5", label: "Average CSAT score" },
        { value: "<2min", label: "First response time" },
        { value: "95%", label: "First contact resolution" },
        { value: "60%", label: "Cost savings" },
      ]}
    />
  );
};

export default CustomerSupport;
