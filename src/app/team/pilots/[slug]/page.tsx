import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Eyebrow } from "@/components/ui";
import { PlaneMark } from "@/components/art/Plane";
import { pilots } from "@/data/team";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return pilots.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pilot = pilots.find((p) => p.slug === slug);
  if (!pilot) return {};
  return {
    title: `${pilot.name} — ${pilot.callsign}`,
    description: pilot.headline,
  };
}

export default async function PilotPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = pilots.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const pilot = pilots[index];
  const next = pilots[(index + 1) % pilots.length];
  const accentText =
    pilot.accent === "red" ? "text-red" : pilot.accent === "gold" ? "text-gold" : "text-blue";

  return (
    <>
      {/* ————— Profile hero ————— */}
      <header className="relative overflow-hidden border-b border-line bg-white pt-36 pb-16 md:pt-44 md:pb-24">
        <span
          aria-hidden
          className={`pointer-events-none absolute -top-24 right-0 select-none text-[24rem] font-bold leading-none tracking-tighter opacity-[0.06] md:text-[34rem] ${accentText}`}
        >
          {pilot.number}
        </span>
        <div className="container-x relative">
          <Reveal>
            <Eyebrow>{pilot.callsign}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-display-lg mt-6 max-w-4xl">
              {pilot.name}
              {pilot.nickname && (
                <span className="block text-[0.5em] font-semibold text-slate">
                  “{pilot.nickname}”
                </span>
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate">
              {pilot.headline}
            </p>
          </Reveal>

          <Stagger className="mt-12 grid max-w-3xl grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-3">
            <StaggerItem>
              <p className="text-eyebrow text-faint">Position</p>
              <p className="mt-2 font-semibold leading-snug">{pilot.position}</p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-eyebrow text-faint">Flight time</p>
              <p className="mt-2 font-semibold leading-snug">{pilot.flightHoursLabel}</p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-eyebrow text-faint">Origin</p>
              <p className="mt-2 font-semibold leading-snug">{pilot.origin}</p>
            </StaggerItem>
          </Stagger>
        </div>
      </header>

      {/* ————— Bio + achievements ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-7">
            {pilot.bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-slate first:text-xl first:text-ink">
                  {para}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2.5 pt-4">
                {pilot.aircraft.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-line px-4 py-2 text-sm font-medium text-slate"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <aside>
            <Reveal>
              <h2 className="text-eyebrow text-ink">Career highlights</h2>
            </Reveal>
            <Stagger className="mt-6 space-y-4">
              {pilot.achievements.map((a) => (
                <StaggerItem key={a} className="flex gap-3.5">
                  <PlaneMark size={16} rotate={90} className={`mt-1 shrink-0 ${accentText}`} />
                  <p className="text-[0.95rem] leading-snug text-slate">{a}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </aside>
        </div>
      </section>

      {/* ————— Timeline ————— */}
      <section className="border-t border-line bg-mist py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Flight path</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-display-md mt-5">From first flight to the formation.</h2>
          </Reveal>

          <Stagger className="mt-16">
            {pilot.timeline.map((t, i) => (
              <StaggerItem
                key={i}
                className="group grid gap-2 border-l-2 border-line py-6 pl-8 transition-colors hover:border-blue md:grid-cols-[12rem_1fr] md:gap-10"
              >
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-red">
                  {t.period}
                </p>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{t.title}</h3>
                  {t.detail && <p className="mt-1.5 text-slate">{t.detail}</p>}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Next pilot ————— */}
      <section>
        <Link
          href={`/team/pilots/${next.slug}`}
          className="group block border-t border-line py-16 transition-colors hover:bg-sky md:py-20"
        >
          <div className="container-x flex items-center justify-between gap-6">
            <div>
              <p className="text-eyebrow text-faint">Next pilot</p>
              <p className="mt-3 text-3xl font-bold tracking-tight transition-colors group-hover:text-blue md:text-5xl">
                {next.name}
              </p>
              <p className="mt-2 text-slate">
                {next.callsign} · {next.position}
              </p>
            </div>
            <span
              aria-hidden
              className="text-4xl text-line transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue"
            >
              →
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}
