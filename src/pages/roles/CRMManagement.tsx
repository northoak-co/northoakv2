import { Users } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const meta = () => [
  ...pageMeta({
    title: "Hire a CRM Specialist | NorthOak",
    description:
      "Vetted CRM administrators who maintain your customer data, route leads, manage pipeline, and automate workflows in HubSpot, Salesforce, Pipedrive, and more.",
    path: "/roles/crm-management",
  }),
  serviceSchema({
    name: "CRM Management",
    description:
      "Dedicated CRM specialists for data entry, lead management, pipeline hygiene, reporting, and workflow automation.",
    path: "/roles/crm-management",
    serviceType: "CRM Administration",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "CRM Management", path: "/roles/crm-management" },
  ]),
];

const CRMManagement = () => {
  return (
    <RolePageLayout
      icon={Users}
      title="CRM Management"
      subtitle="Customer Relationship Management"
      description="Keep your customer information up-to-date and manage ongoing sales and marketing workflows with dedicated CRM specialists."
      benefits={[
        "Reduce data entry errors by up to 90%",
        "Free your sales team to focus on closing deals",
        "Maintain consistent customer communication",
        "Scale your CRM operations without additional headcount",
        "24/7 coverage for global customer databases",
      ]}
      tasks={[
        {
          title: "Data Entry & Cleanup",
          description: "Maintain accurate customer records, deduplicate entries, and ensure data hygiene across your CRM platform.",
        },
        {
          title: "Lead Management",
          description: "Qualify, score, and route leads to the right sales reps. Track lead sources and conversion metrics.",
        },
        {
          title: "Pipeline Management",
          description: "Update deal stages, track activities, and ensure your pipeline reflects reality in real-time.",
        },
        {
          title: "Reporting & Analytics",
          description: "Generate custom reports, dashboards, and insights to drive data-informed decisions.",
        },
        {
          title: "Integration Management",
          description: "Sync your CRM with email, calendar, marketing tools, and other business applications.",
        },
        {
          title: "Workflow Automation",
          description: "Set up and maintain automated sequences for follow-ups, reminders, and customer touchpoints.",
        },
      ]}
      stats={[
        { value: "90%", label: "Data accuracy improvement" },
        { value: "40+", label: "Hours saved weekly" },
        { value: "3x", label: "Faster lead response" },
        { value: "50%", label: "Cost reduction" },
      ]}
    />
  );
};

export default CRMManagement;
