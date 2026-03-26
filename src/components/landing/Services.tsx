import Reveal from "./Reveal";

const Services = () => {
  return (
    <section id="services" className="bg-foreground py-[100px] px-[5%]">
      <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary-light font-display mb-4">
        What We Do
      </div>
      <Reveal>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white mb-14">
          One platform. Two powerful services.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* People Transport */}
        <Reveal>
          <div className="bg-secondary rounded-[28px] p-12 px-10 relative overflow-hidden border border-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] group">
            <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] bg-[radial-gradient(circle,_hsl(0_85%_48%_/_0.25)_0%,_transparent_70%)] pointer-events-none" />
            <span className="text-[3.5rem] block mb-5">🚗</span>
            <span className="inline-block text-[0.65rem] font-bold font-display uppercase tracking-[0.12em] px-3 py-1 rounded-full bg-white/[0.12] text-white/80 mb-3.5">
              People Transport
            </span>
            <h3 className="font-display font-extrabold text-[1.8rem] text-white leading-[1.15] mb-2.5">
              Travel Anywhere<br />in Nigeria
            </h3>
            <p className="text-sm leading-[1.7] text-white/70 mb-6">
              Book a private intercity ride from any state to another. Choose your vehicle class, negotiate a fair price, and travel on your schedule — no waiting for buses or shared vans.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {[
                "Sedan, SUV, or Power Bike",
                "Price negotiation with 20% max discount",
                "Verified, background-checked drivers",
                "Real-time trip tracking",
                "Multiple payment options",
              ].map((f) => (
                <li key={f} className="text-[0.85rem] text-white/60 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/55 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#vehicles"
              className="inline-flex items-center gap-2 bg-primary text-white font-display font-bold text-[0.875rem] px-6 py-3 rounded-full no-underline hover:bg-primary-deep hover:-translate-y-px transition-all"
            >
              See Vehicle Options →
            </a>
          </div>
        </Reveal>

        {/* Cargo & Logistics */}
        <Reveal delay={80}>
          <div className="bg-white/[0.05] rounded-[28px] p-12 px-10 relative overflow-hidden border border-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] group">
            <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] bg-[radial-gradient(circle,_rgba(255,255,255,0.07)_0%,_transparent_70%)] pointer-events-none" />
            <span className="text-[3.5rem] block mb-5">📦</span>
            <span className="inline-block text-[0.65rem] font-bold font-display uppercase tracking-[0.12em] px-3 py-1 rounded-full bg-primary/20 text-primary-light mb-3.5">
              Cargo &amp; Logistics
            </span>
            <h3 className="font-display font-extrabold text-[1.8rem] text-white leading-[1.15] mb-2.5">
              Ship Packages<br />Across States
            </h3>
            <p className="text-sm leading-[1.7] text-white/55 mb-6">
              Send goods, parcels, and cargo from one state to another reliably and affordably. From small packages to large freight — Azinel gets it there safely, with full tracking every step of the way.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {[
                "Small parcels to full cargo loads",
                "Pickups, vans & trucks available",
                "Negotiate delivery rates",
                "Door-to-door or terminal pickup",
                "Live shipment tracking",
              ].map((f) => (
                <li key={f} className="text-[0.85rem] text-white/60 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-display font-bold text-[0.875rem] px-6 py-3 rounded-full border border-white/15 no-underline hover:bg-white/[0.18] hover:-translate-y-px transition-all"
            >
              Ship a Package →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
