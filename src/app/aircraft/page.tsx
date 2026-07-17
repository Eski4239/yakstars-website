import type { Metadata } from "next";
import { PageHero, Eyebrow, SectionHeading, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { AircraftExplorer } from "@/components/aircraft/AircraftExplorer";
import { aircraft } from "@/data/aircraft";

export const metadata: Metadata = {
  title: "The Aircraft — Yakovlev Yak-52",
  description:
    "The Yakovlev Yak-52: a Soviet-designed aerobatic warbird trainer with a 360 hp radial engine, rated for 7G — the machine behind every Yakstars display.",
};

export default function AircraftPage() {
  return (
    <>
      <PageHero
        eyebrow="The aircraft"
        title={
          <>
            {aircraft.name}.
            <br />
            <span className="text-slate">A warbird with a work ethic.</span>
          </>
        }
        lede={aircraft.intro}
      />

      {/* ————— Interactive explorer ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Interactive"
            title="Walk around the machine."
            lede="Select a marker to explore what makes the Yak-52 a formation-display aircraft."
          />
          <Reveal delay={0.15} className="mt-14">
            <AircraftExplorer />
          </Reveal>
        </div>
      </section>

      {/* ————— Performance numbers ————— */}
      <section className="bg-ink py-24 text-white md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow tone="red">Performance</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-display-md mt-5 max-w-3xl">
              Numbers that hold up under 7G.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3">
            {aircraft.specs.map((s) => (
              <StaggerItem key={s.label}>
                <p className="font-mono text-4xl font-bold tabular-nums md:text-5xl">
                  {s.value}
                  <span className="ml-1.5 text-lg font-normal text-white/50">{s.unit}</span>
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/60">
                  {s.label}
                </p>
                <p className="mt-1 font-mono text-xs text-white/35">{s.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Engine ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The engine"
              title={aircraft.engine.name}
              lede={`A ${aircraft.engine.type.toLowerCase()} producing ${aircraft.engine.power}. ${aircraft.whyWeFlyIt}`}
            />
          </div>
          <Stagger className="space-y-4 lg:pt-10">
            {[
              { label: "Type", value: aircraft.engine.type },
              { label: "Power", value: aircraft.engine.power },
              { label: "Fuel system", value: aircraft.engine.fuel },
              { label: "Propeller", value: aircraft.engine.propeller },
            ].map((row) => (
              <StaggerItem
                key={row.label}
                className="grid grid-cols-[8rem_1fr] gap-6 border-b border-line pb-4"
              >
                <p className="text-eyebrow pt-1 text-faint">{row.label}</p>
                <p className="font-medium leading-relaxed">{row.value}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Dimensions ————— */}
      <section className="border-t border-line bg-mist py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Dimensions & weights" title="On paper." />
          <Stagger className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
            {aircraft.dimensions.map((d) => (
              <StaggerItem key={d.label}>
                <div className="h-full rounded-2xl bg-white p-7">
                  <p className="text-eyebrow text-faint">{d.label}</p>
                  <p className="mt-3 text-3xl font-bold tabular-nums tracking-tight">
                    {d.value}
                  </p>
                  <p className="mt-1 font-mono text-sm text-faint">{d.imperial}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-x-12 gap-y-3">
            {aircraft.performance.map((p) => (
              <p key={p.label} className="text-slate">
                <span className="font-semibold text-ink">{p.label}:</span> {p.value}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ————— History ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="History"
            title="From DOSAAF trainer to display warbird."
          />
          <Stagger className="mt-16">
            {aircraft.history.map((h) => (
              <StaggerItem
                key={h.title}
                className="group grid gap-2 border-l-2 border-line py-6 pl-8 transition-colors hover:border-red md:grid-cols-[12rem_1fr] md:gap-10"
              >
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-red">
                  {h.period}
                </p>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{h.title}</h3>
                  <p className="mt-1.5 max-w-2xl text-slate">{h.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-14">
            <Button href="/display">See the Yak-52 in the display</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
