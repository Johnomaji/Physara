import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProgressChart } from "@/components/progress-chart";
import {
  ButtonLink,
  Reveal,
  SectionHead,
  Signal,
  Stagger,
  StaggerItem,
} from "@/components/ui";
import { architecture, pipelineSteps, traceLines, transferSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "A simulation stack built for the way robots actually move: body models, contact worlds, skill training, stress testing and transfer.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        overline="01 / Platform"
        title="A simulation stack built for the way robots actually move."
        body="Physara starts with the physical details that matter: body movement, contact, balance, hands, sensors and actuators. Everything else is built around them."
        meta={[
          ["Focus", "Contact-rich dynamics"],
          ["Compute", "GPU-native parallel sim"],
          ["Output", "Policies + evidence"],
        ]}
      />

      <Architecture />
      <TrainingLoop />
      <Observability />
      <Transfer />
    </>
  );
}

function Architecture() {
  return (
    <section className="py-20 lg:py-24">
      <div className="wrap">
        <SectionHead
          overline="02 / Architecture"
          title="From a robot model to a testable skill."
          body="The platform focuses on the parts that are hardest to reproduce on hardware: whole-body contact, dexterous hands, balance, collisions and recovery."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-panel">
            <div className="flex flex-col gap-3 border-b border-line p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-display text-[13px] font-semibold">
                  Physara simulation architecture
                </div>
                <div className="mono-label mt-1">
                  From a robot model to a testable skill
                </div>
              </div>
              <Signal>Fast parallel simulation</Signal>
            </div>

            <Stagger className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
              {architecture.map((a) => (
                <StaggerItem
                  key={a.num}
                  className="group relative min-h-[225px] bg-panel p-5 transition-colors hover:bg-panel-2"
                >
                  <div className="mono-label">{a.num}</div>
                  <span
                    className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-lg border border-line font-mono text-[10px] transition-transform duration-300 group-hover:scale-110"
                    style={{ color: a.color }}
                  >
                    {a.icon}
                  </span>
                  <h3 className="mt-11 font-display text-[17px] font-semibold tracking-[-0.035em]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-[1.62] text-muted">
                    {a.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {[
              ["Contact", "realistic"],
              ["Hands", "detailed"],
              ["Motion", "modeled"],
            ].map(([k, v]) => (
              <span
                key={k}
                className="rounded-lg border border-line px-2.5 py-2 font-mono text-[8px] text-muted"
              >
                <b className="font-medium text-text">{k}</b> {v}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrainingLoop() {
  return (
    <section className="border-t border-line py-20 lg:py-24">
      <div className="wrap">
        <SectionHead
          overline="03 / Training loop"
          title="Practise the difficult moments before hardware."
          body="Create difficult situations, see how the robot responds, improve the skill, and test it again. The point is simple: more useful practice before physical testing."
        />

        <div className="grid gap-4 lg:grid-cols-[0.74fr_1.26fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-panel p-5">
              <div className="mono-label">How a skill improves</div>
              {pipelineSteps.map((s) => (
                <div
                  key={s.no}
                  className="grid grid-cols-[30px_1fr_auto] items-center gap-3 border-b border-line py-3.5 last:border-0"
                >
                  <span className="mono-label">{s.no}</span>
                  <div>
                    <h4 className="font-display text-xs font-semibold">
                      {s.title}
                    </h4>
                    <span className="mono-label mt-0.5 block">{s.sub}</span>
                  </div>
                  <span
                    className={`font-mono text-[7px] font-medium uppercase tracking-[0.08em] ${
                      s.risk ? "text-mag" : "text-lime"
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ProgressChart />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Observability() {
  return (
    <section className="border-t border-line py-20 lg:py-24">
      <div className="wrap">
        <SectionHead
          overline="04 / Observability"
          title="Every trial tells you something."
          body="A useful simulation should help a team understand what happened. Physara keeps the key events, movements and outcomes together so the next test is easier to plan."
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-line bg-panel p-5">
              <div className="mono-label border-b border-line pb-3.5">
                Episode trace / recovery-004
              </div>
              {traceLines.map((t) => (
                <div
                  key={t.no}
                  className={`grid grid-cols-[38px_1fr_auto] items-center gap-3 border-b border-line py-4 text-[13px] last:border-0 ${
                    t.active
                      ? "border-l-2 border-l-mag pl-2.5"
                      : ""
                  }`}
                  style={
                    t.active
                      ? {
                          background:
                            "linear-gradient(90deg, color-mix(in srgb, var(--mag) 7%, transparent), transparent)",
                        }
                      : undefined
                  }
                >
                  <span className="mono-label">{t.no}</span>
                  <b className="font-semibold text-text">{t.label}</b>
                  <em className="mono-label not-italic">{t.time}</em>
                </div>
              ))}
              <div className="mt-4 flex flex-wrap gap-4">
                {[
                  ["Contact force", "2.18 kN"],
                  ["Recovery time", "480 ms"],
                  ["Outcome", "Pass"],
                ].map(([k, v]) => (
                  <span key={k} className="mono-label">
                    {k} <strong className="font-medium text-text">{v}</strong>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-panel p-6">
              <h3 className="font-display text-[34px] font-extrabold leading-[0.98] tracking-[-0.055em]">
                Turn failed trials into better tests.
              </h3>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.75] text-muted">
                When a trial fails, teams can see the movement around the failure
                and decide what to change next: the skill, the environment or the
                robot model.
              </p>
              <div className="mt-6 grid gap-2.5">
                {[
                  ["State", "joint + sensor traces"],
                  ["Event", "contact + disturbance timeline"],
                  ["Outcome", "success + stability metrics"],
                ].map(([k, v]) => (
                  <span key={k} className="font-mono text-[9px] text-muted">
                    <b className="font-medium text-text">{k}</b> {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Transfer() {
  return (
    <section className="border-t border-line py-20 lg:py-24">
      <div className="wrap">
        <SectionHead
          overline="05 / Transfer"
          title="Simulation supports the move to hardware."
          body="The simulator gives a skill room to improve. The policy is tested in controlled conditions, then the best result can move toward a real robot."
        />

        <Stagger className="grid items-stretch gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-[1fr_64px_1fr_64px_1fr]">
          {transferSteps.flatMap((s, i) => {
            const nodes = [
              <StaggerItem
                key={s.num}
                className="min-h-[220px] bg-panel p-6 transition-colors hover:bg-panel-2"
              >
                <span className="font-mono text-[9px] font-bold tracking-[0.1em] text-accent">
                  {s.num}
                </span>
                <h3 className="mt-10 font-display text-[28px] font-bold tracking-[-0.045em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-muted">
                  {s.body}
                </p>
                <strong className="mono-label mt-5 block text-text/70">
                  {s.tag}
                </strong>
              </StaggerItem>,
            ];
            if (i < transferSteps.length - 1) {
              nodes.push(
                <StaggerItem
                  key={`arrow-${s.num}`}
                  className="grid min-h-[44px] place-items-center bg-panel font-mono text-xl text-soft"
                >
                  <span className="lg:hidden">↓</span>
                  <span className="hidden lg:inline">→</span>
                </StaggerItem>,
              );
            }
            return nodes;
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-col gap-2 border-t border-line pt-5 sm:flex-row sm:justify-between sm:gap-6">
            <span className="mono-label">Design principle</span>
            <strong className="mono-label max-w-[700px] text-text">
              Know what changes between simulation and reality.
            </strong>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            <ButtonLink href="/live-sim">
              See it running <span>↗</span>
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request technical access <span>→</span>
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
