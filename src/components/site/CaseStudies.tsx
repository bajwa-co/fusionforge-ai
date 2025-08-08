import { useState } from "react";

interface CaseStudy {
  title: string;
  summary: string;
  tags: string[];
  note: string;
  image?: string;
  source: string;
}

// Copy synthesized due to missing repo access
const items: CaseStudy[] = [
  {
    title: "Realtime Text Prediction Dashboard",
    summary:
      "Interactive web UI connected to a hosted transformer for streaming inference and metrics.",
    tags: ["Hugging Face", "LangChain", "React"],
    note: "Demo UI streams tokens and charts response latency.",
    image: "/placeholder.svg",
    source: "synthesized from typical LLM dashboard patterns",
  },
  {
    title: "Tello Drone Face‑Tracking",
    summary:
      "Flask + React controller for a DJI Tello with OpenCV-based face tracking and telemetry.",
    tags: ["OpenCV", "Flask", "Tello API"],
    note: "Real-time control with autonomous tracking sequences.",
    image: "/placeholder.svg",
    source: "synthesized from common IoT drone demos",
  },
  {
    title: "AI Customer Support Chatbot",
    summary:
      "Retrieval-augmented assistant answering FAQs using your docs with citations and safety rails.",
    tags: ["Retrieval", "LLM", "React"],
    note: "Deployed sandbox shows accurate answers with sources.",
    image: "/placeholder.svg",
    source: "synthesized from full-stack chatbot apps",
  },
];

const CaseStudies = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="mb-10 text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Selected Work</h2>
        <p className="mt-2 text-muted-foreground">Brief case studies with live demos.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((cs, idx) => {
          const flipped = active === idx;
          return (
            <article
              key={cs.title}
              className="[perspective:1000px]"
              aria-live="polite"
            >
              <div
                className={
                  "relative h-64 w-full rounded-lg border bg-card p-4 shadow-sm transition-transform duration-500 [transform-style:preserve-3d] hover:-translate-y-1 hover:shadow-md" +
                  (flipped ? " [transform:rotateY(180deg)]" : "")
                }
                onClick={() => setActive(flipped ? null : idx)}
                role="button"
                aria-expanded={flipped}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(flipped ? null : idx);
                }}
              >
                {/* Front */}
                <div className="absolute inset-0 grid place-items-center [backface-visibility:hidden]">
                  <img
                    src={cs.image}
                    alt={`${cs.title} preview`}
                    loading="lazy"
                    className="h-24 w-24 opacity-90"
                  />
                  <div className="mt-3 text-center">
                    <h3 className="font-medium">{cs.title}</h3>
                    <p className="mt-1 px-4 text-sm text-muted-foreground">{cs.summary}</p>
                    <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                      {cs.tags.map((t) => (
                        <span key={t} className="rounded border px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 rotate-y-180 rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                    <p className="text-sm text-muted-foreground">{cs.note}</p>
                    <p className="mt-3 text-xs text-muted-foreground">Source: {cs.source}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;
