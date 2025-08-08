const TeamCred = () => {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="mb-10 text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Team & Credibility</h2>
        <p className="mt-2 text-muted-foreground">
          Project credits compiled from open-source work across AI, drones, and full‑stack apps.
        </p>
      </header>
      <div className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
        See content provenance in <code>src/content/ecofusion.json</code>.
      </div>
    </section>
  );
};

export default TeamCred;
