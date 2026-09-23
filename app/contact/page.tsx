import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Reveal, Stagger, StaggerItem } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Physara team about simulation infrastructure, robot training, technical partnerships or a live product session.",
};

const expectations = [
  {
    num: "01",
    title: "Tell us the task",
    body: "What the robot needs to learn, where it struggles today and what a good result actually looks like.",
  },
  {
    num: "02",
    title: "We rebuild it in sim",
    body: "We recreate the task, the surface and the disturbances that make it fail, then run it at scale.",
  },
  {
    num: "03",
    title: "You get the evidence",
    body: "Traces, success curves and failure cases you can take back to your own hardware schedule.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="01 / Contact"
        title="Build the next body with us."
        body="Talk to the Physara team about simulation infrastructure, robot training, technical partnerships or a live product session."
      />

      <section className="py-16 lg:py-20">
        <div className="wrap grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <div
              className="relative h-full overflow-hidden rounded-2xl border border-line p-7"
              style={{
                background:
                  "radial-gradient(380px 260px at 18% 15%, var(--accent-soft), transparent 62%), var(--panel)",
              }}
            >
              <div className="mono-label text-accent">Physara / HQ</div>

              <div className="mt-12 flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line font-display text-lg text-accent glow-accent">
                  ⌖
                </span>
                <div>
                  <strong className="block font-display text-[24px] font-semibold tracking-[-0.018em]">
                    Lagos Island
                  </strong>
                  <p className="mono-label mt-1.5">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="my-6 h-px bg-line" />

              <dl className="grid gap-3">
                <div className="flex items-center justify-between gap-4">
                  <dt className="mono-label">General</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="mono-label text-text transition-colors hover:text-accent"
                    >
                      {site.email} ↗
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="mono-label">Focus</dt>
                  <dd className="mono-label text-right text-text">
                    Simulation · Robotics · Physical skills
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="mono-label">Status</dt>
                  <dd className="mono-label flex items-center gap-2 text-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_var(--lime)]" />
                    Available for technical conversations
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative h-full overflow-hidden rounded-2xl border border-line p-7 sm:p-9"
              style={{
                background:
                  "radial-gradient(420px 220px at 86% 24%, var(--accent-soft), transparent 62%), var(--panel)",
              }}
            >
              <div className="pointer-events-none absolute -bottom-36 -right-28 h-80 w-80 rounded-full border border-accent/15 shadow-[0_0_0_60px_var(--accent-soft)]" />
              <div className="relative">
                <div className="mono-label text-accent">
                  Start a conversation
                </div>
                <h2 className="mt-3 mb-5 font-display text-[38px] font-semibold leading-[1.1] tracking-[-0.022em] sm:text-[46px] lg:text-[54px]">
                  Bring a task.
                  <br />
                  <span className="text-gradient">Let&rsquo;s test it.</span>
                </h2>
                <p className="max-w-[52ch] text-[17px] leading-[1.62] text-muted">
                  Tell us what the robot needs to learn, where it struggles today
                  and what a good result looks like. We can start from there.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href={`mailto:${site.email}?subject=Physara%20Technical%20Conversation`}
                  >
                    Contact the team <span>→</span>
                  </ButtonLink>
                  <ButtonLink href="/live-sim" variant="secondary">
                    Run the live sim <span>↗</span>
                  </ButtonLink>
                </div>
                <p className="mono-label mt-5">
                  Lagos Island · West Africa · Robotics and simulation
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <div className="mono-label text-accent">02 / What to expect</div>
            <h2 className="display-md mb-12 mt-3 max-w-[700px]">
              Three steps from first email to evidence.
            </h2>
          </Reveal>

          <Stagger className="grid gap-4 md:grid-cols-3">
            {expectations.map((e) => (
              <StaggerItem
                key={e.num}
                className="rounded-2xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-accent/40"
              >
                <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-accent">
                  {e.num}
                </span>
                <h3 className="mt-8 font-display text-[20px] font-semibold tracking-[-0.015em]">
                  {e.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.62] text-muted">
                  {e.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
