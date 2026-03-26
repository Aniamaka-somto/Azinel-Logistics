import azinel from "/azinel.png"; // Use the new optimized logo

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] py-[18px] bg-background/90 backdrop-blur-[12px] border-b border-foreground/[0.08]">
      {/* Logo Container */}
      <div className="flex items-center">
        <img
          src={azinel}
          alt="Azinel Logistics"
          className="h-10 w-auto" // Try h-8 or h-10 if needed
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-foreground/70 no-underline hover:text-foreground/100 transition-opacity"
          >
            How It Works
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-sm font-medium text-foreground/70 no-underline hover:text-foreground/100 transition-opacity"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#vehicles"
            className="text-sm font-medium text-foreground/70 no-underline hover:text-foreground/100 transition-opacity"
          >
            Vehicles
          </a>
        </li>
        <li>
          <a
            href="#why-us"
            className="text-sm font-medium text-foreground/70 no-underline hover:text-foreground/100 transition-opacity"
          >
            Why Azinel
          </a>
        </li>
        <li>
          <a
            href="#download"
            className="text-sm font-medium text-foreground/70 no-underline hover:text-foreground/100 transition-opacity"
          >
            Download
          </a>
        </li>
      </ul>

      {/* CTA Button */}
      <a
        href="#download"
        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold font-display no-underline hover:bg-primary-deep hover:-translate-y-px transition-all"
      >
        Get the App
      </a>
    </nav>
  );
};

export default Navbar;
