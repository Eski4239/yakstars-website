import type { Metadata } from "next";
import { PageHero, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "How gatherings of Spanish and Portuguese Yak pilots became the Yakstars — the first unified Spanish–Portuguese display team and the largest civilian aerobatic team in Southern Europe.",
};

const STORY = [
  {
    period: "The beginning",
    title: "Yak gatherings across the border",
    detail:
      "Spanish and Portuguese Yak-52 pilots begin meeting, flying and training together — and discover a shared obsession with formation precision.",
  },
  {
    period: "2015",
    title: "The Yakstars form up",
    detail:
      "The team is established in Portugal, flying three Yak-52s at airshows and events, and soon expands to four ships.",
  },
  {
    period: "Early 2020s",
    title: "Joining forces with Jacob 52",
    detail:
      "The team unites with Spain's Asociación Jacob 52, becoming the first unified Spanish–Portuguese display team — with the depth to field displays of up to ten aircraft.",
  },
  {
    period: "Today",
    title: "Southern Europe's largest civilian team",
    detail:
      "Operating six Yak-52s from Casarrubios (LEMT) and Ponte de Sor (LPSO), the Yakstars have flown more than 200 displays for hundreds of thousands of spectators.",
  },
];

const VALUES = [
  {
    title: "Precision",
    text: "Formation aerobatics in extremely tight proximity is a craft measured in metres and split seconds.",
  },
  {
    title: "Discipline",
    text: "Military-grade briefing, training and debriefing culture — whatever each pilot flew before, the team flies one standard.",
  },
  {
    title: "Passion",
    text: "Nobody flies a 1970s radial warbird at dawn for the money. The Yakstars fly because the sky is where they belong.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the team"
        title={
          <>
            Two flags.
            <br />
            <span className="text-slate">One formation.</span>
          </>
        }
        lede="The Yakstars are the first unified Spanish–Portuguese aviation display team: civilian pilots with military discipline, flying Yak-52 warbirds as one aircraft."
      />

      {/* ————— Story timeline ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="The story" title="From friendship to formation." />
          <Stagger className="mt-16">
            {STORY.map((s) => (
              <StaggerItem
                key={s.title}
                className="group grid gap-2 border-l-2 border-line py-6 pl-8 transition-colors hover:border-blue md:grid-cols-[12rem_1fr] md:gap-10"
              >
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-red">
                  {s.period}
                </p>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-1.5 max-w-2xl leading-relaxed text-slate">{s.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Association ————— */}
      <section className="bg-blue-deep py-24 text-white md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow tone="red">{site.association.name}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-display-md mt-5 text-balance">
                “{site.association.motto}”
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                {site.association.description} Every Yakstars pilot is selected
                from its membership — a bench of experience few display teams
                anywhere can match.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-2 gap-8">
            {[
              { value: String(site.association.members), label: "active members" },
              { value: String(site.association.aircraft), label: "aircraft in the association" },
              { value: "2", label: "aerobatic teams under one roof" },
              { value: String(site.founded), label: "the year it all formed up" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <p className="font-mono text-5xl font-bold tabular-nums">{s.value}</p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ————— Values ————— */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="What we stand for" title="Three words, flown daily." />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl bg-mist p-9">
                  <span className="font-mono text-sm tabular-nums text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-4">
            <Button href="/team">Meet the team</Button>
            <Button href="/media" variant="outline">
              Media & press
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
