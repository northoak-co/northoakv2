import { PiggyBank } from "lucide-react";
import RolePageLayout from "@/components/RolePageLayout";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const meta = () => [
  ...pageMeta({
    title: "Hire a Bookkeeper or Finance Specialist | NorthOak",
    description:
      "Vetted bookkeepers and finance specialists for QuickBooks, Xero, and NetSuite — bookkeeping, AP/AR, financial reporting, and expense management.",
    path: "/roles/finance-accounting",
  }),
  serviceSchema({
    name: "Finance & Accounting",
    description:
      "Dedicated finance and accounting specialists for bookkeeping, accounts payable, accounts receivable, financial reporting, expense management, and tax prep support.",
    path: "/roles/finance-accounting",
    serviceType: "Bookkeeping and Accounting",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Finance & Accounting", path: "/roles/finance-accounting" },
  ]),
];

const FinanceAccounting = () => {
  return (
    <RolePageLayout
      icon={PiggyBank}
      title="Finance & Accounting"
      subtitle="Financial Operations"
      description="Feel confident in your financial operations with expert bookkeeping and accounting services that keep your books accurate."
      benefits={[
        "Accurate and timely financial reporting",
        "Reduce bookkeeping costs by up to 60%",
        "Stay compliant with financial regulations",
        "Real-time visibility into cash flow",
        "Scale financial operations as you grow",
      ]}
      tasks={[
        {
          title: "Bookkeeping",
          description: "Record transactions, reconcile accounts, and maintain accurate financial records.",
        },
        {
          title: "Accounts Payable",
          description: "Process invoices, manage vendor payments, and track outstanding payables.",
        },
        {
          title: "Accounts Receivable",
          description: "Send invoices, track payments, and manage collections for outstanding receivables.",
        },
        {
          title: "Financial Reporting",
          description: "Prepare monthly, quarterly, and annual financial statements and reports.",
        },
        {
          title: "Expense Management",
          description: "Track expenses, categorize spending, and prepare expense reports for the team.",
        },
        {
          title: "Tax Preparation Support",
          description: "Organize documents, prepare schedules, and assist with tax filing requirements.",
        },
      ]}
      stats={[
        { value: "99.9%", label: "Accuracy rate" },
        { value: "60%", label: "Cost reduction" },
        { value: "5 days", label: "Faster close" },
        { value: "100%", label: "Audit ready" },
      ]}
    />
  );
};

export default FinanceAccounting;
