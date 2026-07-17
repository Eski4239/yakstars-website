export type TimelineEntry = { period: string; title: string; detail?: string };

export type Pilot = {
  slug: string;
  name: string;
  nickname?: string;
  callsign: string; // e.g. "Yakstar 1"
  number: string; // big F1-style number, "CP" for chief pilot
  position: string;
  origin: string;
  flightHours: number;
  flightHoursLabel: string;
  headline: string; // one factual signature line
  bio: string[];
  aircraft: string[];
  achievements: string[];
  timeline: TimelineEntry[];
  accent: "blue" | "red" | "gold";
};

export const pilots: Pilot[] = [
  {
    slug: "miguel-padilla",
    name: "Miguel Padilla",
    nickname: "Pay",
    callsign: "Chief Pilot",
    number: "CP",
    position: "Chief Pilot & Team Manager",
    origin: "Sevilla, Spain",
    flightHours: 20000,
    flightHoursLabel: "20,000+",
    headline:
      "Fighter pilot, carrier aviator and airline captain with more than two decades of military flying.",
    bio: [
      "Miguel “Pay” Padilla leads the Yakstars in the air and on the ground. Born in Sevilla and based in Jerez de la Frontera, he spent more than eighteen years flying for the Spanish Air Force and four for the Spanish Navy — a career that took him from instructing on the C-101 Aviojet to the cockpits of the F-5A, Mirage F-1, F-18A and AV-8B Harrier II Plus.",
      "He logged more than one hundred carrier landings and served an exchange tour with the U.S. Marine Corps in Marine Attack Squadron 542. In civilian life he captained Boeing, McDonnell Douglas and Airbus airliners for Spanair and Iberia Express, investigated accidents for Spain’s national civil aviation commission, and is qualified as a display director at major Spanish airshows.",
      "As Chief Pilot he owns the team’s strategic decisions, runs the training programme and shapes the choreography of every show.",
    ],
    aircraft: ["C-101 Aviojet", "F-5A", "Mirage F-1", "F-18A", "AV-8B Harrier II+", "Yak-52"],
    achievements: [
      "18+ years Spanish Air Force, 4 years Spanish Navy",
      "100+ aircraft-carrier landings",
      "Exchange tour, U.S. Marine Corps VMA-542",
      "Airline captain — Spanair & Iberia Express",
      "National civil aviation accident investigator",
      "Qualified airshow display director",
    ],
    timeline: [
      { period: "Spanish Air Force", title: "Fighter pilot & C-101 instructor", detail: "18+ years — F-5A, Mirage F-1, F-18A" },
      { period: "Spanish Navy", title: "AV-8B Harrier II Plus", detail: "4 years — 100+ carrier landings" },
      { period: "USMC exchange", title: "Marine Attack Squadron 542" },
      { period: "Airlines", title: "Captain — Spanair & Iberia Express", detail: "Boeing, McDonnell Douglas, Airbus" },
      { period: "Yakstars", title: "Chief Pilot & Team Manager", detail: "Training, choreography, strategy" },
    ],
    accent: "blue",
  },
  {
    slug: "patrick-koch",
    name: "Patrick Koch",
    callsign: "Yakstar 1",
    number: "1",
    position: "Flight Leader",
    origin: "Madrid, Spain",
    flightHours: 0,
    flightHoursLabel: "20 yrs on Yak-52",
    headline:
      "In 2022 he became the first flight leader in team history without a military background.",
    bio: [
      "Patrick Koch flies at the point of the formation. A private pilot since 1996 with single- and multi-engine ratings, he has spent nearly twenty years flying aerobatics and formation on the Yak-52 and is a qualified Yak-52 formation flying supervisor.",
      "His logbook ranges from taildraggers and radial-engine warbirds to Citation jets and the Extra 300 and 330. He has won gold at the CEVA aerobatic championships in both Sportsman and Intermediate categories and raced at the Cascais Air Race in 2014, 2016 and 2018.",
      "Beyond his own flying, Patrick managed the Red Bull Air Race team of Spanish racing pilot Juan Velarde — experience in precision, logistics and performance that he now brings to leading the Yakstars formation.",
    ],
    aircraft: ["Yak-52", "Extra 300", "Extra 330", "Citation jets", "Radial-engine taildraggers"],
    achievements: [
      "First civilian flight leader in team history (2022)",
      "CEVA gold — Sportsman & Intermediate",
      "Cascais Air Race — 2014, 2016, 2018",
      "Yak-52 formation flying supervisor",
      "Team manager, Juan Velarde Red Bull Air Race team",
    ],
    timeline: [
      { period: "1996", title: "Private pilot licence", detail: "Single- and multi-engine" },
      { period: "2000s", title: "Aerobatics & formation on the Yak-52" },
      { period: "2014–2018", title: "Cascais Air Race competitor" },
      { period: "Red Bull Air Race", title: "Team manager for Juan Velarde" },
      { period: "2022", title: "Selected Flight Leader — Yakstar 1" },
    ],
    accent: "red",
  },
  {
    slug: "nico-goulet",
    name: "Nico Goulet",
    callsign: "Yakstar 2",
    number: "2",
    position: "Right Wing & Solo",
    origin: "Mallorca, Spain",
    flightHours: 0,
    flightHoursLabel: "1,000+ Yak-52 flights",
    headline:
      "MIT aerospace engineer, venture capitalist, and more than a thousand flights in the “Blue Devil”.",
    bio: [
      "Nico Goulet flies right wing and solo. Born in Mallorca to an Irish-Canadian family, he holds an aerospace engineering degree from MIT and is co-founder and managing partner of Adara Ventures, a technology venture capital firm.",
      "He began gliding in Boston, converted to powered flight in Paris, and has since flown more than twenty aircraft types, holding qualifications on fifteen. His distinctive Yak-52 — the “Blue Devil” — has carried him through more than a thousand flights.",
      "Across twenty-three years of competitive flying he has taken silver and gold medals at the CEVA championships and the Copa Triangular at Sportsman, Intermediate and Advanced levels. He is a pilot member of the Infante de Orleans Foundation, flying and preserving historic aircraft, and has flown with the Yakstars formation since 2022.",
    ],
    aircraft: ["Yak-52 “Blue Devil”", "Extra 300S", "Gliders", "20+ types flown"],
    achievements: [
      "Aerospace engineering degree — MIT",
      "CEVA & Copa Triangular medals — Sportsman to Advanced",
      "1,000+ flights in the “Blue Devil”",
      "Qualified on 15 aircraft types",
      "Pilot member, Infante de Orleans Foundation",
    ],
    timeline: [
      { period: "Boston", title: "First flights — gliding", detail: "While studying aerospace engineering at MIT" },
      { period: "Paris", title: "Transition to powered flight" },
      { period: "2000s", title: "Competition aerobatics", detail: "CEVA & Copa Triangular medals" },
      { period: "Madrid", title: "Co-founds Adara Ventures" },
      { period: "2022", title: "Joins the Yakstars — Yakstar 2" },
    ],
    accent: "blue",
  },
  {
    slug: "tiago-correia",
    name: "Tiago Correia",
    callsign: "Yakstar 3",
    number: "3",
    position: "Left Wing",
    origin: "Lisbon, Portugal",
    flightHours: 10000,
    flightHoursLabel: "10,000+",
    headline:
      "Airbus captain qualified on fifty-five aircraft types — from crop-dusters to airliners.",
    bio: [
      "Tiago Correia holds the left wing. Born in Lisbon and educated at Pupilos do Exército, Portugal’s prestigious military school, he has logged more than ten thousand flight hours and is qualified on fifty-five different aircraft types, including the military Pilatus P-3.",
      "Few logbooks are as varied: touring, firefighting, crop-dusting, turboprops, radial taildraggers and Boeing 737 cargo operations, before settling into his current role as an Airbus A319/A320/A321 captain.",
      "He first flew the Yak-52 early in his career as a flight instructor, and has spent fifteen years flying aerobatics and training in formation with the team.",
    ],
    aircraft: ["Airbus A319/320/321", "Boeing 737F", "Pilatus P-3", "Yak-52", "55 types"],
    achievements: [
      "10,000+ flight hours",
      "Qualified on 55 aircraft types",
      "Firefighting & agricultural operations",
      "Airbus A319/A320/A321 captain",
      "15 years of team aerobatics & formation",
    ],
    timeline: [
      { period: "Lisbon", title: "Pupilos do Exército military school" },
      { period: "Early career", title: "Flight instructor — first Yak-52 flight" },
      { period: "Operations", title: "Firefighting, crop-dusting, cargo", detail: "Boeing 737 freight" },
      { period: "Airlines", title: "Captain — Airbus A319/A320/A321" },
      { period: "Yakstars", title: "Left Wing — Yakstar 3", detail: "15 years with the formation" },
    ],
    accent: "gold",
  },
  {
    slug: "luis-alvarez",
    name: "Luis Alvarez",
    callsign: "Yakstar 4",
    number: "4",
    position: "Right Wing & Right Outer Wing",
    origin: "Badajoz, Spain",
    flightHours: 16000,
    flightHoursLabel: "16,000+",
    headline:
      "A330/A350 line training captain who started in gliders at sixteen.",
    bio: [
      "Luis Alvarez flies right wing and right outer wing. From Badajoz, he first left the ground in a glider at sixteen, then trained through the Futura Program at Lufthansa Flight School in Bremen and Arizona.",
      "His airline career runs from Air Consul and AirTruck cargo operations through Lufthansa to twenty-seven years with Iberia, where he serves today as an A330/A350 line training captain after years as an A320 type-rating instructor and examiner. His logbook exceeds sixteen thousand hours.",
      "An aerobatic pilot since 2009, he has competed in the Spanish Aerobatic Championship and the Copa Triangular at Advanced level, is a member of the Infante de Orleans Foundation, and joined the Yakstars in 2024.",
    ],
    aircraft: ["Airbus A330/A350", "Airbus A320", "Yak-52", "Gliders"],
    achievements: [
      "16,000+ flight hours",
      "A330/A350 Line Training Captain — Iberia",
      "27 years with Iberia",
      "Spanish Aerobatic Championship & Copa Triangular — Advanced",
      "Member, Infante de Orleans Foundation",
    ],
    timeline: [
      { period: "Age 16", title: "First flights in gliders" },
      { period: "Lufthansa Flight School", title: "Futura Program", detail: "Bremen & Arizona" },
      { period: "Airlines", title: "Air Consul, AirTruck, Lufthansa, Iberia" },
      { period: "2009", title: "Begins competition aerobatics" },
      { period: "2024", title: "Joins the Yakstars — Yakstar 4" },
    ],
    accent: "red",
  },
  {
    slug: "fernando-marinho-pereira",
    name: "Fernando Marinho Pereira",
    callsign: "Yakstar 5",
    number: "5",
    position: "Flight Leader · Slot · Left Outer Wing",
    origin: "Aveiro, Portugal",
    flightHours: 19500,
    flightHoursLabel: "19,500+",
    headline:
      "Former Asas de Portugal display pilot with more than 500 airshow performances.",
    bio: [
      "Fernando Marinho Pereira is one of the most experienced display pilots in the Iberian Peninsula. Born in Aveiro and raised in Alenquer, he graduated from the Portuguese Air Force Academy and completed USAF Undergraduate Pilot Training, going on to fly the Chipmunk, T-37, T-38, FIAT G-91 and Alpha Jet as a ground-attack pilot and advanced weapons instructor with 301 “Tiger” Squadron.",
      "He flew the number 3 and number 5 positions with Asas de Portugal, the Portuguese Air Force aerobatic team, before an airline career as captain on the Airbus A319/A320/A321 and A340 — qualified as type-rating examiner and instructor, line check and line training captain, and maintenance check flight pilot.",
      "With more than 19,500 hours — over 3,000 of them in formation and low-level aerobatics — and more than five hundred airshow performances on types from military jets to Extras, Pitts Specials, Yaks and the Antonov AN-2, he flies slot, left outer wing, and leads the formation when the show demands it.",
    ],
    aircraft: ["FIAT G-91", "Alpha Jet", "T-37 / T-38", "Airbus A320/A340", "Yak-52", "Antonov AN-2"],
    achievements: [
      "19,500+ flight hours — 3,000+ in formation & low-level aerobatics",
      "Portuguese Air Force Academy & USAF pilot training",
      "Asas de Portugal — positions 3 and 5",
      "500+ airshow performances",
      "TRE, TRI, LCC, LTC & maintenance check pilot",
      "Formation flying supervisor & flight instructor",
    ],
    timeline: [
      { period: "Air Force Academy", title: "Portuguese Air Force graduate", detail: "USAF Undergraduate Pilot Training" },
      { period: "301 Tiger Squadron", title: "FIAT G-91 & Alpha Jet", detail: "Ground attack — advanced & weapons instructor" },
      { period: "Asas de Portugal", title: "Military display pilot", detail: "Positions 3 and 5" },
      { period: "Airlines", title: "Captain — A319/A320/A321 & A340", detail: "TRE · TRI · LCC · LTC" },
      { period: "Yakstars", title: "Yakstar 5 — slot & flight leader" },
    ],
    accent: "blue",
  },
  {
    slug: "david-jimenez",
    name: "David Jimenez",
    callsign: "Yakstar 6",
    number: "6",
    position: "Solo · Left & Right Outer Wing",
    origin: "Madrid, Spain",
    flightHours: 10000,
    flightHoursLabel: "10,000+",
    headline:
      "Aerobatic champion across multiple categories; first flew at eleven years old.",
    bio: [
      "David Jimenez flies the solo and outer-wing positions. His path began at eleven, in the air with his father, and he earned his first licence while still a teenager.",
      "He trained in hard-edged aerobatics on the Sukhoi Su-29M and the Yak-52, taking championship titles in multiple categories — precision he now channels into solo display flying between the formation’s passes.",
      "Professionally he has flown the Cessna Citation 525, Learjet 35, Bombardier Global Express 6000 and Boeing 757, instructed as a TRI across the Airbus A320, A330 and A340 families, and today commands the Boeing 737 NG/MAX. His logbook exceeds ten thousand hours.",
    ],
    aircraft: ["Sukhoi Su-29M", "Yak-52", "Boeing 737 NG/MAX", "Global Express 6000", "Learjet 35"],
    achievements: [
      "Aerobatic championship titles in multiple categories",
      "10,000+ flight hours",
      "Boeing 737 NG/MAX captain",
      "Former TRI — Airbus A320/A330/A340",
      "First flight at age 11",
    ],
    timeline: [
      { period: "Age 11", title: "First flight, with his father" },
      { period: "Teens", title: "First pilot licence" },
      { period: "Competition", title: "Champion — multiple categories", detail: "Sukhoi Su-29M & Yak-52" },
      { period: "Corporate & airline", title: "Citation, Learjet, Global, B757" },
      { period: "Yakstars", title: "Solo — Yakstar 6", detail: "Boeing 737 NG/MAX captain" },
    ],
    accent: "gold",
  },
];

export type SupportMember = {
  name: string;
  nickname?: string;
  role: string;
  origin: string;
  bio: string;
  highlights: string[];
};

export const supportTeam: SupportMember[] = [
  {
    name: "Emilio Ranz",
    role: "Safety Supervisor & Reserve Pilot",
    origin: "Madrid, Spain",
    bio: "A former Spanish Air Force squadron leader and experimental test pilot — selected for the USAF Test Pilot School at Edwards AFB — Emilio has flown everything from the T-6 Texan and HA-200 Saeta to the F-4C Phantom and EF-18A. With more than 20,000 hours, a Yak-52 logbook that opened in 1999, and airline commands at Spanair and Air Arabia, he supervises the safety of every Yakstars display.",
    highlights: [
      "20,000+ flight hours",
      "USAF Test Pilot School, Edwards AFB",
      "Spanish Air Force squadron leader",
      "Flying the Yak-52 since 1999",
    ],
  },
  {
    name: "Miguel Salas",
    role: "Team Support & Coordination",
    origin: "Reus, Catalonia",
    bio: "A former military pilot and Iberia captain — instructor and examiner on the Airbus A320, A330, A340 and A350 — Miguel has flown the Yak-52 since 2004 and competed in the Copa Triangular, CEVA and air races. A member of the Infante de Orleans Foundation, he also flies vintage aircraft including a Polikarpov Po-2.",
    highlights: [
      "20,000+ flight hours",
      "Iberia captain — A320 to A350, instructor & examiner",
      "Yak-52 pilot since 2004",
      "Infante de Orleans Foundation",
    ],
  },
  {
    name: "Carlos Saraiva",
    role: "Reserve Pilot",
    origin: "Porto, Portugal",
    bio: "An engineer and entrepreneur with a thirty-eight-year flying career, Carlos has logged more than 8,500 hours across dozens of types — gliders, ultralights, taildraggers, radials and business jets — and holds qualifications on more than twenty, from the Yak-52 and Antonov 2 to the Cessna Citation CJ3, on which he flies as captain.",
    highlights: [
      "8,500+ flight hours over 38 years",
      "Qualified on 20+ aircraft types",
      "Citation 501SP & CJ3 captain",
    ],
  },
  {
    name: "Stephane Cottrell",
    role: "Team Support & Logistics",
    origin: "Madrid, Spain",
    bio: "An architect whose studio in Madrid and Paris has delivered projects worldwide — including airport infrastructure — Stephane brings a competitor’s discipline from motorsport, having raced motorcycles and cars including the 24 Hours of Barcelona and Spa. A private pilot, he currently flies the Yak-18T and joined the team at the end of 2023.",
    highlights: [
      "Architect — studios in Madrid & Paris",
      "Endurance racing — Barcelona & Spa 24h",
      "Flies the Yak-18T",
    ],
  },
  {
    name: "Ivan Rey",
    nickname: "Ivich",
    role: "Narrator · Public Relations & Social Media",
    origin: "Madrid, Spain",
    bio: "The voice of the Yakstars at every show. Son of a Spanish Air Force F-4C Phantom fighter pilot, Ivan began flying gliders at sixteen and has held a pilot licence since 2004. A senior IT consultant by profession, he has narrated the team and run its public relations since 2017.",
    highlights: [
      "Team narrator since 2017",
      "Glider pilot from age 16",
      "Licensed pilot since 2004",
    ],
  },
  {
    name: "Fabiana",
    role: "Public Relations & Social Media",
    origin: "Palmela, Portugal",
    bio: "An airline pilot on the Airbus A320 family, type-rated on the Boeing 737 NG/MAX, with a master’s degree in architecture. Fabiana shares the team’s public relations and social media, supports logistics, aircraft parking and flight-plan filing — and is training in aerobatics and formation flying herself.",
    highlights: [
      "Airbus A320-family airline pilot",
      "Boeing 737 NG/MAX type rating",
      "Master’s degree in architecture",
    ],
  },
  {
    name: "Luis Delgado",
    nickname: "Alicates",
    role: "Chief Engineer",
    origin: "Bilbao, Spain",
    bio: "One of the most experienced Yak-52 engineers in the world. Certified on the Yak-52 and its M-14P radial for more than twenty-five years, Luis began his career at Iberia and holds qualifications on more than fifty aircraft types — Boeings, Airbuses, McDonnell Douglas, turboprops and radials.",
    highlights: [
      "25+ years on the Yak-52 / M-14P",
      "Qualified on 50+ aircraft types",
      "Career began at Iberia",
    ],
  },
  {
    name: "Pawel Kidon Dzoga",
    role: "Engineer",
    origin: "Poland",
    bio: "A polyvalent Yak-52 specialist working across engines, structures and electrical systems, Pawel came to aviation from an electronics background. He is a pilot himself, and spends his free time paragliding and hang-gliding.",
    highlights: [
      "Yak-52 engines, structures & electrics",
      "Electronics specialist background",
      "Pilot, paraglider & hang-glider",
    ],
  },
];
