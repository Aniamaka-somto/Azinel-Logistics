import Reveal from "./Reveal";

const payMethods = [
  { label: "Cash", color: "bg-secondary" },
  { label: "Debit Card", color: "bg-blue-600" },
  { label: "Bank Transfer", color: "bg-primary" },
  { label: "Azinel Wallet", color: "bg-violet-600" },
  { label: "USSD", color: "bg-sky-500" },
];

const PaymentMethods = () => {
  return (
    <section className="bg-muted py-20 px-[5%]">
      <div className="flex justify-between items-center flex-wrap gap-10">
        <div>
          <div className="text-xs font-semibold tracking-[0.12em] uppercase text-primary font-display mb-2">
            Payments
          </div>
          <h3 className="font-display text-2xl font-extrabold mt-2">Pay however suits you</h3>
        </div>
        <Reveal>
          <div className="flex flex-wrap gap-3.5">
            {payMethods.map((m) => (
              <div
                key={m.label}
                className="bg-white border border-foreground/10 rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all"
              >
                <span className={`w-2 h-2 rounded-full ${m.color}`} />
                {m.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PaymentMethods;
