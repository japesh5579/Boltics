import { ChevronDown, Download, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-contain sm:object-cover"
        src="/videos/hero-tractor.mp4"
        poster="/images/hero-poster-2.jpeg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-16 lg:px-10">
        <Reveal delay={0}>
          <p className="mb-4 font-display text-sm font-medium uppercase tracking-[0.3em] text-orange">
            Since 1988 &mdash; Amloh, Punjab
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="font-display text-[42px] font-semibold uppercase leading-[1.05] tracking-tight text-white sm:text-[58px] lg:text-[76px]">
            Cultivator Shovels <br />
            Built to <span className="text-orange">Out-perform</span>
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">
            Heat-treated, deep-countered cultivator shovels and seed drill shovels, that lasts
            long.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-sm bg-orange px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-dark"
            >
              Explore Products <ArrowRight size={16} />
            </a>
            <a
              href="/catalogue.pdf"
              download
              className="inline-flex items-center gap-2 rounded-sm border border-white/60 px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-orange hover:text-orange"
            >
              Download Catalogue <Download size={16} />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-full max-w-[1440px] items-center px-5 lg:px-10">
        <div className="flex items-center gap-3 text-white/70">
          <span className="font-display text-xs tracking-widest">01</span>
          <span className="h-px w-10 bg-white/40" />
          <span className="font-display text-xs uppercase tracking-widest">Scroll Down</span>
          <ChevronDown size={16} className="animate-bounce text-orange" />
        </div>
      </div>
    </section>
  );
}
