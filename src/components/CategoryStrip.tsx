import { Layers, Sprout, Wind, Bolt, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const CATEGORIES = [
  {
    icon: Layers,
    title: "Cultivator Shovel",
    desc: "Heat treated, deep countered holes for a snug bolt fit, sizes 15\"–17\".",
  },
  {
    icon: Sprout,
    title: "Seed Drill Shovel",
    desc: "Precision Phali blades ground for accurate, even sowing.",
  },
  {
    icon: Wind,
    title: "Duck Foot Shovel",
    desc: "Wide sweep design that cuts weeds while disturbing less soil.",
  },
  {
    icon: Bolt,
    title: "Shovel Bolts",
    desc: "Heat treated M10 bolts, corrosion resistant for long field life.",
  },
];

export default function CategoryStrip() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-x-6 gap-y-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {CATEGORIES.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 100}>
            <div className="flex flex-col gap-4 border-t-2 border-ink/10 pt-6">
              <Icon size={30} className="text-orange" strokeWidth={1.5} />
              <p className="font-display text-base font-semibold uppercase tracking-wide text-ink">
                {title}
              </p>
              <p className="text-sm leading-relaxed text-ink/55">{desc}</p>
              <a
                href="#products"
                className="mt-1 inline-flex w-fit items-center gap-2 border border-ink/20 px-4 py-2 font-display text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-orange hover:bg-orange hover:text-white"
              >
                View Products <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
