import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DealerCTA() {
  return (
    <section id="dealership" className="relative overflow-hidden">
      <div className="relative h-[300px] sm:h-[280px]">
        <Image
          src="/images/hero-poster.jpeg"
          alt="Tractor tilling a field"
          fill
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-dark/95 via-ink/90 to-ink/95" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-start justify-center gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="font-display text-2xl font-semibold uppercase leading-tight text-white sm:text-3xl">
              Become Our Dealer
            </p>
            <p className="mt-2 max-w-md text-sm text-white/75">
              Join our growing network and grow your business with Aggarwal Industries.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-orange px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            Apply Now <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
