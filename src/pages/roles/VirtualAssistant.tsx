import { Cog } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const meta = () => [
  ...pageMeta({
    title: "Hire a Virtual Assistant | NorthOak",
    description:
      "Dedicated virtual assistants for calendar management, inbox triage, travel booking, research, and task coordination. Reclaim 15+ hours per week.",
    path: "/roles/virtual-assistant",
  }),
  serviceSchema({
    name: "Virtual Assistant",
    description:
      "Dedicated virtual assistants for executive and administrative support — calendar, email, travel, research, task coordination, and personal admin.",
    path: "/roles/virtual-assistant",
    serviceType: "Virtual Assistant",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Virtual Assistant", path: "/roles/virtual-assistant" },
  ]),
];

const VirtualAssistant = () => {
  return (
    <RolePageLayout
      icon={Cog}
      title="Virtual Assistant"
      subtitle="Executive & Administrative Support"
      description="Supercharge your daily to-dos, scheduling, inbox review, follow-ups, and much more with a dedicated virtual assistant."
      benefits={[
        "Reclaim 10+ hours per week",
        "Never miss important emails or follow-ups",
        "Seamlessly manage complex calendars",
        "Reduce stress and increase productivity",
        "Focus on high-impact work that matters",
      ]}
      tasks={[
        {
          title: "Calendar Management",
          description: "Schedule meetings, manage conflicts, and keep your calendar organized and optimized.",
        },
        {
          title: "Email Management",
          description: "Screen, prioritize, and respond to emails on your behalf while maintaining your voice.",
        },
        {
          title: "Travel Arrangements",
          description: "Book flights, hotels, and create detailed itineraries for business or personal travel.",
        },
        {
          title: "Research & Reports",
          description: "Conduct research, compile data, and prepare reports and presentations.",
        },
        {
          title: "Task Coordination",
          description: "Track projects, manage to-do lists, and ensure deadlines are met.",
        },
        {
          title: "Personal Tasks",
          description: "Handle personal errands, gift ordering, appointment scheduling, and life admin.",
        },
      ]}
      stats={[
        { value: "15+", label: "Hours saved weekly" },
        { value: "Zero", label: "Missed follow-ups" },
        { value: "24/7", label: "Availability" },
        { value: "70%", label: "Productivity boost" },
      ]}
    />
  );
};

export default VirtualAssistant;
