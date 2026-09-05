import emailjs from "@emailjs/browser";

export interface EnquiryPayload {
  name: string;
  company: string;
  workEmail: string;
  phone: string;
  serviceRequirement: string;
  message: string;
  enquiryType?: "business" | "technical";
}

export interface EmailResponse {
  success: boolean;
  message: string;
  isDemo?: boolean;
}

// Configuration from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || "admin@stratumforgeglobal.com";

/**
 * Sends customer inquiry through EmailJS or falls back to demo mode if keys are not yet configured.
 */
export async function sendEnquiryEmail(payload: EnquiryPayload): Promise<EmailResponse> {
  const templateParams = {
    name: payload.name,
    from_name: payload.name,
    company: payload.company,
    from_company: payload.company,
    email: payload.workEmail,
    from_email: payload.workEmail,
    phone: payload.phone,
    from_phone: payload.phone,
    service_requirement: payload.serviceRequirement,
    enquiry_type: payload.enquiryType === "technical" ? "Technical & Service" : "Business & Partnership",
    message: payload.message,
    to_email: ADMIN_EMAIL,
    submission_time: new Date().toLocaleString(),
  };

  // If EmailJS keys are provided, execute the real transmission
  if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        return {
          success: true,
          message: "Your enquiry has been successfully transmitted to our engineering desk at StratumForge Global.",
        };
      } else {
        throw new Error(`EmailJS responded with status ${response.status}: ${response.text}`);
      }
    } catch (error: any) {
      console.error("[EmailJS] Transmission failed:", error);
      return {
        success: false,
        message: error?.text || error?.message || "Failed to dispatch email via EmailJS. Please try direct contact.",
      };
    }
  }

  // Safe fallback if user has not yet entered their specific EmailJS keys in .env
  console.info("[EmailJS] No API keys detected in .env. Running in Demo / Direct Mailto mode. To connect live, set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env");
  
  // Simulate transmission latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    isDemo: true,
    message: "Enquiry logged successfully. (EmailJS configured with demo fallback until .env keys are added).",
  };
}

/**
 * Builds a pre-filled mailto URL for direct desktop email client dispatch.
 */
export function generateMailtoUrl(payload: EnquiryPayload): string {
  const subject = encodeURIComponent(`[StratumForge Enquiry] ${payload.serviceRequirement} - ${payload.company || payload.name}`);
  const body = encodeURIComponent(
`Full Name: ${payload.name}
Company / Organization: ${payload.company}
Work Email: ${payload.workEmail}
Phone Number: ${payload.phone}
Requirement: ${payload.serviceRequirement}
Category: ${payload.enquiryType === "technical" ? "Technical & Service" : "Business & Partnership"}

Message / Specifications:
${payload.message}
`
  );

  return `mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`;
}
