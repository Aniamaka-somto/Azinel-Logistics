const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-white/[0.06] pt-[60px] pb-10 px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[60px] mb-[60px]">
        <div>
          <span className="font-display text-xl font-extrabold text-white block mb-3.5">
            az<span className="text-primary">i</span>nel
          </span>
          <p className="text-sm text-white/50 leading-[1.7] max-w-[260px]">
            Nigeria's intercity private transport platform. Negotiate your fare, choose your ride, travel safe.
          </p>
        </div>

        <div>
          <h5 className="font-display text-xs font-bold text-white/40 uppercase tracking-[0.1em] mb-4">Company</h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Press</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-display text-xs font-bold text-white/40 uppercase tracking-[0.1em] mb-4">Riders</h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">How to Book</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Safety</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Contact Support</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-display text-xs font-bold text-white/40 uppercase tracking-[0.1em] mb-4">Drivers</h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Drive with Azinel</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Requirements</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Earnings</a></li>
            <li><a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">Driver Portal</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center flex-wrap gap-3">
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Azinel Logistics. All rights reserved.</p>
        <div className="flex gap-3">
          {["𝕏", "in", "ig", "f"].map((s) => (
            <a
              key={s}
              href="#"
              className="w-9 h-9 rounded-[10px] bg-white/[0.08] border border-white/10 flex items-center justify-center no-underline text-white/70 text-sm hover:bg-primary hover:border-primary transition-all"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
