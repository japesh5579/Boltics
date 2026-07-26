import { ChevronDown, Download, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-[64svh] min-h-[440px] w-full items-center overflow-hidden bg-ink sm:h-[100svh] sm:min-h-[640px]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
        src="/videos/hero-tractor.mp4"
        poster="/images/hero-poster-2.jpeg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-10 sm:pt-16 lg:px-10">
        <Reveal delay={0}>
          <p className="mb-2 font-display text-xs font-medium uppercase tracking-[0.25em] text-orange sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
            Since 1988 &mdash; Amloh, Punjab
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="font-display text-[26px] font-semibold uppercase leading-[1.1] tracking-tight text-white sm:text-[58px] sm:leading-[1.05] lg:text-[76px]">
            Cultivator Shovels <br />
            Built to <span className="text-orange">Out-perform</span>
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-white/80 sm:mt-6 sm:text-[15px]">
            Heat-treated, deep-countered cultivator shovels and seed drill shovels, that lasts
            long.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-sm bg-orange px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-dark sm:px-7 sm:py-4 sm:text-sm"
            >
              Explore Products <ArrowRight size={14} />
            </a>
            <a
              href="/catalogue.pdf"
              download
              className="inline-flex items-center gap-2 rounded-sm border border-white/60 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-orange hover:text-orange sm:px-7 sm:py-4 sm:text-sm"
            >
              Download Catalogue <Download size={14} />
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
