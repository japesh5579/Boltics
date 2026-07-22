"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Factory, Target, MapPin } from "lucide-react";

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function YearsStat() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const years = new Date().getFullYear() - 1988;
  const count = useCountUp(years, inView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <Award size={30} className="text-orange" strokeWidth={1.5} />
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">{count}+</p>
      <p className="font-display text-xs uppercase tracking-widest text-white/55">
        Years Since 1988
      </p>
    </div>
  );
}

function AcresStat() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = useCountUp(4, inView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <Target size={30} className="text-orange" strokeWidth={1.5} />
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">{count}M+</p>
      <p className="font-display text-xs uppercase tracking-widest text-white/55">
        Acres Mission by 2026
      </p>
    </div>
  );
}

function StaticStat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Factory;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Icon size={30} className="text-orange" strokeWidth={1.5} />
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">{value}</p>
      <p className="font-display text-xs uppercase tracking-widest text-white/55">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-ink-soft py-14">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-10 px-5 lg:grid-cols-4 lg:px-10">
        <YearsStat />
        <StaticStat icon={Factory} value="In-House" label="Rolling, Forging & Heat Treatment" />
        <AcresStat />
        <StaticStat icon={MapPin} value="Amloh" label="Manufactured in Punjab, India" />
      </div>
    </section>
  );
}
