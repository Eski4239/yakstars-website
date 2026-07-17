import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { Stagger, StaggerItem } from "@/components/motion";
import { supportTeam } from "@/data/team";

export const metadata: Metadata = {
  title: "Support Team",
  description:
    "Safety supervisors, engineers, reserve pilots, narrators and coordinators — the Yakstars ground crew that makes every display possible.",
};

export default function SupportTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Support team"
        title={
          <>
            The display is airborne.
            <br />
            <span className="text-slate">The team is everywhere.</span>
          </>
        }
        lede="Every minute in front of the crowd rests on hours of engineering, safety supervision, coordination and storytelling on the ground."
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2">
            {supportTeam.map((m) => (
              <StaggerItem key={m.name}>
                <article className="flex h-full flex-col rounded-2xl border border-line p-8 transition-all duration-500 hover:border-blue hover:shadow-xl hover:shadow-blue/10">
                  <p className="text-eyebrow text-red">{m.role}</p>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight">
                    {m.name}
                    {m.nickname && (
                      <span className="font-normal text-slate"> “{m.nickname}”</span>
                    )}
                  </h2>
                  <p className="mt-1 text-sm text-faint">{m.origin}</p>
                  <p className="mt-5 leading-relaxed text-slate">{m.bio}</p>
                  <ul className="mt-6 flex flex-wrap gap-2.5 border-t border-line pt-6">
                    {m.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-mist px-4 py-2 text-[0.8rem] font-medium text-slate"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
