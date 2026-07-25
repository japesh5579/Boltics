import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "Sales.Aggarwalindustries@gmail.com";
const FROM_EMAIL = "Aggarwal Industries Dealership <onboarding@resend.dev>";

const FIELD_LABELS: [string, string][] = [
  ["business_name", "Business Name"],
  ["constitution", "Constitution"],
  ["year_established", "Year of Establishment"],
  ["gst_number", "GST Number"],
  ["pan_number", "PAN Number"],
  ["msme_reg_no", "MSME Registration No."],
  ["contact_name", "Proprietor/Director Name"],
  ["designation", "Designation"],
  ["mobile", "Mobile No."],
  ["alt_mobile", "Alternate Mobile"],
  ["email", "Email"],
  ["website", "Website"],
  ["registered_office", "Registered Office"],
  ["address_state", "State"],
  ["address_district", "District"],
  ["address_pin", "PIN"],
  ["warehouse_address", "Warehouse Address"],
  ["main_business", "Main Business"],
  ["brand_1", "Brand 1"],
  ["brand_2", "Brand 2"],
  ["brand_3", "Brand 3"],
  ["brand_4", "Brand 4"],
  ["turnover", "Current Annual Business Turnover"],
  ["employees", "Number of Employees"],
  ["states_covered", "States Covered"],
  ["districts_covered", "Districts Covered"],
  ["dealers_served", "Number of Dealers/Retailers Served"],
  ["salespersons", "Number of Salespersons"],
  ["own_vehicles", "Own Delivery Vehicles"],
  ["vehicle_count", "Number of Vehicles"],
  ["office_area", "Office Area (sq.ft.)"],
  ["warehouse_area", "Warehouse Area (sq.ft.)"],
  ["godown_owned", "Godown Owned"],
  ["computerized_billing", "Computerized Billing"],
  ["bank_name", "Bank Name"],
  ["bank_branch", "Branch"],
  ["account_no", "Account No."],
  ["ifsc", "IFSC"],
  ["years_in_industry", "Years in Agricultural Industry"],
  ["customer_base", "Current Customer Base"],
  ["major_categories_sold", "Major Product Categories Sold"],
  ["territory_state", "Territory State"],
  ["territory_district", "Territory District"],
  ["territory_taluka", "Territory Taluka"],
  ["exclusive_territory", "Exclusive Territory Requested?"],
  ["monthly_purchase", "Expected Monthly Purchase"],
  ["annual_sales_qty", "Estimated Annual Sales Quantity"],
  ["ref1_company", "Reference 1 Company"],
  ["ref1_contact", "Reference 1 Contact Person"],
  ["ref1_mobile", "Reference 1 Mobile"],
  ["ref2_company", "Reference 2 Company"],
  ["ref2_contact", "Reference 2 Contact Person"],
  ["ref2_mobile", "Reference 2 Mobile"],
  ["agree_declaration", "Agreed to Declaration"],
  ["agree_terms", "Agreed to Terms & Conditions"],
];

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const formData = await req.formData();
  const resend = new Resend(apiKey);

  const rows = FIELD_LABELS.map(([key, label]) => {
    const value = formData.get(key);
    const text = value && typeof value === "string" && value.trim() ? value : "&mdash;";
    return `<tr><td style="padding:6px 12px;font-weight:600;border-bottom:1px solid #eee;">${label}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${text}</td></tr>`;
  }).join("");

  const attachments = [];
  for (const [, value] of formData.entries()) {
    if (value instanceof File && value.size > 0) {
      const buffer = Buffer.from(await value.arrayBuffer());
      attachments.push({ filename: value.name, content: buffer });
    }
  }

  const businessName = formData.get("business_name") || "New Applicant";

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Dealership Application — ${businessName}`,
      html: `<h2>New Dealership Application</h2><table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">${rows}</table>`,
      attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Dealership application email failed", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
