import { Button, Eyebrow } from "@/components/ui";
import { AircraftImage } from "./Hero";
import { SpecificationItem } from "./Specifications";
import { COCKPIT_SECTION } from "./constants";

export function Cockpit() {
  const { id, camera, content, specifications } = COCKPIT_SECTION;
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="py-24 md:py-32">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <AircraftImage camera={camera} sticky />
        <div>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-display-md mt-5 text-balance">
            {content.headline}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
            {content.description}
          </p>
          {specifications && specifications.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
              {specifications.map((spec) => (
                <SpecificationItem key={spec.label} {...spec} />
              ))}
            </div>
          )}
          {content.cta && (
            <div className="mt-9">
              <Button href={content.cta.href} variant="outline">
                {content.cta.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
