import { FileText } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";

const BackOfficeAdmin = () => {
  return (
    <RolePageLayout
      icon={FileText}
      title="Back Office Admin"
      subtitle="Operations & Administration"
      description="Have other manual workflows and processes unique to your business? Our back office specialists will handle them for you."
      benefits={[
        "Automate repetitive manual processes",
        "Reduce operational overhead costs",
        "Maintain consistent quality standards",
        "Scale operations without growing headcount",
        "Focus your team on strategic initiatives",
      ]}
      tasks={[
        {
          title: "Data Entry & Processing",
          description: "Handle high-volume data entry, validation, and processing with speed and accuracy.",
        },
        {
          title: "Document Management",
          description: "Organize, digitize, and manage documents, contracts, and records.",
        },
        {
          title: "Order Processing",
          description: "Process orders, track shipments, and manage fulfillment workflows.",
        },
        {
          title: "Inventory Management",
          description: "Track inventory levels, manage stock, and coordinate with suppliers.",
        },
        {
          title: "Quality Assurance",
          description: "Review work, check for errors, and ensure quality standards are met.",
        },
        {
          title: "Custom Workflows",
          description: "Handle any unique business processes specific to your operations.",
        },
      ]}
      stats={[
        { value: "85%", label: "Faster processing" },
        { value: "99%", label: "Accuracy rate" },
        { value: "50%", label: "Cost savings" },
        { value: "24/7", label: "Operations coverage" },
      ]}
    />
  );
};

export default BackOfficeAdmin;
