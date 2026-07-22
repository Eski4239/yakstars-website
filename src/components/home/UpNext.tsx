import Link from "next/link";
import { SkyPoster } from "@/components/art/SkyPoster";
import { Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import type { TeamEvent } from "@/data/events";

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Compact "up next" strip between the hero and the mission section.
 * Location images are placeholders — see public/events/{slug}.jpg convention below.
 */
export function UpNext({ events }: { events: TeamEvent[] }) {
  if (events.length === 0) return null;

  return (
    <section className="border-b border-line py-14 md:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <Eyebrow>Upcoming shows</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <Link href="/schedule" className="text-sm font-bold text-blue hover:text-blue-deep">
              Full schedule →
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {events.map((e) => (
            <StaggerItem key={`${e.name}-${e.year}`}>
              {/* Image slot: public/events/{slug}.jpg — e.g. "{e.name}" → {slugify(e.name)}.jpg */}
              <div className="group overflow-hidden rounded-lg border border-line">
                <SkyPoster
                  seed={slugify(e.name).length}
                  label={`${e.name} location`}
                  className="aspect-[16/9] w-full"
                />
                <div className="p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-red">
                    {e.dates}
                  </p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight">{e.name}</h3>
                  <p className="mt-1 text-sm text-slate">
                    {e.location} · {e.country}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
