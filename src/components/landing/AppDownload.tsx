import Reveal from "./Reveal";

const AppDownload = () => {
  return (
    <section
      id="download"
      className="bg-foreground py-[100px] px-[5%] relative overflow-hidden"
    >
      <div className="absolute -top-[100px] -left-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_hsl(0_85%_48%_/_0.2)_0%,_transparent_70%)]" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,_hsl(0_0%_7%_/_0.3)_0%,_transparent_70%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-[1]">
        <Reveal>
          <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary-light font-display mb-4">
            Get Moving
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            One app. Travel &amp; ship across Nigeria.
          </h2>
          <p className="text-[1.05rem] text-white/60 max-w-[520px] leading-[1.7] mt-6 mb-10">
            Book a ride or send a package to any state — all from the Azinel
            app. Free to download, zero hidden fees.
          </p>

          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-[14px] px-5 py-3.5 no-underline text-white hover:bg-white/[0.18] hover:-translate-y-0.5 transition-all"
            >
              <span className="text-[1.6rem]">🍎</span>
              <div>
                <small className="block text-[0.65rem] opacity-70 uppercase tracking-[0.08em]">
                  Download on the
                </small>
                <strong className="block font-display text-base font-bold">
                  App Store
                </strong>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-[14px] px-5 py-3.5 no-underline text-white hover:bg-white/[0.18] hover:-translate-y-0.5 transition-all"
            >
              <span className="text-[1.6rem]">▶</span>
              <div>
                <small className="block text-[0.65rem] opacity-70 uppercase tracking-[0.08em]">
                  Get it on
                </small>
                <strong className="block font-display text-base font-bold">
                  Google Play
                </strong>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Mini phone mockups */}
        <Reveal className="flex justify-center gap-[-20px] relative">
          {/* Phone 1 */}
          <div className="w-40 bg-white/[0.08] border border-white/15 rounded-3xl p-4 px-3 relative -rotate-[8deg] translate-y-5">
            <div className="w-[50px] h-3 bg-black/40 rounded-full mx-auto mb-4" />
            <svg
              width="100%"
              viewBox="0 0 136 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8"
                y="0"
                width="120"
                height="72"
                rx="8"
                fill="rgba(255,255,255,0.06)"
              />
              <circle cx="40" cy="36" r="20" fill="hsl(0, 0%, 7%, 0.5)" />
              <path
                d="M20 36 Q40 16 68 36"
                fill="none"
                stroke="hsl(0, 85%, 48%)"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
              <text
                x="68"
                y="90"
                textAnchor="middle"
                fill="rgba(255,255,255,0.7)"
                fontSize="10"
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                ABUJA → LAGOS
              </text>
              <rect
                x="8"
                y="100"
                width="120"
                height="24"
                rx="6"
                fill="hsl(0, 85%, 48%, 0.3)"
              />
              <text
                x="68"
                y="116"
                textAnchor="middle"
                fill="hsl(0, 80%, 55%)"
                fontSize="9"
                fontFamily="sans-serif"
              >
                Negotiate Fare
              </text>
              <rect
                x="8"
                y="132"
                width="54"
                height="40"
                rx="6"
                fill="rgba(255,255,255,0.06)"
              />
              <rect
                x="74"
                y="132"
                width="54"
                height="40"
                rx="6"
                fill="rgba(255,255,255,0.06)"
              />
              <text
                x="35"
                y="148"
                textAnchor="middle"
                fill="rgba(255,255,255,0.5)"
                fontSize="7"
                fontFamily="sans-serif"
              >
                Sedan
              </text>
              <text
                x="101"
                y="148"
                textAnchor="middle"
                fill="rgba(255,255,255,0.5)"
                fontSize="7"
                fontFamily="sans-serif"
              >
                SUV
              </text>
            </svg>
          </div>

          {/* Phone 2 */}
          <div className="w-40 bg-white/[0.08] border border-white/15 rounded-3xl p-4 px-3 relative rotate-[8deg] translate-y-5">
            <div className="w-[50px] h-3 bg-black/40 rounded-full mx-auto mb-4" />
            <svg
              width="100%"
              viewBox="0 0 136 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="68"
                y="20"
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="8"
                fontFamily="sans-serif"
              >
                Your trips
              </text>
              <rect
                x="8"
                y="28"
                width="120"
                height="40"
                rx="6"
                fill="rgba(255,255,255,0.06)"
              />
              <circle cx="26" cy="48" r="8" fill="hsl(0, 0%, 7%, 0.6)" />
              <text
                x="44"
                y="44"
                fill="rgba(255,255,255,0.8)"
                fontSize="9"
                fontFamily="sans-serif"
              >
                Enugu → PHC
              </text>
              <text
                x="44"
                y="57"
                fill="rgba(255,255,255,0.4)"
                fontSize="8"
                fontFamily="sans-serif"
              >
                Completed · ₦12,000
              </text>
              <rect
                x="8"
                y="76"
                width="120"
                height="40"
                rx="6"
                fill="rgba(255,255,255,0.06)"
              />
              <circle cx="26" cy="96" r="8" fill="hsl(0, 85%, 48%, 0.4)" />
              <text
                x="44"
                y="92"
                fill="rgba(255,255,255,0.8)"
                fontSize="9"
                fontFamily="sans-serif"
              >
                Kaduna → Abuja
              </text>
              <text
                x="44"
                y="105"
                fill="rgba(255,255,255,0.4)"
                fontSize="8"
                fontFamily="sans-serif"
              >
                Upcoming · SUV
              </text>
              <rect
                x="8"
                y="132"
                width="120"
                height="32"
                rx="8"
                fill="hsl(0, 85%, 48%)"
              />
              <text
                x="68"
                y="152"
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                Book a New Trip
              </text>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AppDownload;
