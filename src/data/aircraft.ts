export const aircraft = {
  name: "Yakovlev Yak-52",
  short: "Yak-52",
  /** Filename under public/aircraft/ — large hook image for the home page. Placeholder until real photography exists. */
  hookImage: "hook.jpg",
  role: "Two-seat aerobatic warbird trainer",
  intro:
    "Designed by the Yakovlev Design Bureau in Moscow in the late 1970s, the Yak-52 trained generations of Soviet military pilots. More than 2,000 were built — every one of them by Aerostar in Bacău, Romania. It was engineered for hard use: minimal maintenance, primitive fields, and sustained aerobatics.",
  whyWeFlyIt:
    "The Yak-52 combines warbird character with genuine aerobatic capability. Its airframe is certified for 2,000 hours at a continuous 7G, its radial engine delivers instant response with an unmistakable sound, and its handling rewards precision — the qualities a formation display demands.",
  engine: {
    name: "Vedeneyev M-14P / M-14PF",
    type: "Nine-cylinder air-cooled radial",
    power: "360–400 hp",
    fuel: "Two 60 L wing tanks feeding a fuselage collector — fully inverted fuel & oil system",
    propeller: "Two- or three-blade variable pitch",
  },
  specs: [
    { label: "Maximum speed", value: "420", unit: "km/h", note: "226 kt / 261 mph" },
    { label: "Rate of climb", value: "7.0", unit: "m/s", note: "1,378 ft/min" },
    { label: "Service ceiling", value: "4,000", unit: "m", note: "13,125 ft" },
    { label: "Range", value: "550", unit: "km", note: "296 NM" },
    { label: "G-endurance", value: "7", unit: "G", note: "airframe rated 2,000 h continuous" },
    { label: "Power", value: "400", unit: "hp", note: "M-14PF radial" },
  ],
  dimensions: [
    { label: "Length", value: "7.7 m", imperial: "25 ft 5 in" },
    { label: "Wingspan", value: "9.3 m", imperial: "30 ft 6 in" },
    { label: "Height", value: "2.7 m", imperial: "8 ft 10 in" },
    { label: "Wing area", value: "15 m²", imperial: "161 sq ft" },
    { label: "Empty weight", value: "1,015 kg", imperial: "2,238 lb" },
    { label: "Max takeoff weight", value: "1,305 kg", imperial: "2,877 lb" },
  ],
  performance: [
    { label: "Cruise speed", value: "190 km/h at 1,000 m" },
    { label: "Stall speed", value: "85–90 km/h" },
  ],
  hotspots: [
    {
      id: "engine",
      x: 11,
      y: 46,
      title: "M-14P radial engine",
      text: "Nine air-cooled cylinders, 360–400 hp. Started, like much of the aircraft, by compressed air.",
    },
    {
      id: "cockpit",
      x: 33,
      y: 26,
      title: "Tandem cockpit",
      text: "Two seats in tandem under a sliding canopy — built as a trainer, flown by us in formation with full dual controls.",
    },
    {
      id: "gear",
      x: 36,
      y: 76,
      title: "Semi-retractable gear",
      text: "The wheels stay partially exposed in flight — a Soviet design choice that protects the airframe in a gear-up landing.",
    },
    {
      id: "wings",
      x: 47,
      y: 66,
      title: "Aerobatic wing",
      text: "15 m² of wing rated for +7 / −5 G, with a fully inverted fuel and oil system feeding the engine through every figure.",
    },
    {
      id: "pneumatics",
      x: 72,
      y: 42,
      title: "Pneumatic systems",
      text: "Engine start, landing gear, flaps and brakes all run on compressed air — simple, robust, field-serviceable.",
    },
  ],
  history: [
    { period: "Late 1970s", title: "Designed in Moscow", detail: "Yakovlev Design Bureau conceives a primary trainer for DOSAAF, the Soviet paramilitary flying organisation." },
    { period: "1979 →", title: "Built in Romania", detail: "Series production assigned to Aerostar in Bacău. More than 2,000 airframes leave the line." },
    { period: "Soviet era", title: "Training generations", detail: "Military student pilots learn aerobatics, formation and instrument flying on the type." },
    { period: "1990s →", title: "A civilian warbird", detail: "After the Cold War the Yak-52 spreads worldwide as an affordable, hard-working aerobatic warbird." },
    { period: "Today", title: "The Yakstars fleet", detail: "Six Yak-52s fly in Yakstars colours from Casarrubios and Ponte de Sor." },
  ],
} as const;
