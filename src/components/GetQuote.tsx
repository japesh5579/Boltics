"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const QUOTE_EMAIL = "Sales.Aggarwalindustries@gmail.com";

export default function GetQuote() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const content = String(data.get("content") ?? "");

    const subject = `Quote Request from ${name || "Website Visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${content}`;
    window.location.href = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="quote" className="bg-cream py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal className="flex flex-col justify-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-orange-dark">
            Get a Quote
          </p>
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl">
            Choose the Right Shovels for Your Fleet
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60">
            Tell us your cultivator size, shovel type and quantity &mdash; we&apos;ll get back to
            you with pricing and availability.
          </p>
          <div className="relative mt-10 aspect-[16/10] w-full max-w-md overflow-hidden rounded-md bg-ink-soft">
            <Image
              src="/images/products/shovel-bolts.png"
              alt="Aggarwal Industries shovel bolts"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-10"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="rounded-md bg-white p-6 shadow-sm sm:p-10">
            <h3 className="font-display text-xl font-semibold uppercase text-ink">
              Get a Quote from Aggarwal Industries
            </h3>
            <p className="mt-2 text-sm text-ink/55">
              Get a quote on the latest price of shovels and bolts. We&apos;ll reply within 48
              hours.
            </p>

            <div className="mt-7 flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-ink/70">
                  Name <span className="text-orange">*</span>
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  className="rounded-sm border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-orange"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-ink/70">
                  Email <span className="text-orange">*</span>
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-sm border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-orange"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-ink/70">
                  Phone <span className="text-orange">*</span>
                </span>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98141 30286"
                  className="rounded-sm border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-orange"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-ink/70">
                  Content <span className="text-orange">*</span>
                </span>
                <textarea
                  name="content"
                  required
                  rows={4}
                  placeholder="Shovel type, sizes and quantity you need"
                  className="resize-none rounded-sm border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-orange"
                />
              </label>

              <button
                type="submit"
                className="mt-2 rounded-sm bg-orange px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-orange-dark"
              >
                Submit
              </button>
              {sent && (
                <p className="text-xs text-ink/55">
                  Opening your email app to send this to us &mdash; thank you!
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
