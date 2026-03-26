const LogisticsStrip = () => {
  return (
    <div className="bg-primary py-[60px] px-[5%] flex items-center justify-between gap-8 flex-wrap">
      <h3 className="font-display font-extrabold text-[1.6rem] text-white max-w-[500px] leading-[1.3]">
        Need to move goods across states?<br />Azinel Logistics has you covered.
      </h3>
      <a
        href="#download"
        className="inline-flex items-center gap-2 bg-white text-primary font-display font-bold text-[0.9rem] px-7 py-3.5 rounded-full no-underline whitespace-nowrap hover:bg-background hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all"
      >
        Get the App — Start Shipping →
      </a>
    </div>
  );
};

export default LogisticsStrip;
