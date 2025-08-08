import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Discover", text: "Quick audit + feasibility review." },
  { title: "Design", text: "Scope, metrics, and delivery plan." },
  { title: "Build", text: "Sprint dev with weekly demos." },
  { title: "Ship", text: "Deploy, monitor, iterate." },
];

const Timeline = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-dot]").forEach((el: any, i) => {
        gsap.from(el, {
          scale: 0.5,
          opacity: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          delay: i * 0.05,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={ref} className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="mb-10 text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">How we work</h2>
        <p className="mt-2 text-muted-foreground">Tight feedback loops, measurable outcomes.</p>
      </header>

      <ol className="relative mx-auto grid gap-10 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="text-center">
            <div data-dot className="mx-auto h-3 w-3 rounded-full gradient-primary shadow-[var(--shadow-glow)]" />
            <h3 className="mt-4 font-medium">{i + 1}. {s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
