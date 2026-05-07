import { ClipboardList } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const meta = () => [
  ...pageMeta({
    title: "Hire an HR Admin | NorthOak",
    description:
      "Expert HR admins for payroll processing, recruitment support, onboarding, benefits administration, and HR documentation. Reduce HR overhead by 80%.",
    path: "/roles/hr-admin",
  }),
  serviceSchema({
    name: "HR Administration",
    description:
      "Dedicated HR admins handling payroll, recruitment, onboarding, benefits administration, time and attendance, and HR documentation.",
    path: "/roles/hr-admin",
    serviceType: "Human Resources Administration",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "HR Admin", path: "/roles/hr-admin" },
  ]),
];

const HRAdmin = () => {
  return (
    <RolePageLayout
      icon={ClipboardList}
      title="HR Admin"
      subtitle="Human Resources Administration"
      description="Streamline your HR workflows with expert payroll, recruitment, and administrative services that keep your team running smoothly."
      benefits={[
        "Reduce HR administrative burden by 80%",
        "Ensure compliance with employment regulations",
        "Faster time-to-hire with dedicated recruiters",
        "Accurate and timely payroll processing",
        "Improved employee experience and onboarding",
      ]}
      tasks={[
        {
          title: "Payroll Processing",
          description: "Manage payroll calculations, deductions, and ensure timely payments for all employees.",
        },
        {
          title: "Recruitment Support",
          description: "Source candidates, screen resumes, schedule interviews, and coordinate the hiring process.",
        },
        {
          title: "Employee Onboarding",
          description: "Handle paperwork, system setup, and orientation scheduling for new hires.",
        },
        {
          title: "Benefits Administration",
          description: "Manage employee benefits enrollment, changes, and answer benefits-related questions.",
        },
        {
          title: "Time & Attendance",
          description: "Track employee hours, manage PTO requests, and maintain accurate attendance records.",
        },
        {
          title: "HR Documentation",
          description: "Maintain employee files, update policies, and ensure proper record-keeping.",
        },
      ]}
      stats={[
        { value: "80%", label: "Admin time saved" },
        { value: "99.9%", label: "Payroll accuracy" },
        { value: "2x", label: "Faster hiring" },
        { value: "100%", label: "Compliance rate" },
      ]}
    />
  );
};

export default HRAdmin;
