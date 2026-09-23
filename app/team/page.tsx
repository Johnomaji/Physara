import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TeamTabs } from "@/components/team-tabs";
import { ButtonLink, Reveal, SectionHead, Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team",
  description:
    "A distributed team across Nigeria, South Africa, Kenya, Ghana and Rwanda building practical robot skills.",
};

const values = [
  {
    num: "01",
    title: "Build, then measure",
    body: "Every claim about a skill should be backed by a trial we can point at, repeat and argue about.",
  },
  {
    num: "02",
    title: "Failure is the data",
    body: "The trials that break are the ones worth keeping. They tell us where the model and the world disagree.",
  },
  {
    num: "03",
    title: "Distributed by default",
    body: "Five countries, one simulation stack. Written decisions, reproducible runs and shared telemetry.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        overline="01 / Team"
        title="A distributed team building practical robot skills."
        body="Our team brings together robotics, simulation and systems engineering, with a simple working style: build, test, learn and improve."
        meta={[
          ["Countries", "Nigeria · South Africa · Kenya · Ghana · Rwanda"],
          ["Disciplines", "Robotics · Simulation · Infrastructure"],
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="wrap">
          <Reveal>
            <TeamTabs />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="wrap">
          <SectionHead
            overline="02 / How we work"
            title="Three habits that shape the stack."
            body="The platform reflects the way the team works. These are the principles we keep coming back to when we decide what to build next."
          />

          <Stagger className="grid gap-4 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem
                key={v.num}
                className="group rounded-2xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-accent/40"
              >
                <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-accent">
                  {v.num}
                </span>
                <h3 className="mt-8 font-display text-[20px] font-semibold tracking-[-0.015em]">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.62] text-muted">
                  {v.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                Work with us <span>→</span>
              </ButtonLink>
              <ButtonLink href="/live-sim" variant="secondary">
                See the simulation <span>↗</span>
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
