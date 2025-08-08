import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "How we work" },
  { href: "#team", label: "Team" },
];

const EcoNav = () => {
  const [condensed, setCondensed] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        condensed ? "py-2" : "py-4"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-lg font-semibold story-link" aria-label="Eco Fusion home">
          Eco Fusion
        </a>
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="ghost" asChild>
            <a href="#projects">Work</a>
          </Button>
          <Button size="sm" variant="hero" asChild>
            <a href="#contact">Request demo</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default EcoNav;
