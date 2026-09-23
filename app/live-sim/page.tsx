import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LiveLab } from "@/components/live-lab";
import { ButtonLink, Reveal, SectionHead, Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "Live simulation",
  description:
    "Pick a task and watch a simulated humanoid robot work through it: what was tested, what happened, and whether the robot improved.",
};

const readGuide = [
  {
    num: "01",
    title: "Pick a scenario",
    body: "Recovery, manipulation or locomotion. Each one changes the task, the forces and the conditions the robot has to handle.",
  },
  {
    num: "02",
    title: "Watch the body",
    body: "Balance, contact quality, torque load and foot slip tell you whether the robot is actually in control, not just finishing the task.",
  },
  {
    num: "03",
    title: "Check the outcome",
    body: "Task success across repeated attempts is the signal that the skill is improving rather than getting lucky once.",
  },
];

export default function LiveSimPage() {
  return (
    <>
      <PageHero
        overline="01 / Live simulation"
        title="See the robot learn to handle a real challenge."
        body="Pick a task and watch a simulated robot work through it. We keep the important details visible, but the story stays simple: what did we test, what happened, and did the robot get better?"
      />

      <section className="py-16 lg:py-20">
        <div className="wrap">
          <Reveal>
            <LiveLab />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="wrap">
          <SectionHead
            overline="02 / How to read it"
            title="Three things worth watching."
            body="The interface shows a lot at once. These are the parts that actually tell you whether a skill is ready to move toward hardware."
          />

          <Stagger className="grid gap-4 md:grid-cols-3">
            {readGuide.map((g) => (
              <StaggerItem
                key={g.num}
                className="group rounded-2xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-accent/40"
              >
                <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-accent">
                  {g.num}
                </span>
                <h3 className="mt-8 font-display text-[20px] font-semibold tracking-[-0.015em]">
                  {g.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.62] text-muted">
                  {g.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                Bring us your hardest task <span>→</span>
              </ButtonLink>
              <ButtonLink href="/platform" variant="secondary">
                How the platform works <span>↗</span>
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
