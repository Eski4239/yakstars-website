import type { Metadata } from "next";
import { PageHero, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/motion";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sponsors & Partnerships",
  description:
    "Partner with the Yakstars — aircraft livery, hospitality, content and activation with the largest civilian aerobatic display team in Southern Europe.",
};

const REACH = [
  { value: 200, suffix: "+", label: "displays flown across Iberia" },
  { value: 6, suffix: "", label: "aircraft carrying your brand" },
  { value: 2, suffix: "", label: "countries, one team" },
];

const OFFERS = [
  {
    title: "Livery & titles",
    text: "Your identity on six Yak-52 warbirds — in the air, on the flight line, and in every photograph shot at every show the team flies.",
  },
  {
    title: "Hospitality",
    text: "Bring clients and guests to the flight line: briefings with the pilots, walkarounds of the aircraft, and the display from the best seat at the airfield.",
  },
  {
    title: "Content & media",
    text: "Air-to-air imagery, cockpit footage and behind-the-scenes stories, produced across a full season of airshows in Portugal and Spain.",
  },
  {
    title: "Activation",
    text: "Static aircraft at your events, pilot appearances, and experiences money can't ordinarily buy — built around your marketing calendar.",
  },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors & partnerships"
        title={
          <>
            Fly your brand
            <br />
            <span className="text-slate">in close formation.</span>
          </>
        }
        lede="The Yakstars perform for hundreds of thousands of spectators across the Iberian Peninsula — audiences that spend a full day looking up. A partnership puts your brand at the centre of that attention."
      />

      {/* ————— Reach ————— */}
      <section className="border-b border-line bg-mist">
        <div className="container-x grid grid-cols-1 gap-y-10 py-16 sm:grid-cols-3 md:py-20">
          {REACH.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="pr-6">
              <p className="text-display-md font-bold tabular-nums">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 max-w-[18ch] text-sm leading-snug text-slate">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— What a partnership includes ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="The partnership"
            title="More than a logo on a wing."
            lede="Partnerships are built individually, around what your brand needs — these are the building blocks."
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
            {OFFERS.map((o, i) => (
              <StaggerItem key={o.title}>
                <div className="h-full rounded-2xl border border-line p-9 transition-all duration-500 hover:border-blue hover:shadow-xl hover:shadow-blue/10">
                  <span className="font-mono text-sm tabular-nums text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight">{o.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{o.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Why the team ————— */}
      <section className="bg-ink py-24 text-white md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow tone="red">Why the Yakstars</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-display-md mt-5 text-balance">
                A brand is judged by the company it keeps.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                Your partners here are fighter pilots, airline captains and
                champions who treat every display like a competition final.
                Discipline, safety and precision aren’t slogans on this team —
                they’re the operating manual.
              </p>
            </Reveal>
          </div>
          <Stagger className="space-y-5">
            {[
              "The largest civilian aerobatic display team in Southern Europe",
              "A pilot roster with fighter, test-pilot and airline pedigrees",
              "A self-supported operation: aircraft, engineers, logistics, narration",
              `Backed by ${site.association.name} — ${site.association.members} members, ${site.association.aircraft} aircraft`,
            ].map((t) => (
              <StaggerItem key={t} className="flex items-start gap-4 border-b border-white/15 pb-5">
                <span aria-hidden className="mt-1 text-gold">★</span>
                <p className="text-lg text-white/85">{t}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— CTA ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="text-display-lg mx-auto max-w-3xl text-balance">
              Let’s talk about your place in the formation.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <Button href="/contact">Become a partner</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
