export const site = {
  name: "Yakstars",
  fullName: "Yakstars Display Team",
  tagline: "Precision. Passion. Performance.",
  description:
    "The Yakstars are a Spanish–Portuguese formation aerobatic display team flying Yak-52 warbirds — the largest civilian aerobatic display team in Southern Europe.",
  url: "https://www.yakstars.net",
  email: "yakstars@yahoo.com",
  founded: 2015,
  social: {
    instagram: "https://www.instagram.com/yakstars/",
    facebook: "https://www.facebook.com/YakstarsDisplayTeam",
  },
  bases: [
    {
      icao: "LEMT",
      name: "Casarrubios del Monte",
      region: "Madrid, Spain",
      country: "Spain",
      coords: { lat: 40.2354, lon: -4.0262 },
    },
    {
      icao: "LPSO",
      name: "Ponte de Sor",
      region: "Alentejo, Portugal",
      country: "Portugal",
      coords: { lat: 39.2115, lon: -8.0577 },
    },
  ],
  association: {
    name: "Asociación Jacob 52",
    motto: "Soñadores con Alas — Dreamers with Wings",
    members: 50,
    aircraft: 14,
    description:
      "A non-profit association registered in Spain dedicated to aeronautical culture and aerobatic flight. The Yakstars draw their pilots from its ranks.",
  },
  stats: [
    { value: 6, suffix: "", label: "Yak-52 warbirds in formation" },
    { value: 200, suffix: "+", label: "public displays flown" },
    { value: 14, suffix: "+", label: "figures in the 2026 sequence" },
    { value: 100000, suffix: "+", label: "combined flight hours across the roster" },
  ],
} as const;

/** Filenames under public/hero/ — full-bleed rotating hero background. Placeholder seeds until real photography exists. */
export const heroImages = [
  { seed: 20, filename: "hero-1.jpg" },
  { seed: 21, filename: "hero-2.jpg" },
  { seed: 22, filename: "hero-3.jpg" },
  { seed: 23, filename: "hero-4.jpg" },
] as const;

export const navLinks = [
  { href: "/team", label: "The Team" },
  { href: "/aircraft", label: "Aircraft" },
  { href: "/display", label: "The Display" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
] as const;

export const footerLinks = {
  team: [
    { href: "/team", label: "Overview" },
  ],
  experience: [
    { href: "/aircraft", label: "The Yak-52" },
    { href: "/display", label: "Display Sequence" },
    { href: "/schedule", label: "Schedule" },
    { href: "/gallery", label: "Gallery" },
  ],
  connect: [
    { href: "/sponsors", label: "Partnerships" },
    { href: "/media", label: "Media" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/legal", label: "Legal" },
  ],
} as const;
