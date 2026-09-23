import { HeroRibbon } from "@/components/hero-ribbon";
import { SimShell } from "@/components/sim-shell";
import {
  ButtonLink,
  Counter,
  Reveal,
  SectionHead,
  Stagger,
  StaggerItem,
} from "@/components/ui";
import { capabilities, problemCards, proofStats, useCases } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showcase />
      <Proof />
      <Problem />
      <Capabilities />
      <UseCases />
      <EarlyAccess />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Anchored by its left edge rather than given a width, so it starts
          past the text column instead of creeping under it as the viewport
          narrows. Below lg there is no room for it beside the copy at all. */}
      <HeroRibbon className="-right-[8%] -top-[26%] left-[62%] hidden h-[168%] lg:block" />

      <div className="wrap ruled relative pt-20 pb-14 lg:pt-32 lg:pb-20">
        <div className="max-w-[660px]">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.09em] text-accent">
              <span className="h-[7px] w-[7px] rounded-full bg-accent" />
              Robotics / simulation infrastructure
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display-xl mt-6 mb-7">
              Train the body
              <br />
              <span className="text-gradient">before the world.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-[19px] leading-[1.6] text-muted">
              Physara is a GPU-native physics simulation platform for humanoid
              robots. Generate richer physical experience, train policies against
              the edge cases that matter, and move promising behaviors toward real
              hardware with fewer physical trials.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                Request technical access <span aria-hidden>→</span>
              </ButtonLink>
              <ButtonLink href="/live-sim" variant="secondary">
                Explore the live simulation <span aria-hidden>↗</span>
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>

      <HeroStrip />
    </section>
  );
}

function HeroStrip() {
  return (
    <div className="wrap ruled relative border-t border-line">
      <dl className="flex flex-wrap gap-x-12 gap-y-4 py-7">
        {[
          ["Built for", "Humanoid robotics"],
          ["Compute model", "GPU-native"],
          ["Operating model", "Simulation → policy → hardware"],
          ["Learning", "RL + imitation"],
        ].map(([k, v]) => (
          <div key={k}>
            <dt className="mono-label">{k}</dt>
            <dd className="mt-1 text-[15px] font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Showcase() {
  return (
    <section className="py-20 lg:py-24">
      <div className="wrap">
        <SimShell />
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="pb-4">
      <div className="wrap">
        <Stagger className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-panel lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <StaggerItem
              key={s.label}
              className={`p-6 sm:p-7 ${
                i % 2 === 0 ? "border-r border-line" : ""
              } ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${
                i === 1 ? "lg:border-r" : ""
              } ${i === 2 ? "lg:border-r" : ""}`}
            >
              <div className="font-display text-[34px] font-semibold tracking-[-0.025em]">
                <Counter
                  value={s.value}
                  decimals={Number.isInteger(s.value) ? 0 : s.value < 3 ? 2 : 1}
                  suffix={s.suffix}
                />
              </div>
              <div className="mt-2 text-[14px] leading-[1.5] text-muted">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-4 px-1 text-[13px] text-soft">
          The numbers shown here are interface examples for the product demo, not
          production benchmarks.
        </p>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="mono-label text-accent">01 / The problem</div>
            <h2 className="display-lg mt-3 mb-6 max-w-[620px]">
              Robots learn best when they can practise the hard parts safely.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[600px] text-[19px] leading-[1.6] text-text/85">
              Balance, hand control and recovery depend on physical experience.
              Real robot tests are valuable, but they are expensive, slow to
              repeat and difficult to vary.
            </p>
            <p className="mt-5 max-w-[600px] text-[17px] leading-[1.68] text-muted">
              Physara gives teams a place to practise those situations before they
              put another hour on a real machine.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-4">
          {problemCards.map((c) => (
            <StaggerItem
              key={c.kicker}
              className="group rounded-2xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-accent/40"
            >
              <span className="mono-label">{c.kicker}</span>
              <strong className="mt-2 block font-display text-[26px] font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">
                {c.title}
              </strong>
              <p className="mt-2.5 max-w-[52ch] text-[15px] leading-[1.62] text-muted">
                {c.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="wrap">
        <SectionHead
          overline="02 / Capabilities"
          title="From physical state to repeatable skills."
          body="Each capability answers a practical question: can the robot move, handle objects, recover from mistakes and repeat the skill when the conditions change?"
        />

        <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <StaggerItem
              key={c.index}
              className="group relative flex min-h-[270px] flex-col overflow-hidden bg-panel p-7 transition-colors duration-300 hover:bg-panel-2"
            >
              <span className="mono-label">{c.index}</span>
              <h3 className="mt-7 font-display text-[21px] font-semibold tracking-[-0.018em] transition-colors group-hover:text-accent">
                {c.title}
              </h3>
              <p className="mt-2.5 max-w-[52ch] text-[15px] leading-[1.62] text-muted">
                {c.body}
              </p>
              <strong className="mono-label mt-auto block pt-7 font-medium text-text/70">
                {c.footer}
              </strong>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="wrap">
        <SectionHead
          overline="03 / Use cases"
          title="Focus on the moments that cost the most hardware time."
          body="Start with one difficult skill. Build more variety around it. Test the skill again before moving more work onto hardware."
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <StaggerItem
              key={u.num}
              className="group flex min-h-[230px] flex-col rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--shadow)]"
            >
              <div className="flex items-center justify-between">
                <span className="mono-label">{u.num}</span>
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-line font-mono text-[12px] text-accent transition-transform duration-300 group-hover:rotate-12">
                  {u.mark}
                </span>
              </div>
              <h3 className="mt-8 font-display text-[17px] font-semibold tracking-[-0.012em]">
                {u.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-muted">{u.body}</p>
              <small className="mono-label mt-auto pt-6">{u.best}</small>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function EarlyAccess() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="wrap">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-line p-7 sm:p-10 lg:p-[52px]"
            style={{
              background:
                "radial-gradient(480px 240px at 85% 50%, var(--accent-soft), transparent 68%), var(--panel)",
            }}
          >
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-accent/20 shadow-[0_0_0_60px_var(--accent-soft)]" />
            <div className="relative">
              <div className="mono-label text-accent">04 / Early access</div>
              <h2 className="display-lg mt-3 mb-5 max-w-[620px]">
                Bring us the task that keeps failing.
              </h2>
              <p className="max-w-[640px] text-[18px] leading-[1.65] text-muted">
                We are interested in the difficult cases: a grasp that changes
                with the object, a recovery movement that fails on a new surface,
                or a walking skill that struggles when the terrain changes.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <ButtonLink href="/contact">
                  Request technical access <span aria-hidden>→</span>
                </ButtonLink>
                <span className="flex items-center gap-2 text-[14px] text-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Technical conversations · Research teams · Robotics companies
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
