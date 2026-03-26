import Reveal from "./Reveal";

const usps = [
  {
    icon: "🤝",
    title: "Negotiate Your Fare",
    desc: "Unlike fixed-price apps, Azinel lets you haggle. Counter the base price — drivers can accept or respond, with a 20% max discount protecting both parties.",
  },
  {
    icon: "🛡️",
    title: "Verified Interstate Drivers",
    desc: "Every driver on Azinel is screened, verified, and rated. You see their profile, trip history, and reviews before you book.",
  },
  {
    icon: "🗺️",
    title: "Nationwide Coverage",
    desc: "From Lagos to Maiduguri, Enugu to Sokoto — Azinel connects every state in Nigeria through a network of trusted drivers.",
  },
  {
    icon: "💳",
    title: "Flexible Payments",
    desc: "Cash, debit card, bank transfer, or your Azinel wallet. Pay the way that works best for you.",
  },
];

const payments = ["💵 Cash", "💳 Debit Card", "🏦 Bank Transfer", "👛 Azinel Wallet", "📱 USSD"];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-[100px] px-[5%]">
      <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary font-display mb-4">
        Why Azinel
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-[60px]">
        <div>
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
              More than just a ride — it's a <em className="not-italic text-primary">fair deal</em>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-7 mt-10">
            {usps.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-[14px] bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1.5">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="bg-card rounded-[28px] p-10 border border-foreground/[0.08]">
            <div className="text-center py-10 border-b border-foreground/[0.08] mb-8">
              <div className="font-display font-extrabold text-[5rem] leading-none text-primary">20%</div>
              <div className="text-sm text-muted-foreground mt-2">Maximum negotiable discount on every trip</div>
            </div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.08em] font-display mb-4">
              Accepted payments
            </p>
            <div className="flex flex-wrap gap-2.5">
              {payments.map((p) => (
                <div
                  key={p}
                  className="bg-white border border-foreground/[0.08] rounded-[10px] px-4 py-2.5 text-sm font-medium text-foreground flex items-center gap-1.5"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
