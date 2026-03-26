import azinel from "/azinel.png"; // ← Replace with the new logo above

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-white/[0.06] pt-[60px] pb-10 px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-2">
        {/* Logo Column */}
        <div className="col-span-2 md:col-span-1">
          <img
            src={azinel}
            alt="Azinel Logistics"
            className="h-14 w-auto " // ← Reduced height + good spacing
          />
          <p className="text-sm text-white/50 leading-[1.7] max-w-[260px]">
            Nigeria's intercity travel &amp; logistics platform. Move people,
            move cargo — negotiate your price, choose your vehicle, pay your
            way.
          </p>
        </div>

        {/* Company */}
        <div>
          <h5 className="font-display text-xs font-bold text-white/40 uppercase tracking-[0.1em] mb-4">
            COMPANY
          </h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Riders */}
        <div>
          <h5 className="font-display text-xs font-bold text-white/40 uppercase tracking-[0.1em] mb-4">
            RIDERS
          </h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                How to Book
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Safety
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Logistics */}
        <div>
          <h5 className="font-display text-xs font-bold text-white/40 uppercase tracking-[0.1em] mb-4">
            LOGISTICS
          </h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Ship a Package
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Freight Options
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Track Shipment
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Business Rates
              </a>
            </li>
          </ul>
        </div>

        {/* Drivers */}
        <div>
          <h5 className="font-display text-xs font-bold text-white/40 uppercase tracking-[0.1em] mb-4">
            DRIVERS
          </h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Drive with Azinel
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Requirements
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Driver Portal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar unchanged */}
      <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center flex-wrap gap-3">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Azinel Logistics. All rights reserved.
        </p>
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
