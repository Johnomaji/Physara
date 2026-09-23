import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[62vh] flex-col justify-center py-24">
      <div className="mono-label text-accent">Error / 404</div>
      <h1 className="display-lg mt-3 mb-6 max-w-[640px]">
        That scenario isn&rsquo;t in the holdout set.
      </h1>
      <p className="max-w-[560px] text-[18px] leading-[1.62] text-muted">
        The page you were looking for doesn&rsquo;t exist. Head back to the
        simulation and pick a task that does.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/">
          Back to home <span>→</span>
        </ButtonLink>
        <ButtonLink href="/live-sim" variant="secondary">
          Run the live sim <span>↗</span>
        </ButtonLink>
      </div>
    </section>
  );
}
