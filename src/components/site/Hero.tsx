import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTypewriter } from "@/hooks/useTypewriter";
import gsap from "gsap";

const specialties = ["AI Automation", "Full‑Stack", "IoT Agents"];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { text, blink } = useTypewriter(specialties, 70, 1000);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 16,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(600px 600px at var(--mx,50%) var(--my,50%), hsl(var(--gradient-start)/0.25), transparent 70%)",
        }}
      />
      <div
        className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 grid items-center gap-10 md:grid-cols-2"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setCursorPos({ x, y });
          (e.currentTarget as HTMLDivElement).style.setProperty("--mx", `${x}%`);
          (e.currentTarget as HTMLDivElement).style.setProperty("--my", `${y}%`);
        }}
      >
        <div>
          <p data-hero-fade className="mb-3 text-sm text-muted-foreground">Eco Fusion • Automation Studio</p>
          <h1
            data-hero-fade
            className={cn(
              "max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
            )}
          >
            AI automation, full‑stack apps, and IoT agents.
          </h1>
          <p
            data-hero-fade
            className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            An applied studio turning prototypes into production—fast, measurable, maintainable.
          </p>
          <div data-hero-fade className="mt-5 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{text}</span>
              <span aria-hidden className={cn("ml-0.5", blink ? "opacity-100" : "opacity-0")}>
                |
              </span>
            </span>
          </div>
          <div data-hero-fade className="mt-7 flex flex-wrap items-center gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Request a demo"
            >
              Request a demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="See our work"
            >
              See our work
            </Button>
          </div>
        </div>
        <figure aria-label="Hero illustration" className="relative">
          <div className="rounded-2xl border bg-card/80 p-4 shadow-sm ring-1 ring-border backdrop-blur">
            <img
              src="/placeholder.svg"
              alt="Studio workflow illustration"
              loading="lazy"
              className="mx-auto h-64 w-auto"
            />
          </div>
          <div className="pointer-events-none absolute -top-4 -right-4 h-16 w-16 rounded-full gradient-primary opacity-40 blur-xl" />
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full gradient-primary opacity-30 blur-2xl" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
