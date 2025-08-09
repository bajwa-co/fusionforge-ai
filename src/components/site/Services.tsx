import { useEffect, useRef } from "react";
import { Cpu, Bot, RadioTower, Layers3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Full‑Stack Development",
    Icon: Layers3,
    bullets: [
      "React/Vite frontends + Django/Flask backends",
      "Flutter mobile apps (Elderly Care Companion)",
      "CI/CD and cloud deploys",
    ],
  },
  {
    title: "AI & ML",
    Icon: Cpu,
    bullets: [
      "LSTM + Attention stock forecasting (TensorFlow)",
      "Text prediction dashboard with Hugging Face",
      "Eval and monitoring basics",
    ],
  },
  {
    title: "IoT Solutions",
    Icon: RadioTower,
    bullets: [
      "Real‑time telemetry dashboards",
      "Edge integrations & device control",
      "Cloud‑to‑device messaging",
    ],
  },
  {
    title: "Consulting",
    Icon: Bot,
    bullets: [
      "Architecture reviews & roadmaps",
      "MVP sprints and team enablement",
      "Performance, accessibility, SEO",
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
