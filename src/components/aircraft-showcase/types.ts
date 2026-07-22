/**
 * One Blender camera setup for a given showcase section — the render that
 * will eventually land at `AIRCRAFT_SHOWCASE_IMAGE_PATH + imageFilename`.
 */
export type CameraView = {
  id: string;
  /** Human-readable camera/shot name, e.g. "Front three-quarter". */
  name: string;
  /** Filename only — joined with AIRCRAFT_SHOWCASE_IMAGE_PATH at render time. */
  imageFilename: string;
  /** Meaningful alt text for the render. */
  alt: string;
};

export type Specification = {
  label: string;
  value: string;
  unit?: string;
};

export type SectionContent = {
  eyebrow: string;
  headline: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
};

/** Shape for each alternating image/content row (Airframe, Engine, Cockpit). */
export type AircraftSection = {
  id: string;
  camera: CameraView;
  content: SectionContent;
  specifications?: Specification[];
};
