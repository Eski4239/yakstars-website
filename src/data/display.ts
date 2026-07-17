export type Maneuver = {
  order: number;
  name: string;
  aircraft: number; // number of aircraft involved
  formation?: "vic" | "diamond" | "arrow" | "trail" | "solo" | "mixed";
  description: string;
};

export const display = {
  duration: "15–17 min",
  figures: "14+",
  displaysFlown: "200+",
  intro:
    "Fifteen to seventeen minutes. More than fourteen figures. Six radial engines moving as one. The Yakstars display opens with a fast, powerful approach in Vic formation — aircraft in extremely tight proximity — and does not let go until the final break.",
  sequence: [
    {
      order: 1,
      name: "Loop in Vic Formation",
      aircraft: 5,
      formation: "vic",
      description:
        "Five aircraft arrive fast and low in a tight Vic and pull together through a full formation loop — the opening statement of the show.",
    },
    {
      order: 2,
      name: "Solo Manoeuvres",
      aircraft: 1,
      formation: "solo",
      description:
        "While the formation repositions, the solo carves the display line with high-energy aerobatics.",
    },
    {
      order: 3,
      name: "Cloverleaf & Loop — Diamond",
      aircraft: 4,
      formation: "diamond",
      description:
        "Four aircraft lock into a diamond and trace a cloverleaf into a loop, holding position through every change of plane.",
    },
    {
      order: 4,
      name: "Solo Manoeuvres",
      aircraft: 1,
      formation: "solo",
      description: "The solo returns, filling the sky between formation passes.",
    },
    {
      order: 5,
      name: "Barrel Roll & 270° Turn — Diamond",
      aircraft: 4,
      formation: "diamond",
      description:
        "The diamond rolls as a single aircraft, then bends the formation through a 270-degree turn back onto the display axis.",
    },
    {
      order: 6,
      name: "Solo Manoeuvres",
      aircraft: 1,
      formation: "solo",
      description: "Gyroscopic figures and vertical work in front of the crowd.",
    },
    {
      order: 7,
      name: "French Crossing",
      aircraft: 4,
      formation: "mixed",
      description:
        "Four aircraft converge from opposite ends of the display line and cross at the centre point — timed to the second.",
    },
    {
      order: 8,
      name: "Solo Manoeuvres",
      aircraft: 1,
      formation: "solo",
      description: "The final solo passage builds toward the closing sequence.",
    },
    {
      order: 9,
      name: "Close Trail Sequence",
      aircraft: 2,
      formation: "trail",
      description:
        "Two aircraft in close trail follow each other through a loop, a barrel roll and a 360-degree turn — a study in following precision.",
    },
    {
      order: 10,
      name: "Tiramisu",
      aircraft: 3,
      formation: "mixed",
      description:
        "The team’s signature three-ship: barrel roll, loop and wingovers layered into one continuous figure.",
    },
    {
      order: 11,
      name: "Low Pass — Arrow Formation",
      aircraft: 6,
      formation: "arrow",
      description:
        "All six aircraft sweep past the crowd line in a single arrow — the full team in one frame.",
    },
    {
      order: 12,
      name: "Final Break",
      aircraft: 6,
      formation: "arrow",
      description:
        "The formation pitches up and breaks apart in sequence, smoke on, engines singing — the Yakstars’ farewell.",
    },
  ] satisfies Maneuver[],
  philosophy: [
    {
      title: "Choreographed, not improvised",
      text: "A new display sequence is defined every year, and every manoeuvre is exhaustively evaluated and trained before it flies in public.",
    },
    {
      title: "Selected, not assembled",
      text: "Before each season the Chief Pilot evaluates and selects the pilots who will fly. Three characteristics decide it: experience, discipline and flying skills.",
    },
    {
      title: "Two ships to six",
      text: "The display alternates full-formation figures with two-ship and solo aerobatics, so the sky in front of the crowd is never empty.",
    },
  ],
} as const;

/** Relative aircraft positions for formation diagrams (x, y in a 0–100 box). */
export const formations: Record<string, { name: string; ships: { x: number; y: number }[] }> = {
  vic: {
    name: "Vic",
    ships: [
      { x: 50, y: 30 },
      { x: 38, y: 48 },
      { x: 62, y: 48 },
      { x: 26, y: 66 },
      { x: 74, y: 66 },
    ],
  },
  diamond: {
    name: "Diamond",
    ships: [
      { x: 50, y: 24 },
      { x: 36, y: 46 },
      { x: 64, y: 46 },
      { x: 50, y: 68 },
    ],
  },
  arrow: {
    name: "Arrow",
    ships: [
      { x: 50, y: 22 },
      { x: 39, y: 40 },
      { x: 61, y: 40 },
      { x: 28, y: 58 },
      { x: 72, y: 58 },
      { x: 50, y: 58 },
    ],
  },
  trail: {
    name: "Close Trail",
    ships: [
      { x: 50, y: 30 },
      { x: 50, y: 55 },
    ],
  },
  solo: {
    name: "Solo",
    ships: [{ x: 50, y: 45 }],
  },
  mixed: {
    name: "Cross",
    ships: [
      { x: 30, y: 35 },
      { x: 70, y: 35 },
      { x: 30, y: 62 },
      { x: 70, y: 62 },
    ],
  },
};
