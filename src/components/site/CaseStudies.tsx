import { useState } from "react";
import elderlyImg from "@/assets/proj-elderly-care.webp";
import textDashImg from "@/assets/proj-text-dashboard.webp";
import stockLstmImg from "@/assets/proj-stock-lstm.webp";
import millionLlmImg from "@/assets/proj-million-llm.webp";
import bertImg from "@/assets/proj-bert.webp";
import valentinesImg from "@/assets/proj-valentines.webp";

interface CaseStudy {
  title: string;
  summary: string;
  tags: string[];
  note: string;
  image?: string;
  source: string;
  href?: string;
}

// Real content pulled from GitHub profile repos
const items: CaseStudy[] = [
  {
    title: "Elderly Care Companion",
    summary:
      "Flutter + Django app for medication schedules, appointments, AI companion, and emergency alerts.",
    tags: ["Flutter", "Django", "Firestore", "TensorFlow"],
    note: "From GitHub README — 2 stars.",
    image: elderlyImg,
    source: "GitHub",
    href: "https://github.com/Abdullah007bajwa/Elderly_Care_Companion",
  },
  {
    title: "AI Text Prediction Dashboard",
    summary:
      "Flask app with Hugging Face model streaming predictions in a live dashboard.",
    tags: ["Flask", "Hugging Face", "Realtime"],
    note: "From GitHub README — live demo linked in repo.",
    image: textDashImg,
    source: "GitHub",
    href: "https://github.com/Abdullah007bajwa/cuddly-fortnight",
  },
  {
    title: "Stock Pattern Prediction (LSTM + Attention)",
    summary:
      "TensorFlow model forecasting next candle patterns with an accompanying Flask UI.",
    tags: ["TensorFlow", "LSTM", "Attention", "Flask"],
    note: "From GitHub README — 1 star.",
    image: stockLstmImg,
    source: "GitHub",
    href: "https://github.com/Abdullah007bajwa/Advanced-Stock-Pattern-Prediction-using-LSTM-with-Attention-Mechanism-in-TensorFlow",
  },
  {
    title: "Million‑Parameter LLM",
    summary:
      "Educational Python notebook building a small LLM from scratch with training curves.",
    tags: ["Python", "Jupyter", "LLM"],
    note: "From GitHub README.",
    image: millionLlmImg,
    source: "GitHub",
    href: "https://github.com/Abdullah007bajwa/Million-Parameter-LLM",
  },
  {
    title: "BERT (research fork)",
    summary:
      "TensorFlow code and pre‑trained models for BERT research (fork).",
    tags: ["TensorFlow", "BERT", "NLP"],
    note: "Fork of google‑research/bert.",
    image: bertImg,
    source: "GitHub",
    href: "https://github.com/Abdullah007bajwa/bert",
  },
  {
    title: "Valentine’s Day Experiment",
    summary:
      "Playful web app with animated interactions and persuasive UX.",
    tags: ["HTML", "CSS", "JavaScript"],
    note: "From GitHub README.",
    image: valentinesImg,
    source: "GitHub",
    href: "https://github.com/Abdullah007bajwa/Valentines-Day-Experiment",
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
                  <div className="flex h/full flex/col items/center justify/center p/4 text/center">
                    <p className="text-sm text-muted-foreground">{cs.note}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Source: {cs.source}</p>
                    {cs.href && (
                      <a
                        href={cs.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs hover:bg-accent"
                        aria-label={`View ${cs.title} on GitHub`}
                      >
                        View repo
                      </a>
                    )}
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
