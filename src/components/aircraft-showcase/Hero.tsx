import Image from "next/image";
import { Button, Eyebrow } from "@/components/ui";
import { AIRCRAFT_SHOWCASE_IMAGE_PATH, HERO_CAMERA, HERO_CONTENT, SECTION_IDS } from "./constants";
import type { CameraView } from "./types";

/**
 * Shared image container for every showcase section — reserves its aspect
 * ratio up front (no CLS) and is the one place `next/image` is wired up.
 * Reused by Airframe/Engine/Cockpit/Specifications so the sticky-panel
 * markup isn't duplicated per section.
 *
 * GSAP hook: this wrapper (not the <Image> itself) is the intended pin /
 * crossfade target for the later ScrollTrigger-driven render transitions —
 * see components/aircraft-showcase/README.md.
 */
export function AircraftImage({
  camera,
  sticky = false,
  priority = false,
  aspectClassName = "aspect-[4/3] lg:aspect-[3/4]",
  className = "",
}: {
  camera: CameraView;
  sticky?: boolean;
  priority?: boolean;
  aspectClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-mist ${aspectClassName} ${
        sticky ? "lg:sticky lg:top-24 lg:self-start" : ""
      } ${className}`}
    >
      <Image
        src={`${AIRCRAFT_SHOWCASE_IMAGE_PATH}${camera.imageFilename}`}
        alt={camera.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

export function Hero() {
  const headingId = `${SECTION_IDS.hero}-heading`;
  return (
    <section
      id={SECTION_IDS.hero}
      aria-labelledby={headingId}
      className="border-b border-line py-24 md:py-32"
    >
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <AircraftImage camera={HERO_CAMERA} priority />
        <div>
          <Eyebrow>{HERO_CONTENT.eyebrow}</Eyebrow>
          <h1 id={headingId} className="text-display-lg mt-6 text-balance">
            {HERO_CONTENT.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            {HERO_CONTENT.description}
          </p>
          {HERO_CONTENT.cta && (
            <div className="mt-9">
              <Button href={HERO_CONTENT.cta.href}>{HERO_CONTENT.cta.label}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
