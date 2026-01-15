import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  email: string;
  company: string;
  url: string;
  size: string;
  services: string[];
  source: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormRequest = await req.json();
    
    // Validate required fields
    if (!formData.email || !formData.company) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const servicesFormatted = formData.services.length > 0 
      ? formData.services.join(", ") 
      : "None selected";

    const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <p>A new inquiry has been submitted via the contact form:</p>
      
      <h2>Contact Details</h2>
      <ul>
        <li><strong>Work Email:</strong> ${formData.email}</li>
        <li><strong>Company Name:</strong> ${formData.company}</li>
        <li><strong>Company URL:</strong> ${formData.url || "Not provided"}</li>
        <li><strong>Company Size:</strong> ${formData.size || "Not specified"}</li>
      </ul>
      
      <h2>Services Interested In</h2>
      <p>${servicesFormatted}</p>
      
      <h2>How They Heard About Us</h2>
      <p>${formData.source || "Not specified"}</p>
      
      ${formData.notes ? `<h2>Additional Notes</h2><p>${formData.notes}</p>` : ""}
      
      <hr>
      <p style="color: #666; font-size: 12px;">This email was sent from the NorthOak contact form.</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "NorthOak <no-reply@northoak.co>",
      to: ["vincent@northoak.co"],
      subject: `New Northoak.co Contact Form Submission from ${formData.company}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
