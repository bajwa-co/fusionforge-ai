import React from "react";

const logos = [
  { name: "Acme", src: "/placeholder.svg" },
  { name: "BoldCorp", src: "/placeholder.svg" },
  { name: "PixelPay", src: "/placeholder.svg" },
  { name: "DataSphere", src: "/placeholder.svg" },
  { name: "CloudKit", src: "/placeholder.svg" },
  { name: "Integrato", src: "/placeholder.svg" },
];

const LogosStrip = () => {
  return (
    <section aria-label="Client logos" className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <div className="mb-6 text-center">
          <p className="text-sm text-muted-foreground">Trusted by teams we work with</p>
        </div>
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center">
              <img
                src={l.src}
                alt={`${l.name} logo`}
                loading="lazy"
                className="h-10 w-auto opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosStrip;
