import { SkyPoster } from "@/components/art/SkyPoster";
import { Reveal } from "@/components/motion";

/**
 * Full-bleed hero for /team. Background is a SkyPoster placeholder standing in
 * for a real photo of the whole team together — see public/team/ convention
 * once that photography exists, mirroring src/components/home/Hero.tsx.
 */
export function TeamHero() {
  return (
    <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-ink pt-24 md:min-h-[80svh]">
      {/* Image slot: public/team/team-together.jpg — replace SkyPoster once real photography lands. */}
      <div aria-hidden className="absolute inset-0">
        <SkyPoster seed={30} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/20" />
      </div>

      <div className="container-x relative pb-16 pt-24 md:pb-24">
        <Reveal>
          <h1 className="text-display-lg text-white">The Team</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            The Yakstars bring together pilots from all across the Iberian Peninsula, Spain and
            Portugal, flying as one formation. Every season the Chief Pilot chooses who flies, and
            every manoeuvre is trained relentlessly before it ever meets a crowd. Flying this close
            leaves no room for improvisation, only mastery, built by fighter pilots, airline
            captains, test pilots and champions with tens of thousands of flight hours between
            them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
