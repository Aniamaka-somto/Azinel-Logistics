import Reveal from "./Reveal";

const vehicles = [
  {
    icon: "🚗",
    name: "Sedan",
    badge: "Economy",
    desc: "Perfect for solo or 2-person trips. Comfortable, fuel-efficient, and easy on your pocket.",
    features: ["Up to 4 passengers", "A/C included", "Luggage in boot", "Most affordable option"],
    featured: false,
  },
  {
    icon: "🚙",
    name: "SUV",
    badge: "Popular",
    desc: "Extra space, extra comfort. Ideal for families and group travel across long distances.",
    features: ["Up to 6 passengers", "Premium comfort", "Large cargo space", "Smoother long rides"],
    featured: true,
  },
  {
    icon: "🏍️",
    name: "Power Bike",
    badge: "Express",
    desc: "Need to move fast with light luggage? Power Bikes cut through traffic and get you there quickly.",
    features: ["Solo travel only", "Helmet provided", "Fastest option", "Best for short state hops"],
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
              Choose your ride,<br />your comfort
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <p className="text-[1.05rem] text-white/60 max-w-[520px] leading-[1.7]">
            Every vehicle class is driven by a verified, background-checked driver — so you can travel with confidence.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
