import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceOptions = [
  { value: "crm-management", label: "CRM Management" },
  { value: "customer-support", label: "Customer Support" },
  { value: "hr-admin", label: "HR Admin" },
  { value: "virtual-assistant", label: "Virtual Assistant" },
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "back-office-admin", label: "Back Office Admin" },
];

interface BookingFormProps {
  className?: string;
}

const BookingForm = ({ className = "" }: BookingFormProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (value: string) => {
    setSelectedServices(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const getSelectedServicesLabel = () => {
    if (selectedServices.length === 0) return "Please Select";
    if (selectedServices.length === 1) {
      return serviceOptions.find(s => s.value === selectedServices[0])?.label;
    }
    return `${selectedServices.length} services selected`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted with services:", selectedServices);
  };

  return (
    <div className={`bg-card rounded-2xl md:rounded-3xl border border-border/50 shadow-lg p-6 md:p-8 lg:p-10 ${className}`}>
      <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
        Book a 25-minute intro call
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="email">Work Email*</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@company.com"
              className="h-12 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company name*</Label>
            <Input 
              id="company" 
              type="text" 
              placeholder="Your company"
              className="h-12 rounded-xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="url">Company URL*</Label>
            <Input 
              id="url" 
              type="text" 
              placeholder="yourcompany.com"
              className="h-12 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Company Size*</Label>
            <Select onValueChange={() => {}}>
              <SelectTrigger id="size" className="h-12 rounded-xl">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="500+">500+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="services">Services you're interested in*</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full h-12 rounded-xl justify-between font-normal bg-background hover:bg-background"
              >
                <span className={selectedServices.length === 0 ? "text-muted-foreground" : ""}>
                  {getSelectedServicesLabel()}
                </span>
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-2 bg-popover z-50" align="start">
              <div className="space-y-1">
                {serviceOptions.map((service) => (
                  <div
                    key={service.value}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted cursor-pointer"
                    onClick={() => toggleService(service.value)}
                  >
                    <Checkbox
                      id={service.value}
                      checked={selectedServices.includes(service.value)}
                      onCheckedChange={() => toggleService(service.value)}
                    />
                    <label
                      htmlFor={service.value}
                      className="text-sm font-medium leading-none cursor-pointer flex-1"
                    >
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="source">How did you hear about us?*</Label>
          <Select onValueChange={() => {}}>
            <SelectTrigger id="source" className="h-12 rounded-xl">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="google">Google Search</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="podcast">Podcast</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit"
          variant="hero" 
          className="w-full h-12 rounded-xl text-base mt-4"
          onClick={(e) => {
            e.preventDefault();
            console.log("Form submitted with services:", selectedServices);
            // TODO: Add actual form submission logic here
            alert("Form submitted! Connect to a backend to handle submissions.");
          }}
        >
          Book a Call
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;