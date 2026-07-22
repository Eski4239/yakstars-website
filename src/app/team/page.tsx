import type { Metadata } from "next";
import { Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { TeamHero } from "@/components/team/TeamHero";
import { PilotGrid } from "@/components/team/PilotGrid";
import { SupportTeamTiles } from "@/components/team/SupportTeamTiles";
import { pilots, supportTeam } from "@/data/team";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "Seven display pilots, engineers, narrators and coordinators — the people behind the largest civilian aerobatic display team in Southern Europe.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />

      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Display pilots</Eyebrow>
          </Reveal>
          <div className="mt-10">
            <PilotGrid pilots={pilots} />
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 md:py-32">
        <div className="container-x">
          <SectionHeading title="Support Team" />
          <div className="mt-14">
            <SupportTeamTiles members={supportTeam} />
          </div>
        </div>
      </section>
    </>
  );
}
