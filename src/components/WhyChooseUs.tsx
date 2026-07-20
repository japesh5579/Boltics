"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import Reveal from "./Reveal";
import FadeImage from "./FadeImage";

const ITEMS = [
  {
    title: "Heat Treated, Special Process",
    desc: "Every shovel goes through a heat treatment cycle in our own unit, giving it a longer working life than untreated stock.",
  },
  {
    title: "Deep Countered Holes",
    desc: "Countered holes are cut deep so the bolt head sits flush, holding the shovel tight with no play in the field.",
  },
  {
    title: "Own Rolling, Forging & Tempering Unit",
    desc: "We roll, forge and temper in-house at Amloh, so quality and delivery timelines stay in our control end to end.",
  },
  {
    title: "Rust-Resistant Polish & Tempered Bolts",
    desc: "A corrosion-resistant polish plus tempered M10 shovel bolts keep the whole assembly reliable season after season.",
  },
];

export default function WhyChooseUs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-orange-dark">
            A Leading Amloh Shovel Manufacturer
          </p>
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl">
            Why Choose Aggarwal Industries
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-ink/60">
              Since 1988, Aggarwal Industries has manufactured heat-treated cultivator shovels,
              seed drill shovels and shovel bolts for farmers and dealers across Punjab &mdash;
              rolled, forged and tempered in our own Amloh unit.
            </p>

            <div className="mt-8 flex flex-col divide-y divide-ink/10 border-y border-ink/10">
              {ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.title}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className={`flex w-full items-center justify-between gap-4 py-5 text-left transition-colors ${
                        isOpen ? "text-orange-dark" : "text-ink"
                      }`}
                    >
                      <span className="font-display text-sm font-semibold uppercase tracking-wide sm:text-base">
                        {item.title}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                      }`}
                      style={{ display: "grid" }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-lg text-sm leading-relaxed text-ink/55">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md shadow-xl">
              <FadeImage
                src="/images/why-choose-crop.jpg"
                alt="Healthy crop rows growing in well-tilled soil"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="relative -mt-10 ml-6 flex max-w-xs items-center gap-4 rounded-md bg-orange p-5 shadow-lg sm:ml-10">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/80">Send us an email for quote</p>
                <a
                  href="mailto:Sales.Aggarwalindustries@gmail.com"
                  className="font-display text-sm font-semibold text-white hover:underline"
                >
                  Sales.Aggarwalindustries@gmail.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
