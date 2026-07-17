import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { Stagger, StaggerItem } from "@/components/motion";
import { PlaneMark } from "@/components/art/Plane";
import { pilots } from "@/data/team";

export const metadata: Metadata = {
  title: "Pilots",
  description:
    "The Yakstars display pilots — fighter pilots, airline captains and aerobatic champions flying the Yak-52 in tight formation.",
};

export default function PilotsPage() {
  return (
    <>
      <PageHero
        eyebrow="Display pilots"
        title={
          <>
            Seven cockpits.
            <br />
            <span className="text-slate">Tens of thousands of hours.</span>
          </>
        }
        lede="Every position in the formation is flown by a pilot with a career behind it — military fast jets, airline commands, championship aerobatics. These are the Yakstars."
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pilots.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/team/pilots/${p.slug}`}
                  className="group relative flex h-full min-h-[24rem] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue hover:shadow-xl hover:shadow-blue/10"
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -right-6 -top-10 text-[11rem] font-bold leading-none tracking-tighter opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14] ${
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
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
                      {p.callsign}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight">{p.name}</h2>
                    <p className="mt-2 text-slate">{p.position}</p>
                  </div>

                  <div>
                    <p className="text-sm leading-relaxed text-slate">{p.headline}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                      <span className="text-sm font-semibold">{p.flightHoursLabel}</span>
                      <PlaneMark
                        size={24}
                        className="text-line transition-all duration-500 group-hover:translate-x-1 group-hover:text-blue"
                      />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
