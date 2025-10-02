import { Truck, RotateCcw, ShieldCheck, Banknote } from "lucide-react";

export function USPStrip() {
  const usps = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders ₹999+",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: ShieldCheck,
      title: "Imported Fabrics",
      description: "Premium quality from abroad",
    },
    {
      icon: Banknote,
      title: "COD Available",
      description: "Pay on delivery",
    },
  ];

  return (
    <section className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {usps.map((usp) => (
            <div key={usp.title} className="flex flex-col items-center text-center gap-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <usp.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm">{usp.title}</h3>
                <p className="text-xs text-muted-foreground">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
