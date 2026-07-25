import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealershipForm from "@/components/DealershipForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealership Application | Aggarwal Industries",
  description:
    "Apply for an Aggarwal Industries dealership for cultivator shovels, agricultural wear parts and fasteners.",
};

export default function DealershipApplicationPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-cream pt-28 pb-20 lg:pt-36">
        <div className="mx-auto max-w-[1000px] px-5 lg:px-10">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-orange-dark">
            Become a Dealer
          </p>
          <h1 className="font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl">
            Dealership Application Form
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-ink/60">
            For Cultivator Shovels, Agricultural Wear Parts &amp; Fasteners. Fill in the details
            below &mdash; our team will review your application and get back to you.
          </p>

          <div className="mt-10">
            <DealershipForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
