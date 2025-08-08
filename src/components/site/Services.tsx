import { useEffect, useRef } from "react";
import { Cpu, Bot, RadioTower, Layers3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "LLM & NLP Systems",
    Icon: Cpu,
    bullets: [
      "RAG pipelines with vector search",
      "Fine-tuning and evaluation",
      "Observability & guardrails",
    ],
  },
  {
    title: "Automation & Agents",
    Icon: Bot,
    bullets: [
      "Multi-tool agents and workflows",
      "Browser/RPA + API orchestration",
      "Eval harnesses & safety rails",
    ],
  },
  {
    title: "IoT & Robotics",
    Icon: RadioTower,
    bullets: [
      "DJI Tello and edge vision demos",
      "Realtime telemetry dashboards",
      "Cloud-to-edge control",
    ],
  },
  {
    title: "Full‑Stack Delivery",
    Icon: Layers3,
    bullets: [
      "React/Vite frontends",
      "Node/Python inference APIs",
      "CI/CD & cloud deploy",
    ],
  },
];

const Services = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-service]", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="mb-10 text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Services</h2>
        <p className="mt-2 text-muted-foreground">From prototype to production—end to end.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, Icon, bullets }) => (
          <article
            key={title}
            data-service
            className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover-scale"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-primary-foreground shadow-[var(--shadow-elegant)] ring-1 ring-border">
                <Icon aria-hidden />
              </div>
              <h3 className="font-medium">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
