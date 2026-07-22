export type Sponsor = {
  name: string;
  slug: string;
  /** Filename under public/sponsors/ — transparent background, ~200×80. Placeholder until real logos are supplied. */
  logo: string;
};

// Placeholder roster — replace name/slug/logo once real sponsors are confirmed.
export const sponsors: Sponsor[] = [
  { name: "Sponsor 01", slug: "sponsor-01", logo: "sponsor-01.svg" },
  { name: "Sponsor 02", slug: "sponsor-02", logo: "sponsor-02.svg" },
  { name: "Sponsor 03", slug: "sponsor-03", logo: "sponsor-03.svg" },
  { name: "Sponsor 04", slug: "sponsor-04", logo: "sponsor-04.svg" },
  { name: "Sponsor 05", slug: "sponsor-05", logo: "sponsor-05.svg" },
  { name: "Sponsor 06", slug: "sponsor-06", logo: "sponsor-06.svg" },
] as const;
