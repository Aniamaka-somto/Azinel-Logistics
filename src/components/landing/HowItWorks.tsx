import { useState } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Enter your destination",
    desc: "Open the Azinel app, type your departure state and destination. We'll show you estimated fares in seconds.",
  },
  {
    num: "02",
    title: "Choose your vehicle class",
    desc: "Pick between a comfortable Sedan, spacious SUV, or fast Power Bike — depending on your needs and budget.",
  },
  {
    num: "03",
    title: "Negotiate your fare",
    desc: "Counter-offer the listed price. Drivers can accept or counter back. Maximum discount is capped at 20% — fair for both sides.",
  },
  {
    num: "04",
    title: "Pay & hit the road",
    desc: "Pay via cash, card, bank transfer, or your Azinel wallet. Your driver is confirmed and en route.",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-[100px] px-[5%]">
      <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary font-display mb-4">
        The Process
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-[60px]">
        <div>
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4">
              Booking a ride has never been this <em className="not-italic text-primary">straightforward</em>
            </h2>
          </Reveal>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div
                  className="flex gap-6 py-7 border-b border-foreground/[0.08] last:border-b-0 cursor-pointer group"
                  onClick={() => setActiveStep(i)}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-display font-extrabold text-[0.9rem] flex-shrink-0 transition-all ${
                      activeStep === i
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1.5 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Route visualization */}
        <Reveal className="bg-secondary rounded-[28px] p-10 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-[radial-gradient(circle,_hsl(0_85%_48%_/_0.3)_0%,_transparent_70%)]" />
          <svg width="100%" viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg">
            <circle cx="170" cy="130" r="100" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <circle cx="170" cy="130" r="70" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <path d="M80 180 Q130 100 170 130 Q210 160 260 80" fill="none" stroke="hsl(0, 85%, 48%)" strokeWidth="2.5" strokeDasharray="8 4" opacity="0.8" />
            <circle cx="80" cy="180" r="10" fill="hsl(0, 0%, 18%)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <text x="80" y="184" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">A</text>
            <circle cx="170" cy="130" r="6" fill="hsl(0, 85%, 48%, 0.5)" stroke="hsl(0, 85%, 48%)" strokeWidth="1.5" />
            <circle cx="260" cy="80" r="10" fill="hsl(0, 85%, 48%)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <text x="260" y="84" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">B</text>
            <text x="68" y="202" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif" textAnchor="middle">Port Harcourt</text>
            <text x="262" y="70" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif" textAnchor="middle">Abuja</text>
            <g transform="translate(152, 112)">
              <rect x="0" y="6" width="28" height="14" rx="3" fill="hsl(0, 85%, 48%)" />
              <rect x="4" y="2" width="20" height="10" rx="2" fill="hsl(0, 85%, 48%, 0.7)" />
              <circle cx="6" cy="20" r="3.5" fill="hsl(0, 0%, 12%)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <circle cx="22" cy="20" r="3.5" fill="hsl(0, 0%, 12%)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>
            <text x="170" y="248" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="sans-serif">~7 hrs · ₦28,500 base fare</text>
          </svg>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
