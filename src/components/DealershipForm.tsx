"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Loader2 } from "lucide-react";

const inputClass =
  "w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-orange";
const labelClass = "font-display text-xs font-semibold uppercase tracking-widest text-ink/70";

function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="border-t border-ink/10 pt-10 first:border-t-0 first:pt-0">
      <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
        {n}. {title}
      </h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: ReactNode }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass} />;
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={3} className={`${inputClass} resize-none`} />;
}

function ChoiceGroup({
  name,
  options,
  value,
  onChange,
  multi,
  full,
}: {
  name: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  multi?: boolean;
  full?: boolean;
}) {
  const toggle = (opt: string) => {
    if (multi) {
      onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
    } else {
      onChange([opt]);
    }
  };

  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-3 ${full ? "sm:col-span-2" : ""}`}>
      {options.map((opt) => {
        const checked = value.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className="flex items-center gap-2 text-sm text-ink/80"
          >
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                checked ? "border-orange bg-orange text-white" : "border-ink/25 bg-white"
              } ${multi ? "rounded-sm" : "rounded-full"}`}
            >
              {checked && <Check size={13} strokeWidth={3} />}
            </span>
            {opt}
          </button>
        );
      })}
      <input type="hidden" name={name} value={value.join(", ")} />
    </div>
  );
}

function FileField({ label, name }: { label: string; name: string }) {
  return (
    <label className="flex flex-col gap-2 rounded-sm border border-ink/15 bg-white p-4">
      <span className="text-sm text-ink/80">{label}</span>
      <input
        type="file"
        name={name}
        className="w-full truncate text-xs text-ink/60 file:mr-3 file:shrink-0 file:rounded-sm file:border-0 file:bg-ink file:px-3 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:text-white"
      />
    </label>
  );
}

const CONSTITUTION_OPTS = ["Proprietorship", "Partnership", "LLP", "Private Limited", "Other"];
const BUSINESS_OPTS = ["Agricultural Implements", "Tractor Parts", "Hardware", "Fasteners", "Steel", "Auto Parts", "Others"];
const TURNOVER_OPTS = ["Below ₹50 Lakhs", "₹50 Lakhs – ₹2 Crore", "₹2–5 Crore", "₹5–10 Crore", "Above ₹10 Crore"];
const YES_NO = ["Yes", "No"];
const MONTHLY_PURCHASE_OPTS = ["₹2–5 Lakhs", "₹5–10 Lakhs", "₹10–20 Lakhs", "₹20 Lakhs+"];

const DOCUMENTS = [
  ["gst_certificate", "GST Certificate"],
  ["pan_card", "PAN Card"],
  ["aadhaar_card", "Aadhaar Card of Proprietor/Directors"],
  ["msme_certificate", "MSME Certificate"],
  ["shop_establishment_license", "Shop & Establishment License"],
  ["cancelled_cheque", "Cancelled Cheque"],
  ["trade_license", "Trade License (if applicable)"],
  ["business_registration_certificate", "Business Registration Certificate"],
  ["warehouse_photographs", "Warehouse Photographs"],
  ["shop_front_photograph", "Shop Front Photograph"],
  ["visiting_card", "Visiting Card"],
] as const;

const TERMS = [
  "Submission of this application does not constitute appointment as an authorized dealer.",
  "The company reserves the absolute right to approve or reject any application without assigning any reason.",
  "The dealership shall become effective only after issuance of a written Appointment Letter by the company.",
  "The dealer shall sell products only under the authorized brand name and shall not alter, duplicate, or misuse the company's trademarks, packaging, or promotional materials.",
  "The dealer agrees to maintain ethical business practices and shall not engage in unfair trade practices.",
  "The dealer shall maintain adequate inventory as mutually agreed.",
  "Payments shall be made strictly according to the agreed payment terms.",
  "Any promotional material supplied by the company shall remain the intellectual property of the company.",
  "The dealer shall not make false claims regarding product specifications or warranty.",
  "The company may modify product prices, specifications, discounts, or schemes at any time.",
  "The company reserves the right to appoint additional dealers in any territory unless an exclusive dealership agreement has been executed in writing.",
  "Any exclusive territory shall be subject to achieving minimum agreed sales targets.",
  "Failure to achieve sales targets or maintain satisfactory business conduct may result in suspension or termination of the dealership.",
  "The dealer shall comply with all applicable GST, tax, and statutory regulations.",
  "All disputes shall be subject to the exclusive jurisdiction of the competent courts where the company's registered office is situated.",
  "Product warranty, replacement, and return policies shall be governed by the company's prevailing policy.",
  "The company reserves the right to inspect the dealer's premises before or after appointment.",
  "Confidential business information, pricing, dealer lists, and commercial policies shared by the company shall not be disclosed to third parties.",
  "Either party may terminate the dealership by giving written notice in accordance with the dealership agreement.",
  "The dealer agrees to follow all future policies, circulars, and operational guidelines issued by the company from time to time.",
];

export default function DealershipForm() {
  const [constitution, setConstitution] = useState<string[]>([]);
  const [mainBusiness, setMainBusiness] = useState<string[]>([]);
  const [turnover, setTurnover] = useState<string[]>([]);
  const [ownVehicles, setOwnVehicles] = useState<string[]>([]);
  const [godownOwned, setGodownOwned] = useState<string[]>([]);
  const [computerizedBilling, setComputerizedBilling] = useState<string[]>([]);
  const [exclusiveTerritory, setExclusiveTerritory] = useState<string[]>([]);
  const [monthlyPurchase, setMonthlyPurchase] = useState<string[]>([]);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/dealership-application", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      e.currentTarget.reset();
      setConstitution([]);
      setMainBusiness([]);
      setTurnover([]);
      setOwnVehicles([]);
      setGodownOwned([]);
      setComputerizedBilling([]);
      setExclusiveTerritory([]);
      setMonthlyPurchase([]);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-md bg-white p-10 text-center shadow-sm">
        <h2 className="font-display text-2xl font-semibold uppercase text-ink">
          Application Received
        </h2>
        <p className="mt-3 text-sm text-ink/60">
          Thank you for applying for an Aggarwal Industries dealership. Our team will review your
          application and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 rounded-md bg-white p-6 shadow-sm sm:p-10">
      <Section n="1" title="Applicant Details">
        <Field label="Business Name" full>
          <TextInput name="business_name" required />
        </Field>
        <Field label="Constitution" full>
          <ChoiceGroup name="constitution" options={CONSTITUTION_OPTS} value={constitution} onChange={setConstitution} />
        </Field>
        <Field label="Year of Establishment">
          <TextInput name="year_established" />
        </Field>
        <Field label="GST Number">
          <TextInput name="gst_number" />
        </Field>
        <Field label="PAN Number">
          <TextInput name="pan_number" />
        </Field>
        <Field label="MSME Registration No. (if any)">
          <TextInput name="msme_reg_no" />
        </Field>
      </Section>

      <Section n="2" title="Contact Details">
        <Field label="Proprietor/Director Name">
          <TextInput name="contact_name" required />
        </Field>
        <Field label="Designation">
          <TextInput name="designation" />
        </Field>
        <Field label="Mobile No.">
          <TextInput name="mobile" type="tel" required />
        </Field>
        <Field label="Alternate Mobile">
          <TextInput name="alt_mobile" type="tel" />
        </Field>
        <Field label="Email">
          <TextInput name="email" type="email" required />
        </Field>
        <Field label="Website">
          <TextInput name="website" />
        </Field>
      </Section>

      <Section n="3" title="Business Address">
        <Field label="Registered Office" full>
          <TextArea name="registered_office" />
        </Field>
        <Field label="State">
          <TextInput name="address_state" />
        </Field>
        <Field label="District">
          <TextInput name="address_district" />
        </Field>
        <Field label="PIN">
          <TextInput name="address_pin" />
        </Field>
        <Field label="Warehouse Address (if different)" full>
          <TextArea name="warehouse_address" />
        </Field>
      </Section>

      <Section n="4" title="Existing Business Profile">
        <Field label="Main Business" full>
          <ChoiceGroup name="main_business" options={BUSINESS_OPTS} value={mainBusiness} onChange={setMainBusiness} multi full />
        </Field>
        <Field label="Major Brands Currently Dealing In (1)">
          <TextInput name="brand_1" />
        </Field>
        <Field label="Major Brands Currently Dealing In (2)">
          <TextInput name="brand_2" />
        </Field>
        <Field label="Major Brands Currently Dealing In (3)">
          <TextInput name="brand_3" />
        </Field>
        <Field label="Major Brands Currently Dealing In (4)">
          <TextInput name="brand_4" />
        </Field>
        <Field label="Current Annual Business Turnover" full>
          <ChoiceGroup name="turnover" options={TURNOVER_OPTS} value={turnover} onChange={setTurnover} full />
        </Field>
        <Field label="Number of Employees">
          <TextInput name="employees" type="number" min={0} />
        </Field>
      </Section>

      <Section n="5" title="Market Coverage">
        <Field label="States Covered">
          <TextInput name="states_covered" />
        </Field>
        <Field label="Districts Covered">
          <TextInput name="districts_covered" />
        </Field>
        <Field label="Number of Dealers/Retailers Served">
          <TextInput name="dealers_served" type="number" min={0} />
        </Field>
        <Field label="Number of Salespersons">
          <TextInput name="salespersons" type="number" min={0} />
        </Field>
        <Field label="Own Delivery Vehicles">
          <ChoiceGroup name="own_vehicles" options={YES_NO} value={ownVehicles} onChange={setOwnVehicles} />
        </Field>
        {ownVehicles.includes("Yes") && (
          <Field label="Number of Vehicles">
            <TextInput name="vehicle_count" type="number" min={0} />
          </Field>
        )}
      </Section>

      <Section n="6" title="Infrastructure">
        <Field label="Office Area (sq.ft.)">
          <TextInput name="office_area" type="number" min={0} />
        </Field>
        <Field label="Warehouse Area (sq.ft.)">
          <TextInput name="warehouse_area" type="number" min={0} />
        </Field>
        <Field label="Godown Owned">
          <ChoiceGroup name="godown_owned" options={YES_NO} value={godownOwned} onChange={setGodownOwned} />
        </Field>
        <Field label="Computerized Billing">
          <ChoiceGroup name="computerized_billing" options={YES_NO} value={computerizedBilling} onChange={setComputerizedBilling} />
        </Field>
      </Section>

      <Section n="7" title="Financial Details">
        <Field label="Bank Name">
          <TextInput name="bank_name" />
        </Field>
        <Field label="Branch">
          <TextInput name="bank_branch" />
        </Field>
        <Field label="Account No.">
          <TextInput name="account_no" />
        </Field>
        <Field label="IFSC">
          <TextInput name="ifsc" />
        </Field>
      </Section>

      <Section n="8" title="Business Experience">
        <Field label="Years in Agricultural Industry">
          <TextInput name="years_in_industry" type="number" min={0} />
        </Field>
        <Field label="Current Customer Base">
          <TextInput name="customer_base" />
        </Field>
        <Field label="Major Product Categories Sold" full>
          <TextArea name="major_categories_sold" />
        </Field>
      </Section>

      <Section n="9" title="Territory Requested">
        <Field label="State">
          <TextInput name="territory_state" />
        </Field>
        <Field label="District">
          <TextInput name="territory_district" />
        </Field>
        <Field label="Taluka">
          <TextInput name="territory_taluka" />
        </Field>
        <Field label="Exclusive Territory Requested?">
          <ChoiceGroup name="exclusive_territory" options={YES_NO} value={exclusiveTerritory} onChange={setExclusiveTerritory} />
        </Field>
      </Section>

      <Section n="10" title="Sales Potential">
        <Field label="Expected Monthly Purchase" full>
          <ChoiceGroup name="monthly_purchase" options={MONTHLY_PURCHASE_OPTS} value={monthlyPurchase} onChange={setMonthlyPurchase} full />
        </Field>
        <Field label="Estimated Annual Sales Quantity (pieces)">
          <TextInput name="annual_sales_qty" type="number" min={0} />
        </Field>
      </Section>

      <Section n="11" title="Documents Required">
        <div className="sm:col-span-2 -mt-2 mb-2 text-sm text-ink/55">
          Please attach self-attested copies of the documents below (optional, but speeds up approval).
        </div>
        {DOCUMENTS.map(([name, label]) => (
          <FileField key={name} name={name} label={label} />
        ))}
      </Section>

      <Section n="12" title="References">
        <Field label="Business Reference 1 &ndash; Company">
          <TextInput name="ref1_company" />
        </Field>
        <Field label="Business Reference 1 &ndash; Contact Person">
          <TextInput name="ref1_contact" />
        </Field>
        <Field label="Business Reference 1 &ndash; Mobile">
          <TextInput name="ref1_mobile" type="tel" />
        </Field>
        <div className="hidden sm:block" />
        <Field label="Business Reference 2 &ndash; Company">
          <TextInput name="ref2_company" />
        </Field>
        <Field label="Business Reference 2 &ndash; Contact Person">
          <TextInput name="ref2_contact" />
        </Field>
        <Field label="Business Reference 2 &ndash; Mobile">
          <TextInput name="ref2_mobile" type="tel" />
        </Field>
      </Section>

      <Section n="13" title="Declaration">
        <label className="flex items-start gap-3 text-sm text-ink/70 sm:col-span-2">
          <input type="checkbox" name="agree_declaration" required className="mt-1 h-4 w-4 shrink-0 accent-orange" />
          I/We hereby certify that all information furnished above is true and correct to the best
          of my/our knowledge. I/We understand that submission of this application does not
          guarantee dealership approval.
        </label>

        <div className="sm:col-span-2">
          <p className={labelClass}>Terms &amp; Conditions</p>
          <ol className="mt-3 max-h-56 list-decimal space-y-2 overflow-y-auto rounded-sm border border-ink/10 bg-cream p-4 pl-8 text-xs leading-relaxed text-ink/60">
            {TERMS.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
        </div>

        <label className="flex items-start gap-3 text-sm text-ink/70 sm:col-span-2">
          <input type="checkbox" name="agree_terms" required className="mt-1 h-4 w-4 shrink-0 accent-orange" />
          I/We have read and agree to the Terms &amp; Conditions above.
        </label>
      </Section>

      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-sm bg-orange px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" && <Loader2 size={16} className="animate-spin" />}
          {status === "sending" ? "Submitting..." : "Submit Application"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong sending your application. Please try again or contact us directly.
          </p>
        )}
      </div>
    </form>
  );
}
