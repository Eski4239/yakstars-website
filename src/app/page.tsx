import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FormationCycler } from "@/components/home/FormationCycler";
import { Counter, Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { PlaneMark } from "@/components/art/Plane";
import { SkyPoster } from "@/components/art/SkyPoster";
import { site } from "@/data/site";
import { pilots } from "@/data/team";
import { aircraft } from "@/data/aircraft";
import { display } from "@/data/display";
import { events } from "@/data/events";

export default function HomePage() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.endDate >= today).slice(0, 3);
  const recent = events.filter((e) => e.endDate < today).slice(0, 3);
  const shows = upcoming.length > 0 ? upcoming : recent;

  return (
    <>
      <Hero />

      {/* ————— Mission ————— */}
      <section className="py-28 md:py-40">
        <div className="container-x">
          <Reveal>
            <Eyebrow>The mission</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display-lg mt-8 max-w-5xl text-balance">
              Every manoeuvre calculated. Every pilot proven.
              <span className="text-slate"> Every aircraft moving as one.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:max-w-4xl">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-slate">
                The Yakstars were born where Spanish and Portuguese Yak pilots
                met, flew together, and refused to settle for good enough. What
                began as gatherings became the first unified Spanish–Portuguese
                display team — choreographed, disciplined, relentless.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-lg leading-relaxed text-slate">
                Today the team flies six Yak-52 warbirds from bases near Madrid
                and in Ponte de Sor, and has performed for hundreds of thousands
                of spectators across the Iberian Peninsula.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Button href="/about" variant="ghost" className="mt-10">
              Our story
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ————— Stats ————— */}
      <section aria-label="Team statistics" className="border-y border-line bg-mist">
        <div className="container-x grid grid-cols-2 gap-y-12 py-16 md:grid-cols-4 md:py-24">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="pr-6">
              <p className="text-display-md font-bold tabular-nums text-ink">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 max-w-[16ch] text-sm leading-snug text-slate">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— The team ————— */}
      <section className="py-28 md:py-40">
        <div className="container-x flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The team"
            title={
              <>
                Seven pilots.
                <br />
                One heartbeat.
              </>
            }
          />
          <Reveal delay={0.2}>
            <Button href="/team/pilots" variant="outline">
              Meet the pilots
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 scrollbar-none md:px-10 lg:px-[max(2.5rem,calc((100vw-76rem)/2+2.5rem))]">
          {pilots.map((p) => (
            <StaggerItem key={p.slug} className="snap-start">
              <Link
                href={`/team/pilots/${p.slug}`}
                className="group flex h-[26rem] w-[19rem] shrink-0 flex-col justify-between rounded-2xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue hover:shadow-xl hover:shadow-blue/10"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-7xl font-bold tabular-nums tracking-tighter ${
                      p.accent === "red"
                        ? "text-red"
                        : p.accent === "gold"
                          ? "text-gold"
                          : "text-blue"
                    }`}
                  >
                    {p.number}
                  </span>
                  <PlaneMark
                    size={30}
                    className="text-line transition-colors duration-500 group-hover:text-ink"
                  />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
                    {p.callsign}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-sm leading-snug text-slate">{p.position}</p>
                  <p className="mt-4 text-sm font-semibold text-ink">
                    {p.flightHoursLabel}
                    <span className="font-normal text-faint"> · {p.origin}</span>
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ————— The aircraft ————— */}
      <section className="overflow-hidden bg-ink py-28 text-white md:py-40">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow tone="red">The machine</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display-md mt-6 text-balance">
                {aircraft.name}.
                <br />
                <span className="text-white/50">Built for 7G. Flown at the edge.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
                {aircraft.intro}
              </p>
            </Reveal>
            <Stagger className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {aircraft.specs.slice(0, 3).map((s) => (
                <StaggerItem key={s.label}>
                  <p className="font-mono text-3xl font-bold tabular-nums md:text-4xl">
                    {s.value}
                    <span className="ml-1 text-base font-normal text-white/50">{s.unit}</span>
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
                    {s.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.25}>
              <Button href="/aircraft" className="mt-12 bg-white text-ink hover:bg-gold hover:text-ink">
                Explore the Yak-52
              </Button>
            </Reveal>
          </div>
          <Parallax distance={40} className="relative hidden lg:block">
            <Reveal className="relative">
              <PlaneMark
                size={520}
                rotate={45}
                className="mx-auto max-w-full text-white/10"
              />
              <PlaneMark
                size={200}
                rotate={45}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold"
              />
            </Reveal>
          </Parallax>
        </div>
      </section>

      {/* ————— The display ————— */}
      <section className="bg-blue-deep py-28 text-white md:py-40">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <FormationCycler className="mx-auto aspect-square w-full max-w-md" />
          </div>
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow tone="red">The display</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display-md mt-6 text-balance">
                {display.duration} of choreographed airshow.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
                {display.intro}
              </p>
            </Reveal>
            <Stagger className="mt-10 space-y-4">
              {["Loop in Vic formation", "French Crossing", "Tiramisu — the signature", "Final Break"].map(
                (m, i) => (
                  <StaggerItem key={m} className="flex items-center gap-4">
                    <span className="font-mono text-sm tabular-nums text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold">{m}</span>
                  </StaggerItem>
                ),
              )}
            </Stagger>
            <Reveal delay={0.2}>
              <Button href="/display" className="mt-12 bg-white text-ink hover:bg-gold">
                See the full sequence
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Schedule ————— */}
      <section className="py-28 md:py-40">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={upcoming.length > 0 ? "Upcoming shows" : "Recent shows"}
              title="Where the formation flies next."
              lede="A full season across Portugal and Spain, every year since 2017."
            />
            <Reveal delay={0.2}>
              <Button href="/schedule" variant="outline">
                Full schedule
              </Button>
            </Reveal>
          </div>
          <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
            {shows.map((e) => (
              <StaggerItem key={`${e.name}-${e.year}`}>
                <article className="group h-full rounded-2xl border border-line p-7 transition-all duration-500 hover:border-blue hover:shadow-xl hover:shadow-blue/10">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-red">
                    {e.dates}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight">{e.name}</h3>
                  <p className="mt-2 text-slate">
                    {e.location} · {e.country}
                  </p>
                  {e.note && <p className="mt-4 text-sm text-faint">{e.note}</p>}
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Gallery preview ————— */}
      <section className="border-t border-line bg-mist py-28 md:py-40">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Gallery"
              title="The show, frame by frame."
            />
            <Reveal delay={0.2}>
              <Button href="/gallery" variant="outline">
                Open the gallery
              </Button>
            </Reveal>
          </div>
          <Stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <StaggerItem key={i}>
                <Link href="/gallery" className="group block overflow-hidden rounded-2xl">
                  <SkyPoster
                    seed={i}
                    className="aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    label={`Yakstars artwork ${i + 1}`}
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Sponsors / final CTA ————— */}
      <section className="py-28 md:py-40">
        <div className="container-x text-center">
          <Reveal>
            <Eyebrow className="justify-center">Partnerships & bookings</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display-lg mx-auto mt-8 max-w-4xl text-balance">
              Put your event — or your brand — in formation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate">
              Airshow organisers and partners work with a team that treats every
              appearance like a championship race weekend: planned, briefed,
              rehearsed, and flown with precision.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Book the team</Button>
            <Button href="/sponsors" variant="outline">
              Become a partner
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
