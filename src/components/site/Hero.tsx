import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTypewriter } from "@/hooks/useTypewriter";
import gsap from "gsap";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

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
      gsap.to("[data-float]", {
        y: -6,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2,
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
              className="group"
            >
              <span className="inline-flex items-center gap-2">
                See our work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Button>
          </div>
        </div>
        <figure aria-label="Hero illustration" className="relative grid place-items-center">
          <div className="relative h-72 w-full max-w-md">
            <div className="glass-card absolute inset-0 p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Studio workflow illustration"
                loading="lazy"
                className="mx-auto h-full w-auto"
              />
            </div>
            <div data-float className="glass-card absolute -top-4 -left-4 w-36 rotate-[-4deg] p-3">
              <p className="text-xs font-medium">RAG • Agents</p>
              <p className="mt-1 text-[11px] text-muted-foreground">Eval + guardrails</p>
            </div>
            <div data-float className="glass-card absolute -bottom-6 -right-6 w-40 rotate-[5deg] p-3">
              <p className="text-xs font-medium">Realtime</p>
              <p className="mt-1 text-[11px] text-muted-foreground">Telemetry & dashboards</p>
            </div>
            <div data-float className="badge-soft absolute -top-8 right-10 flex items-center gap-2">
              <Sparkles className="h-4 w-4" aria-hidden />
              Ship faster
            </div>
            <div data-float className="badge-soft absolute -bottom-9 left-8 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Guardrails on
            </div>
          </div>
          <div className="pointer-events-none absolute -top-4 -right-4 h-16 w-16 rounded-full gradient-primary opacity-40 blur-xl" />
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full gradient-primary opacity-30 blur-2xl" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
