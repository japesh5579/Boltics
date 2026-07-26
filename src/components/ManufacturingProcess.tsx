import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Raw Material",
    desc: "High grade steel selected for the batch",
    video: "/videos/process/raw-material.mp4",
    poster: "/images/process/raw-material-poster.jpeg",
  },
  {
    n: "02",
    title: "Rolling",
    desc: "Steel rolled to shovel thickness in-house",
    video: "/videos/process/rolling.mp4",
    poster: "/images/process/rolling-poster.jpeg",
  },
  {
    n: "03",
    title: "Forging",
    desc: "Hot forged to shape in our own unit",
    video: "/videos/process/forging.mp4",
    poster: "/images/process/forging-poster.jpeg",
  },
  {
    n: "04",
    title: "Heat Treatment",
    desc: "Heat treated for a longer working life",
    video: "/videos/process/tempering.mp4",
    poster: "/images/process/tempering-poster.jpeg",
  },
  {
    n: "05",
    title: "Polishing",
    desc: "Polished to resist corrosion and rust",
    video: "/videos/process/polishing.mp4",
    poster: "/images/process/polishing-poster.jpeg",
  },
  {
    n: "06",
    title: "Quality Check",
    desc: "Every batch checked before dispatch",
    video: "/videos/process/quality-check.mp4",
    poster: "/images/process/quality-check-poster.jpeg",
  },
];

export default function ManufacturingProcess() {
  return (
    <section id="manufacturing" className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 text-center lg:px-10">
        <Reveal>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-orange-dark">
            Rolling &middot; Forging &middot; Heat Treatment
          </p>
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl lg:text-[42px]">
            How We Manufacture
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 text-left sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-lg">
                <div className="relative h-36 w-full overflow-hidden sm:h-40">
                  <video
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={step.video}
                    poster={step.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-orange font-display text-xs font-bold text-white shadow-md">
                    {step.n}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-4 py-4">
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink/55">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
