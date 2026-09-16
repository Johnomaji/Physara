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
    <section className="pt-12 pb-6 md:pt-16 lg:pt-[74px]">
      <div className="wrap grid items-end gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-9">
        <div className="pb-2 lg:py-5">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 font-mono text-[9px] font-medium uppercase tracking-[0.17em] text-accent">
              <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" />
              Robotics / simulation infrastructure
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display-xl my-5 max-w-[690px]">
              Train the <em className="not-italic text-accent">body</em>
              <br />
              before the world.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-[620px] text-base leading-[1.72] text-muted">
              Physara is a GPU-native physics simulation platform for humanoid
              robots. Generate richer physical experience, train policies against
              the edge cases that matter, and move promising behaviors toward real
              hardware with fewer physical trials.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <ButtonLink href="/contact">
                Request technical access <span>→</span>
              </ButtonLink>
              <ButtonLink href="/live-sim" variant="secondary">
                Explore the live simulation <span>↗</span>
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mono-label mt-4 leading-[1.8]">
              Body-first simulation · Contact-rich dynamics · RL + imitation
              learning · Transfer evaluation
            </p>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
              {[
                ["Built for", "Humanoid robotics"],
                ["Compute model", "GPU-native"],
                ["Operating model", "Simulation → policy → hardware"],
              ].map(([k, v]) => (
                <span key={k} className="mono-label text-[8px]">
                  {k} <b className="font-medium text-text">{v}</b>
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <SimShell />
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="pt-14 pb-4">
      <div className="wrap">
        <Stagger className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-panel lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <StaggerItem
              key={s.label}
              className={`p-4 sm:p-5 ${
                i % 2 === 0 ? "border-r border-line" : ""
              } ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${
                i === 1 ? "lg:border-r" : ""
              } ${i === 2 ? "lg:border-r" : ""}`}
            >
              <div className="font-display text-[27px] font-bold tracking-[-0.05em]">
                <Counter
                  value={s.value}
                  decimals={Number.isInteger(s.value) ? 0 : s.value < 3 ? 2 : 1}
                  suffix={s.suffix}
                />
              </div>
              <div className="mono-label mt-1.5">{s.label}</div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mono-label mt-3 px-1">
          The numbers shown here are interface examples for the product demo, not
          production benchmarks.
        </p>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="border-t border-line py-20 lg:py-24">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <Reveal>
            <div className="mono-label tracking-[0.17em]">01 / The problem</div>
            <h2 className="display-lg my-4 max-w-[850px]">
              Robots learn best when they can practise the hard parts safely.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[680px] text-lg leading-[1.58] text-text/85 sm:text-xl">
              Balance, hand control and recovery depend on physical experience.
              Real robot tests are valuable, but they are expensive, slow to
              repeat and difficult to vary.
            </p>
            <p className="mt-4 max-w-[680px] text-[15px] leading-[1.8] text-muted">
              Physara gives teams a place to practise those situations before they
              put another hour on a real machine.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-2.5">
          {problemCards.map((c) => (
            <StaggerItem
              key={c.kicker}
              className="group rounded-2xl border border-line bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
              <span className="mono-label">{c.kicker}</span>
              <strong className="mt-2 block font-display text-[28px] font-extrabold tracking-[-0.05em] transition-colors group-hover:text-accent">
                {c.title}
              </strong>
              <p className="mt-2 max-w-[52ch] text-[13px] leading-[1.6] text-muted">
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
    <section className="border-t border-line py-20 lg:py-24">
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
              className="group relative min-h-[240px] overflow-hidden bg-panel p-6 transition-colors duration-300 hover:bg-panel-2"
            >
              <span className="mono-label tracking-[0.13em]">{c.index}</span>
              <h3 className="mt-7 font-display text-[23px] font-bold tracking-[-0.045em] transition-colors group-hover:text-accent">
                {c.title}
              </h3>
              <p className="mt-2.5 max-w-[52ch] text-[13px] leading-[1.7] text-muted">
                {c.body}
              </p>
              <strong className="mono-label mt-6 block text-text/70">
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
    <section className="border-t border-line py-20 lg:py-24">
      <div className="wrap">
        <SectionHead
          overline="03 / Use cases"
          title="Focus on the moments that cost the most hardware time."
          body="Start with one difficult skill. Build more variety around it. Test the skill again before moving more work onto hardware."
        />

        <Stagger className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <StaggerItem
              key={u.num}
              className="group flex min-h-[182px] flex-col rounded-2xl border border-line bg-panel p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[var(--shadow)]"
            >
              <div className="flex items-center justify-between">
                <span className="mono-label">{u.num}</span>
                <span className="grid h-7 w-7 place-items-center rounded-lg border border-line font-mono text-[10px] text-accent transition-transform duration-300 group-hover:rotate-12">
                  {u.mark}
                </span>
              </div>
              <h3 className="mt-9 font-display text-[15px] font-semibold">
                {u.title}
              </h3>
              <p className="mt-2 text-[11px] leading-[1.6] text-muted">{u.body}</p>
              <small className="mono-label mt-auto pt-5">{u.best}</small>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function EarlyAccess() {
  return (
    <section className="border-t border-line py-20 lg:py-24">
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
              <div className="mono-label tracking-[0.17em]">
                04 / Early access
              </div>
              <h2 className="display-lg my-4 max-w-[850px]">
                Bring us the task that keeps failing.
              </h2>
              <p className="max-w-[760px] text-base leading-[1.75] text-muted">
                We are interested in the difficult cases: a grasp that changes
                with the object, a recovery movement that fails on a new surface,
                or a walking skill that struggles when the terrain changes.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <ButtonLink href="/contact">
                  Request technical access <span>→</span>
                </ButtonLink>
                <span className="mono-label flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_var(--lime)]" />
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
