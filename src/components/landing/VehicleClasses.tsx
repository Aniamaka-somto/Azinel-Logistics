import Reveal from "./Reveal";

const vehicles = [
  {
    icon: "🚗",
    name: "Sedan",
    badge: "Travel / Cargo",
    desc: "Ideal for solo trips or small parcel deliveries. Comfortable, fuel-efficient, and easy on the pocket.",
    features: ["Up to 4 passengers", "Small packages welcome", "A/C included", "Most affordable option"],
    featured: false,
  },
  {
    icon: "🚙",
    name: "SUV",
    badge: "Popular",
    desc: "Extra space for group travel or medium-sized cargo loads. The most versatile vehicle on the platform.",
    features: ["Up to 6 passengers", "Medium cargo loads", "Premium comfort", "Smoother long rides"],
    featured: true,
  },
  {
    icon: "🏍️",
    name: "Power Bike",
    badge: "Express",
    desc: "Fast solo travel or express parcel delivery. Cuts through traffic, perfect for time-sensitive runs.",
    features: ["Solo passengers only", "Express parcel delivery", "Helmet provided", "Fastest option"],
    featured: false,
  },
  {
    icon: "🚐",
    name: "Van / Pickup",
    badge: "Logistics",
    desc: "Built for serious cargo. Ideal for businesses, traders, and anyone moving large or heavy goods interstate.",
    features: ["Heavy & bulky cargo", "Business & trade shipments", "Door-to-door delivery", "Negotiate freight rates"],
    featured: false,
  },
];

const VehicleClasses = () => {
  return (
    <section id="vehicles" className="bg-secondary py-[100px] px-[5%]">
      <div className="flex justify-between items-end flex-wrap gap-6 mb-14">
        <div>
          <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary-light font-display mb-4">
            Fleet
          </div>
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
              Vehicles for every<br />trip &amp; delivery
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <p className="text-[1.05rem] text-white/60 max-w-[520px] leading-[1.7]">
            Whether you're travelling or shipping — we have the right vehicle for the job, driven by a verified professional.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {vehicles.map((v, i) => (
          <Reveal key={v.name} delay={i * 80}>
            <div
              className={`rounded-3xl p-9 px-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                v.featured
                  ? "bg-primary border border-primary hover:bg-primary-deep shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                  : "bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              }`}
            >
              <span
                className={`absolute top-5 right-5 text-[0.65rem] font-bold font-display uppercase tracking-[0.08em] px-3 py-1 rounded-full ${
                  v.featured ? "bg-black/20 text-white" : "bg-white/20 text-white"
                }`}
              >
                {v.badge}
              </span>
              <span className="text-5xl block mb-5">{v.icon}</span>
              <div className="font-display font-extrabold text-[1.4rem] text-white mb-2">{v.name}</div>
              <p className={`text-sm leading-relaxed mb-6 ${v.featured ? "text-white/80" : "text-white/60"}`}>
                {v.desc}
              </p>
              <ul className="flex flex-col gap-2">
                {v.features.map((f) => (
                  <li
                    key={f}
                    className={`text-xs flex items-center gap-2 ${v.featured ? "text-white/90" : "text-white/70"}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${v.featured ? "bg-white/80" : "bg-primary-light"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default VehicleClasses;
