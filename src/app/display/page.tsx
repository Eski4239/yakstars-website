import type { Metadata } from "next";
import { PageHero, SectionHeading, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, DrawPath } from "@/components/motion";
import { SequenceExplorer } from "@/components/display/SequenceExplorer";
import { display } from "@/data/display";

export const metadata: Metadata = {
  title: "The Display",
  description:
    "15–17 minutes, more than 14 figures, up to six Yak-52s in formation — explore the full Yakstars display sequence, manoeuvre by manoeuvre.",
};

const STATS = [
  { value: display.duration, label: "display duration" },
  { value: display.figures, label: "dynamic figures" },
  { value: display.displaysFlown, label: "displays flown to date" },
] as const;

export default function DisplayPage() {
  return (
    <>
      <PageHero
        eyebrow="The display"
        title={
          <>
            An airshow,
            <br />
            <span className="text-slate">choreographed to the second.</span>
          </>
        }
        lede={display.intro}
      >
        <Stagger className="mt-12 grid max-w-2xl grid-cols-3 gap-8 border-t border-line pt-8">
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <p className="font-mono text-3xl font-bold tabular-nums md:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </PageHero>

      {/* ————— The loop, drawn ————— */}
      <section aria-hidden className="overflow-hidden border-b border-line">
        <svg viewBox="0 0 1440 240" className="w-full" preserveAspectRatio="xMidYMid slice">
          <DrawPath
            d="M-40 200 C 300 170, 500 150, 640 110 C 780 70, 780 30, 700 40 C 620 50, 660 120, 800 130 C 980 143, 1240 120, 1480 60"
            stroke="var(--color-line)"
            strokeWidth={3}
            duration={2.6}
          />
          <DrawPath
            d="M-40 220 C 400 205, 900 190, 1480 120"
            stroke="var(--color-sky)"
            strokeWidth={22}
            duration={3}
            delay={0.3}
          />
        </svg>
      </section>

      {/* ————— Sequence explorer ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="2026 sequence"
            title="Twelve chapters. One story."
            lede="A new sequence is defined every season and trained until it is second nature. This is the 2026 show, in order."
          />
          <Reveal delay={0.15} className="mt-14">
            <SequenceExplorer />
          </Reveal>
        </div>
      </section>

      {/* ————— Philosophy ————— */}
      <section className="border-t border-line bg-mist py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="How it's built"
            title="Precision is a process."
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {display.philosophy.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-2xl bg-white p-8">
                  <span className="font-mono text-sm tabular-nums text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-4">
            <Button href="/schedule">See where it flies next</Button>
            <Button href="/contact" variant="outline">
              Book the display
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
