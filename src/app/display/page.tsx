import type { Metadata } from "next";
import { Eyebrow, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SequenceExplorer } from "@/components/display/SequenceExplorer";
import { SkyPoster } from "@/components/art/SkyPoster";
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
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ————— Hero ————— */}
      <header className="relative overflow-hidden pt-28 pb-14 text-center md:pt-36 md:pb-20">
        {/* Hero background slot: public/display/hero.jpg — swap SkyPoster for next/image once uploaded */}
        <SkyPoster seed={0} label="Yakstars in formation" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="container-x relative">
          <Reveal>
            <h1 className="text-display-lg mx-auto max-w-3xl text-balance text-white">
              Our display, choreographed to the second.
            </h1>
          </Reveal>
          <Stagger className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4">
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <div className="flex h-full flex-col justify-center rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="font-mono text-3xl font-bold tabular-nums text-white md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </header>

      {/* ————— Highlight reel ————— */}
      <section className="py-14 md:py-20">
        <div className="container-x">
          <Reveal>
            {/* Highlight reel slot: public/display/highlight-reel.mp4 — swap for
                <video autoPlay muted loop playsInline> once footage is uploaded */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-ink">
              <SkyPoster seed={0} label="Yakstars highlight reel" className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <span
                    aria-hidden
                    className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white"
                  />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— Sequence explorer ————— */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow size="lg">Our sequence</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              Every year the team sits down and rebuilds the sequence from scratch, weighing new
              ideas against manoeuvres that have already proven themselves. Nothing goes in front
              of a crowd until every pilot has flown it enough times that it feels automatic.
              Below is the {currentYear} sequence of our display, in order.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-14">
            <SequenceExplorer />
          </Reveal>
        </div>
      </section>

      {/* ————— Booking banner ————— */}
      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <SkyPoster
          seed={4}
          label="Yakstars in formation"
          className="absolute inset-0 h-full w-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/70" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl rounded-lg border border-line bg-white/95 p-12 text-center shadow-xl shadow-ink/5 backdrop-blur-sm md:p-16">
            <Reveal>
              <h2 className="text-display-md text-balance">The display can be tailored for your show.</h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/schedule">See where it flies next</Button>
              <Button href="/contact" variant="outline">
                Book the display
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
