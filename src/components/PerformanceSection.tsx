import { Flame, Gauge, CircleDot, ShieldCheck, Wrench, Factory } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  { icon: Flame, title: "Heat Treated (Special)", subtitle: "Longer working life" },
  { icon: Gauge, title: "Longer Edge Length", subtitle: "Less load on tractor, saves fuel" },
  { icon: CircleDot, title: "Deep Countered Holes", subtitle: "Bolt fits properly, no play" },
  { icon: ShieldCheck, title: "Rust-Resistant Polish", subtitle: "Protects against corrosion" },
  { icon: Wrench, title: "Heat Treated Shovel Bolts", subtitle: "Resists breaking under load" },
  { icon: Factory, title: "Own Rolling & Forging Unit", subtitle: "Consistent quality, on time" },
];

export default function PerformanceSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <Reveal>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-orange">
            About Aggarwal Industries
          </p>
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl lg:text-[42px]">
            Low Cost of Cultivation, Per Acre
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/65">
            Founded in 1988 by Mr. Dharamvir Goyal, Aggarwal Industries has been supplying
            heat-treated cultivator shovels, seed drill shovels and shovel bolts to farmers and
            dealers across India. We run our own Rolling, Forging and Heat Treatment unit in Amloh, Punjab, so quality
            and delivery timelines stay in our control from raw steel to finished shovel.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, subtitle }, i) => (
              <Reveal key={title} delay={i * 80} className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-orange/40 text-orange">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-display text-[13px] font-semibold uppercase leading-tight text-white">
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{subtitle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative flex flex-col overflow-hidden rounded-lg bg-ink-soft/60">
          <div className="relative aspect-[16/9] w-full">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/rice-field.mp4"
              poster="/images/rice-field-poster.jpeg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="border-t border-white/10 p-6">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              We Serve PAN India
            </p>
            <p className="mt-1 text-xs text-white/50">
              Trusted by farmers and dealers across India since 1988
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
