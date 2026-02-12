import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

// Role pages
import CRMManagement from "./pages/roles/CRMManagement";
import CustomerSupport from "./pages/roles/CustomerSupport";
import HRAdmin from "./pages/roles/HRAdmin";
import VirtualAssistant from "./pages/roles/VirtualAssistant";
import FinanceAccounting from "./pages/roles/FinanceAccounting";
import BackOfficeAdmin from "./pages/roles/BackOfficeAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Role pages */}
          <Route path="/roles/crm-management" element={<CRMManagement />} />
          <Route path="/roles/customer-support" element={<CustomerSupport />} />
          <Route path="/roles/hr-admin" element={<HRAdmin />} />
          <Route path="/roles/virtual-assistant" element={<VirtualAssistant />} />
          <Route path="/roles/finance-accounting" element={<FinanceAccounting />} />
          <Route path="/roles/back-office-admin" element={<BackOfficeAdmin />} />
          
          {/* Legal pages */}
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
