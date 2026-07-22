import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { UpNext } from "@/components/home/UpNext";
import { SponsorsBanner } from "@/components/home/SponsorsBanner";
import { DisplaySlideshow } from "@/components/home/DisplaySlideshow";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button, Eyebrow } from "@/components/ui";
import { SkyPoster } from "@/components/art/SkyPoster";
import { pilots } from "@/data/team";
import { aircraft } from "@/data/aircraft";
import { display } from "@/data/display";
import { events } from "@/data/events";

export default function HomePage() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.endDate >= today).slice(0, 3);

  return (
    <>
      <Hero />

      <UpNext events={upcoming} />

      {/* ————— Mission ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow>The mission</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-display-lg mt-6 max-w-6xl text-balance">
              Six aircraft flying as one heartbeat
            </h2>
          </Reveal>
          <div className="mt-10 max-w-2xl">
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-slate">
                It started with a few Spanish and Portuguese Yak-52 pilots who
                wanted to fly together, not just alone. These days six
                aircraft take off from bases near Madrid and Ponte de Sor and
                fly as one. People come out in the hundreds of thousands
                across Spain and Portugal to watch us do it.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2.5 rounded-lg border border-line px-6 py-3.5 text-sm font-bold text-ink transition-all duration-200 hover:border-blue hover:bg-blue hover:text-white"
            >
              Our story
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ————— Sponsors ————— */}
      <SponsorsBanner />

      {/* ————— The team ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow>The team</Eyebrow>
          </Reveal>
        </div>

        <Stagger className="container-x mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pilots.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/team/pilots/${p.slug}`}
                className="group flex h-[28rem] flex-col rounded-lg border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-xl hover:shadow-blue/10"
              >
                <span
                  className={`text-6xl font-bold tabular-nums tracking-tighter ${
                    p.accent === "red"
                      ? "text-red"
                      : p.accent === "gold"
                        ? "text-gold"
                        : "text-blue"
                  }`}
                >
                  {p.number}
                </span>
                {/* Portrait photo slot: public/team/{p.slug}.jpg — reserved for the media insertion pass */}
                <div className="mt-4 flex-1 rounded-lg bg-mist" />
                <div className="mt-4">
                  <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm leading-snug text-slate">{p.position}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="container-x mt-10 flex justify-center">
          <Button href="/team/pilots" variant="outline">
            Meet the pilots
          </Button>
        </Reveal>
      </section>

      {/* ————— The aircraft ————— */}
      <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <SkyPoster
          seed={5}
          label="Yak-52 in formation"
          className="absolute inset-0 h-full w-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow tone="red">The machine</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-display-lg mt-6 text-balance">The Yak-52.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-lg leading-snug text-white/70">
              Built for 7G. Flown at the edge.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Button href="/aircraft" variant="light" className="mt-10">
              Explore the {aircraft.short}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ————— The display ————— */}
      <section className="bg-blue-deep py-24 text-white md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <Eyebrow tone="red">The display</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <Button href="/display" variant="light">
                See the full sequence
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="mt-10">
            <DisplaySlideshow sequence={display.sequence} />
          </Reveal>
        </div>
      </section>

      {/* ————— Gallery preview ————— */}
      <section className="border-t border-line bg-mist py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <Eyebrow>Gallery</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <Button href="/gallery" variant="outline">
                Open the gallery
              </Button>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <StaggerItem key={i}>
                <Link href="/gallery" className="group block overflow-hidden rounded-lg">
                  <SkyPoster
                    seed={i}
                    className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    label={`Yakstars artwork ${i + 1}`}
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Partnerships & bookings ————— */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <SkyPoster
          seed={2}
          label="Yakstars in formation"
          className="absolute inset-0 h-full w-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/70" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl rounded-lg border border-line bg-white/95 p-10 text-center shadow-xl shadow-ink/5 backdrop-blur-sm md:p-14">
            <Reveal>
              <h2 className="text-display-md text-balance">
                Put your event or brand in formation
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">Book the team</Button>
              <Button href="/sponsors" variant="outline">
                Become a sponsor
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
