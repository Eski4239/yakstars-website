import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Media & Press",
  description:
    "Press information, fact sheet and media contacts for the Yakstars Display Team.",
};

const FACTS = [
  { label: "Team", value: "Yakstars Display Team" },
  { label: "Founded", value: "2015" },
  { label: "Type", value: "Civilian formation aerobatic display team" },
  { label: "Aircraft", value: "6 × Yakovlev Yak-52 (up to 10 available)" },
  { label: "Bases", value: "Casarrubios LEMT (Spain) · Ponte de Sor LPSO (Portugal)" },
  { label: "Display", value: "15–17 minutes, 14+ figures, 1 to 6 ships" },
  { label: "Displays flown", value: "200+ across Portugal and Spain" },
  { label: "Association", value: "Asociación Jacob 52 — 50 members, 14 aircraft" },
];

const BOILERPLATE = `The Yakstars are a Spanish–Portuguese formation aerobatic display team flying six Yak-52 warbirds — the largest civilian aerobatic display team in Southern Europe. Founded in 2015 and drawing its pilots from Asociación Jacob 52, the team combines fighter, test-pilot and airline experience into a 15–17 minute display of formation aerobatics flown with military discipline. The Yakstars operate from Casarrubios (LEMT), near Madrid, and Ponte de Sor (LPSO), Portugal, and have performed for hundreds of thousands of spectators across the Iberian Peninsula.`;

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media & press"
        title={
          <>
            Everything you need
            <br />
            <span className="text-slate">to tell the story.</span>
          </>
        }
        lede="Fact sheet, boilerplate and contacts for journalists, photographers and broadcasters covering the team."
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Fact sheet" title="The team at a glance." />
            <Stagger className="mt-10">
              {FACTS.map((f) => (
                <StaggerItem
                  key={f.label}
                  className="grid grid-cols-[9rem_1fr] gap-6 border-b border-line py-4"
                >
                  <p className="text-eyebrow pt-0.5 text-faint">{f.label}</p>
                  <p className="font-medium leading-relaxed">{f.value}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <SectionHeading eyebrow="Boilerplate" title="Copy, ready to paste." />
            <Reveal delay={0.1}>
              <blockquote className="mt-10 rounded-2xl bg-mist p-8 leading-relaxed text-slate">
                {BOILERPLATE}
              </blockquote>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 rounded-2xl border border-line p-8">
                <h3 className="text-xl font-bold tracking-tight">Media enquiries</h3>
                <p className="mt-2 text-slate">
                  Accreditation, interviews, air-to-air photography and imagery
                  requests — write to the team and mention your outlet and
                  deadline.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:bg-blue"
                >
                  {site.email}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
