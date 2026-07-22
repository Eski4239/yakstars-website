import type { AircraftSection, CameraView, SectionContent, Specification } from "./types";

/**
 * Base public path for every showcase render. Blender exports land here —
 * see components/aircraft-showcase/README.md for the full file list.
 */
export const AIRCRAFT_SHOWCASE_IMAGE_PATH = "/aircraft-showcase/";

export const SECTION_IDS = {
  hero: "aircraft-showcase-hero",
  airframe: "aircraft-showcase-airframe",
  engine: "aircraft-showcase-engine",
  cockpit: "aircraft-showcase-cockpit",
  specifications: "aircraft-showcase-specifications",
  cta: "aircraft-showcase-cta",
} as const;

export const HERO_CAMERA: CameraView = {
  id: "hero",
  name: "Hero — front three-quarter",
  imageFilename: "hero.webp",
  alt: "Front three-quarter Blender render of the aircraft",
};

export const HERO_CONTENT: SectionContent = {
  eyebrow: "The aircraft",
  headline: "Engineered for the display line.",
  description:
    "Every panel, every line, built for one purpose. This is a closer look at the machine behind the formation — rendered, not photographed, until the real thing is ready.",
  cta: {
    label: "Explore the specifications",
    href: `#${SECTION_IDS.specifications}`,
  },
};

export const AIRFRAME_SECTION: AircraftSection = {
  id: SECTION_IDS.airframe,
  camera: {
    id: "airframe",
    name: "Airframe — side profile",
    imageFilename: "airframe.webp",
    alt: "Side profile Blender render of the aircraft airframe",
  },
  content: {
    eyebrow: "Airframe",
    headline: "A structure built to hold its shape under load.",
    description:
      "Placeholder copy — replace with the real airframe write-up. Every surface is stressed for sustained aerobatics, not just straight-and-level flight.",
  },
  specifications: [
    { label: "Empty weight", value: "1,015", unit: "kg" },
    { label: "Wingspan", value: "9.3", unit: "m" },
    { label: "G-rating", value: "+6", unit: "G" },
  ],
};

export const ENGINE_SECTION: AircraftSection = {
  id: SECTION_IDS.engine,
  camera: {
    id: "engine",
    name: "Engine — cowl detail",
    imageFilename: "engine.webp",
    alt: "Detail Blender render of the aircraft engine and cowl",
  },
  content: {
    eyebrow: "Engine",
    headline: "Power that answers instantly.",
    description:
      "Placeholder copy — replace with the real engine write-up. Nine cylinders, one job: instant response, every time it's asked.",
  },
  specifications: [
    { label: "Power", value: "285", unit: "hp" },
    { label: "Top speed", value: "270", unit: "km/h" },
  ],
};

export const COCKPIT_SECTION: AircraftSection = {
  id: SECTION_IDS.cockpit,
  camera: {
    id: "cockpit",
    name: "Cockpit — canopy interior",
    imageFilename: "cockpit.webp",
    alt: "Interior Blender render of the aircraft cockpit and canopy",
  },
  content: {
    eyebrow: "Cockpit",
    headline: "Two seats, full dual controls.",
    description:
      "Placeholder copy — replace with the real cockpit write-up. Built as a trainer, flown as a display aircraft, with every instrument within reach.",
  },
  specifications: [{ label: "Seats", value: "2" }],
};

/** Aggregate of the three alternating rows, in display order. */
export const SHOWCASE_SECTIONS: AircraftSection[] = [
  AIRFRAME_SECTION,
  ENGINE_SECTION,
  COCKPIT_SECTION,
];

export const SPECIFICATIONS_CAMERA: CameraView = {
  id: "specifications",
  name: "Specifications — studio turntable still",
  imageFilename: "specifications.webp",
  alt: "Studio Blender render of the aircraft used for the specifications section",
};

export const SPECIFICATIONS_CONTENT: SectionContent = {
  eyebrow: "Specifications",
  headline: "The numbers behind the airframe.",
  description: "Placeholder copy — replace with the real specifications summary.",
};

export const SPECIFICATIONS: Specification[] = [
  { label: "Power", value: "285", unit: "HP" },
  { label: "Top speed", value: "270", unit: "km/h" },
  { label: "G-rating", value: "+6", unit: "G" },
  { label: "Seats", value: "2" },
];

export const CTA_CONTENT: SectionContent = {
  eyebrow: "Book the team",
  headline: "Put this aircraft in your event.",
  description: "Placeholder copy — replace with the real closing call-to-action copy.",
  cta: {
    label: "Get in touch",
    href: "/contact",
  },
};
