import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PlaneMark } from "@/components/art/Plane";
import { pilots, supportTeam } from "@/data/team";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "Seven display pilots, engineers, narrators and coordinators — the people behind the largest civilian aerobatic display team in Southern Europe.",
};

const PRINCIPLES = [
  {
    title: "Experience",
    text: "Fighter pilots, airline captains, test pilots and champions. The display roster alone holds tens of thousands of flight hours.",
  },
  {
    title: "Discipline",
    text: "Before each season the Chief Pilot evaluates and selects the pilots who will fly. Every manoeuvre is exhaustively trained before it meets a crowd.",
  },
  {
    title: "Flying skills",
    text: "Formation aerobatics in extremely tight proximity leaves no room for improvisation — only for mastery.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The team"
        title={
          <>
            Selected, trained,
            <br />
            <span className="text-slate">and flown as one.</span>
          </>
        }
        lede={`Pilots and crew drawn from ${site.association.name} — “${site.association.motto}” — an association of ${site.association.members} members and ${site.association.aircraft} aircraft.`}
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-2xl bg-mist p-8">
                  <span className="font-mono text-sm tabular-nums text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight">{p.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Display pilots"
            title="The seven in the cockpits."
          />
          <Stagger className="mt-14">
            {pilots.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/team/pilots/${p.slug}`}
                  className="group flex items-baseline justify-between gap-6 border-b border-line py-7 transition-colors hover:border-ink"
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className={`w-14 shrink-0 text-4xl font-bold tabular-nums tracking-tighter md:text-5xl ${
                        p.accent === "red"
                          ? "text-red"
                          : p.accent === "gold"
                            ? "text-gold"
                            : "text-blue"
                      }`}
                    >
                      {p.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-blue md:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate">{p.position}</p>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="hidden text-2xl text-line transition-all group-hover:translate-x-1 group-hover:text-ink md:block"
                  >
                    →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-mist py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="On the ground"
              title="No display without the ground crew."
              lede="Safety supervision, engineering, reserve pilots, narration and logistics — the display is a team sport."
            />
          </div>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportTeam.slice(0, 4).map((m) => (
              <StaggerItem key={m.name}>
                <div className="h-full rounded-2xl bg-white p-7">
                  <PlaneMark size={22} className="text-blue" />
                  <h3 className="mt-4 text-lg font-bold tracking-tight">
                    {m.name}
                    {m.nickname && (
                      <span className="font-normal text-slate"> “{m.nickname}”</span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-red">{m.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15} className="mt-10">
            <Link
              href="/team/support"
              className="font-semibold text-blue transition-colors hover:text-blue-deep"
            >
              Meet the whole support team →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
