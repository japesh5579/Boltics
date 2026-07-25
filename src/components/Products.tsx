"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Ruler } from "lucide-react";
import Reveal from "./Reveal";
import SpecModal, { type SpecRow } from "./SpecModal";

const PRODUCTS = [
  {
    name: "Cultivator Shovel",
    desc: "Heat treated, deep countered holes, sizes 15\"-17\". Chamfered range also available",
    img: "/images/products/cultivator-shovel.png",
  },
  {
    name: "Seed Drill Shovel",
    desc: "Precision Phali blades for accurate sowing, sizes 8\"-9\"",
    img: "/images/products/seed-drill-shovel.png",
  },
  {
    name: "4 Hole Shovel",
    desc: "Extra holes for stronger, adjustable mounting",
    img: "/images/products/four-hole-shovel.png",
  },
  {
    name: "Bhartpuri Shovel",
    desc: "Traditional Bhartpuri style for regional tillage",
    img: "/images/products/bhartpuri-shovel.png",
  },
  {
    name: "Duck Foot Shovel",
    desc: "Wide sweep design for effective weed control",
    img: "/images/products/duck-foot-shovel.png",
  },
  {
    name: "Shovel Bolts",
    desc: "Heat treated M10 bolts, corrosion resistant",
    img: "/images/products/shovel-bolts.png",
  },
] as const;

const ALSO_AVAILABLE = [
  "Single Edge Shovel",
  "Shovel – 2 Hole",
  "Barfi (Diamond) Shovel",
  "Straight Shovel",
  "Sangaria Style Shovel",
  "Jaito Style Shovel",
];

const SPECS: Record<string, { columns: string[]; rows: SpecRow[] }> = {
  "Cultivator Shovel": {
    columns: ["Code", "Length", "Width", "Thickness", "Edge Length", "Weight"],
    rows: [
      { Code: "A1507", Length: "15\"", Width: "75 mm", Thickness: "7 mm", "Edge Length": "110 mm", Weight: "1.0 Kg" },
      { Code: "A1607", Length: "16\"", Width: "75 mm", Thickness: "7 mm", "Edge Length": "110 mm", Weight: "1.1 Kg" },
      { Code: "A1510", Length: "15\"", Width: "75 mm", Thickness: "10 mm", "Edge Length": "110 mm", Weight: "1.36 Kg" },
      { Code: "A1610", Length: "16\"", Width: "75 mm", Thickness: "10 mm", "Edge Length": "110 mm", Weight: "1.54 Kg" },
      { Code: "A1512", Length: "15\"", Width: "75 mm", Thickness: "12 mm", "Edge Length": "110 mm", Weight: "1.80 Kg" },
      { Code: "A1612", Length: "16\"", Width: "75 mm", Thickness: "12 mm", "Edge Length": "110 mm", Weight: "2.00 Kg" },
      { Code: "A178014", Length: "17\"", Width: "80 mm", Thickness: "14 mm", "Edge Length": "120 mm", Weight: "2.40 Kg" },
    ],
  },
  "Seed Drill Shovel": {
    columns: ["Code", "Length", "Width", "Thickness", "Edge Length", "Center Distance", "Weight"],
    rows: [
      { Code: "A8100", Length: "8\"", Width: "45 mm", Thickness: "5 mm", "Edge Length": "40 mm", "Center Distance": "1\"", Weight: "0.280 Kg" },
      { Code: "A8125", Length: "8\"", Width: "45 mm", Thickness: "5 mm", "Edge Length": "40 mm", "Center Distance": "1.25\"", Weight: "0.280 Kg" },
      { Code: "A8175", Length: "8\"", Width: "45 mm", Thickness: "5 mm", "Edge Length": "40 mm", "Center Distance": "1.75\"", Weight: "0.280 Kg" },
      { Code: "A9175", Length: "9\"", Width: "45 mm", Thickness: "5 mm", "Edge Length": "50 mm", "Center Distance": "1.75\"", Weight: "0.330 Kg" },
      { Code: "A9175-8-SE", Length: "9\"", Width: "45 mm", Thickness: "8 mm", "Edge Length": "40 mm", "Center Distance": "1.75\"", Weight: "0.500 Kg" },
      { Code: "A9028", Length: "9\"", Width: "28 mm", Thickness: "8 mm", "Edge Length": "80 mm", "Center Distance": "1.75\"", Weight: "0.216 Kg" },
    ],
  },
  "Shovel Bolts": {
    columns: ["Size", "Length"],
    rows: [
      { Size: "M10", Length: "50 mm" },
      { Size: "M10", Length: "65 mm" },
      { Size: "M10", Length: "75 mm" },
      { Size: "M10", Length: "90 mm" },
    ],
  },
};

const AUTOPLAY_MS = 3500;

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openSpec, setOpenSpec] = useState<string | null>(null);

  const getStep = () => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 20 : 300;
  };

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / getStep()));
  };

  // Auto-advancing carousel, pauses on hover/touch, loops back to the start.
  useEffect(() => {
    if (paused || openSpec) return;
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const step = getStep();
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - step / 2;
      track.scrollTo(atEnd ? { left: 0, behavior: "smooth" } : { left: track.scrollLeft + step, behavior: "smooth" });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, openSpec]);

  return (
    <section id="products" className="bg-ink py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-orange">
              Our Products
            </p>
            <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
              Strong. Sturdy. Reliable.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-orange sm:inline-flex"
            >
              View All Products <ArrowUpRight size={14} />
            </a>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous product"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-orange hover:bg-orange"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next product"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-orange hover:bg-orange"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          onScroll={onScroll}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCTS.map((p, i) => {
            const specs = SPECS[p.name];
            return (
              <Reveal key={p.name} delay={i * 80} className="shrink-0 snap-start">
                <div className="group relative w-[240px] overflow-hidden rounded-md bg-[#efece6] transition-transform hover:-translate-y-1 sm:w-[260px]">
                  <a href="#contact" className="block">
                    <div className="relative aspect-[4/5] w-full bg-white">
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        sizes="260px"
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-display text-sm font-semibold uppercase leading-tight text-ink">
                        {p.name}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-ink/55">{p.desc}</p>
                    </div>
                  </a>

                  {specs ? (
                    <button
                      onClick={() => setOpenSpec(p.name)}
                      aria-label={`View ${p.name} specifications`}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-orange"
                    >
                      <Ruler size={13} />
                    </button>
                  ) : (
                    <a
                      href="#contact"
                      aria-label={`Enquire about ${p.name}`}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-orange"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {specs && (
                    <button
                      onClick={() => setOpenSpec(p.name)}
                      className="absolute bottom-5 right-5 font-display text-[10px] font-semibold uppercase tracking-wider text-orange-dark hover:underline"
                    >
                      Sizes
                    </button>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {PRODUCTS.map((p, i) => (
            <span
              key={p.name}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? "w-6 bg-orange" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>

        <Reveal className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Also Available
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {ALSO_AVAILABLE.map((name, i) => (
              <span key={name} className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="font-display text-xs font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-orange"
                >
                  {name}
                </a>
                {i < ALSO_AVAILABLE.length - 1 && <span className="text-white/20">&middot;</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {openSpec && SPECS[openSpec] && (
        <SpecModal
          title={openSpec}
          columns={SPECS[openSpec].columns}
          rows={SPECS[openSpec].rows}
          onClose={() => setOpenSpec(null)}
        />
      )}
    </section>
  );
}
