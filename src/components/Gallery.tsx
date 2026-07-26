import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import FadeImage from "./FadeImage";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ink">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[340px] bg-ink-soft md:h-[520px]">
          <FadeImage
            src="/images/gallery-forge.jpeg"
            alt="Hot forging at Aggarwal Industries' rolling and forging unit, sparks flying off freshly forged steel"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
          <span className="absolute bottom-6 left-6 rounded-sm bg-black/60 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
            Precision Made
          </span>
        </div>

        <div className="relative h-[340px] md:h-[520px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/gallery-field.mp4"
            poster="/images/gallery-field-poster.jpeg"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-6 right-6 rounded-sm bg-black/60 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
            Field Ready
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
          <Reveal className="pointer-events-auto max-w-md rounded-md bg-black/50 p-6 backdrop-blur-md sm:p-8">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-orange">
              From Our Rolling &amp; Forging Unit
            </p>
            <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
              Made to Fit, Built to Last
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75">
              Every shovel is heat treated, countered and polished before it leaves Amloh &mdash;
              ready to bolt straight onto your cultivator.
            </p>
            <a
              href="#products"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-orange"
            >
              View Our Products <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
