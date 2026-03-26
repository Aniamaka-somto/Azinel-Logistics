import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[5%] pt-[100px] pb-[60px] gap-[60px] relative overflow-hidden">
      {/* Orange glow */}
      <div className="absolute -top-[60px] -right-[80px] w-[560px] h-[560px] bg-[radial-gradient(circle,_hsl(0_85%_48%_/_0.18)_0%,_transparent_70%)] pointer-events-none" />

      <Reveal>
        <div className="inline-flex items-center gap-2 bg-secondary text-background px-3.5 py-1.5 rounded-full sm:text-xs text-[10px] font-semibold uppercase tracking-[0.08em] mb-6">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Intercity Travel &amp; Logistics — Nigeria
        </div>

        <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground mb-6">
          Your Ride. Your Cargo.{" "}
          <em className="not-italic text-primary">Your Rules.</em>
        </h1>

        <p className="text-lg leading-[1.7] text-muted-foreground max-w-[480px] mb-10">
          Book intercity rides or ship packages across any state in Nigeria.
          Negotiate your fare, choose your vehicle, and pay however you like —
          Azinel handles it all.
        </p>

        <div className="flex gap-4 flex-wrap items-center mb-[60px]">
          <a
            href="#download"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold font-display no-underline inline-flex items-center gap-2.5 shadow-[0_4px_24px_hsl(0_85%_48%_/_0.25)] hover:bg-primary-deep hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(0_85%_48%_/_0.35)] transition-all"
          >
            Download the App →
          </a>
          <a
            href="#how-it-works"
            className="bg-transparent text-foreground px-7 py-4 rounded-full border-[1.5px] border-foreground/20 text-[0.95rem] font-medium no-underline inline-flex items-center gap-2 hover:border-foreground hover:-translate-y-0.5 transition-all"
          >
            See how it works
          </a>
        </div>

        <div className="flex gap-10 border-t border-foreground/10 pt-9">
          <div>
            <div className="font-display text-[2rem] font-extrabold text-foreground leading-none">
              36+
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              States covered
            </div>
          </div>
          <div>
            <div className="font-display text-[2rem] font-extrabold text-foreground leading-none">
              2-in-1
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Travel &amp; cargo
            </div>
          </div>
          <div>
            <div className="font-display text-[2rem] font-extrabold text-foreground leading-none">
              20%
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Max fare discount
            </div>
          </div>
        </div>
      </Reveal>

      {/* Phone mockup - hidden on mobile */}
      <Reveal className="hidden lg:flex justify-center items-center relative">
        <div className="w-[280px] bg-secondary rounded-[36px] p-7 px-5 relative z-[2] shadow-[0_40px_80px_hsl(0_0%_7%_/_0.35),_0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="w-20 h-[22px] bg-black/40 rounded-full mx-auto mb-6" />

          {/* Map */}
          <div className="bg-secondary-mid rounded-2xl p-4 mb-4 relative h-40 overflow-hidden">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 240 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 64 Q60 30 120 64 Q180 98 230 64"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="6"
              />
              <path
                d="M10 64 Q60 30 120 64 Q180 98 230 64"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="12"
              />
              <path
                d="M20 70 Q70 36 120 64 Q170 92 220 68"
                fill="none"
                stroke="hsl(0, 85%, 48%)"
                strokeWidth="3"
                strokeDasharray="6 3"
                opacity="0.9"
              />
              <circle
                cx="20"
                cy="70"
                r="7"
                fill="hsl(0, 0%, 18%)"
                stroke="#fff"
                strokeWidth="2"
              />
              <circle cx="20" cy="70" r="3" fill="#fff" />
              <circle
                cx="220"
                cy="68"
                r="8"
                fill="hsl(0, 85%, 48%)"
                stroke="#fff"
                strokeWidth="2"
              />
              <circle cx="90" cy="52" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="150" cy="76" r="3" fill="rgba(255,255,255,0.2)" />
              <text
                x="20"
                y="90"
                fill="rgba(255,255,255,0.6)"
                fontSize="8"
                fontFamily="sans-serif"
              >
                Abuja
              </text>
              <text
                x="195"
                y="88"
                fill="rgba(255,255,255,0.6)"
                fontSize="8"
                fontFamily="sans-serif"
              >
                Lagos
              </text>
            </svg>
          </div>

          {/* Route */}
          <div className="mb-3.5">
            <div className="text-[0.65rem] text-white/50 uppercase tracking-[0.1em] font-display mb-1.5">
              Route
            </div>
            <div className="font-display text-[0.95rem] font-bold text-white flex items-center justify-between">
              <span>Abuja, FCT</span>
              <span className="text-primary-light text-lg">→</span>
              <span>Lagos</span>
            </div>
          </div>

          {/* Vehicle chips */}
          <div className="flex gap-1.5 flex-wrap mb-3.5">
            <div className="px-2.5 py-1 rounded-full text-[0.65rem] font-display font-semibold bg-primary text-white cursor-pointer">
              Sedan
            </div>
            <div className="px-2.5 py-1 rounded-full text-[0.65rem] font-display font-semibold bg-white/10 text-white/60 cursor-pointer">
              SUV
            </div>
            <div className="px-2.5 py-1 rounded-full text-[0.65rem] font-display font-semibold bg-white/10 text-white/60 cursor-pointer">
              Bike
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between bg-white/[0.08] rounded-xl px-3.5 py-3 mb-2.5">
            <div>
              <div className="text-[0.7rem] text-white/50">Base fare</div>
              <div className="font-display font-bold text-white text-[0.9rem]">
                ₦28,500
              </div>
            </div>
            <div className="bg-primary/25 text-primary-light text-[0.6rem] font-semibold px-2 py-0.5 rounded-full font-display">
              Negotiate ↓
            </div>
          </div>

          <div className="bg-primary text-white rounded-xl py-3.5 text-center font-display font-bold text-[0.8rem] tracking-[0.05em]">
            Offer ₦24,000 → Max 20% off
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute top-[30px] left-[-60px] bg-white rounded-2xl px-[18px] py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-sm flex items-center gap-2.5 z-10">
          <div className="w-9 h-9 rounded-[10px] bg-primary/10 flex items-center justify-center text-lg">
            ✅
          </div>
          <div>
            <strong className="block font-display font-bold text-[0.85rem] text-foreground">
              Driver Accepted!
            </strong>
            <span className="text-muted-foreground text-[0.72rem]">
              ₦24,200 agreed
            </span>
          </div>
        </div>
        <div className="absolute bottom-10 right-[-50px] bg-white rounded-2xl px-[18px] py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-sm flex items-center gap-2.5 z-10">
          <div className="w-9 h-9 rounded-[10px] bg-secondary/10 flex items-center justify-center text-lg">
            🔒
          </div>
          <div>
            <strong className="block font-display font-bold text-[0.85rem] text-foreground">
              Verified Driver
            </strong>
            <span className="text-muted-foreground text-[0.72rem]">
              ⭐ 4.9 · 312 trips
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
