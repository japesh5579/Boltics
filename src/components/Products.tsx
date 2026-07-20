"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const PRODUCTS = [
  {
    name: "Cultivator Shovel",
    desc: "Heat treated, deep countered holes, sizes 15\"-17\"",
    img: "/images/products/cultivator-shovel.png",
  },
  {
    name: "Seed Drill Shovel",
    desc: "Precision Phali blades for accurate sowing",
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

const AUTOPLAY_MS = 3500;

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

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
    if (paused) return;
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const step = getStep();
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - step / 2;
      track.scrollTo(atEnd ? { left: 0, behavior: "smooth" } : { left: track.scrollLeft + step, behavior: "smooth" });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

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
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="shrink-0 snap-start">
              <a
                href="#contact"
                className="group relative block w-[240px] overflow-hidden rounded-md bg-[#efece6] transition-transform hover:-translate-y-1 sm:w-[260px]"
              >
                <div className="relative aspect-[4/5] w-full bg-white">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="260px"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-colors group-hover:bg-orange">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-display text-sm font-semibold uppercase leading-tight text-ink">
                    {p.name}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink/55">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
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
      </div>
    </section>
  );
}
