import { Eyebrow } from "@/components/ui";
import { AircraftImage } from "./Hero";
import { SECTION_IDS, SPECIFICATIONS, SPECIFICATIONS_CAMERA, SPECIFICATIONS_CONTENT } from "./constants";
import type { Specification } from "./types";

/**
 * Single reusable specification tile — e.g. "285 HP", "270 km/h", "+6G".
 * Used both here (full grid) and inline within Airframe/Engine/Cockpit.
 */
export function SpecificationItem({ label, value, unit }: Specification) {
  return (
    <div className="border-b border-line pb-4">
      <p className="font-mono text-3xl font-bold tabular-nums tracking-tight md:text-4xl">
        {value}
        {unit && <span className="ml-1 text-base font-normal text-faint">{unit}</span>}
      </p>
      <p className="mt-2 text-eyebrow text-faint">{label}</p>
    </div>
  );
}

export function Specifications() {
  const headingId = `${SECTION_IDS.specifications}-heading`;
  return (
    <section
      id={SECTION_IDS.specifications}
      aria-labelledby={headingId}
      className="border-t border-line bg-mist py-24 md:py-32"
    >
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="lg:order-2">
          <Eyebrow>{SPECIFICATIONS_CONTENT.eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-display-md mt-5 text-balance">
            {SPECIFICATIONS_CONTENT.headline}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
            {SPECIFICATIONS_CONTENT.description}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
            {SPECIFICATIONS.map((spec) => (
              <SpecificationItem key={spec.label} {...spec} />
            ))}
          </div>
        </div>
        <AircraftImage camera={SPECIFICATIONS_CAMERA} className="lg:order-1" />
      </div>
    </section>
  );
}
