export type TeamEvent = {
  name: string;
  location: string;
  country: "Portugal" | "Spain";
  dates: string; // human-readable
  year: number;
  /** ISO date of the last show day, used to compute upcoming/past */
  endDate: string;
  note?: string;
};

export const events: TeamEvent[] = [
  {
    name: "Rock in Rio Lisboa",
    location: "Lisbon",
    country: "Portugal",
    dates: "20–21 June 2026",
    year: 2026,
    endDate: "2026-06-21",
    note: "Display flights over the festival",
  },
  {
    name: "Gijón International Airshow",
    location: "Gijón",
    country: "Spain",
    dates: "27–28 June 2025",
    year: 2025,
    endDate: "2025-06-28",
  },
  {
    name: "Beja International Airshow",
    location: "Beja Air Base (BA11)",
    country: "Portugal",
    dates: "2–4 November 2024",
    year: 2024,
    endDate: "2024-11-04",
  },
  {
    name: "Torre del Mar International Airshow",
    location: "Torre del Mar, Málaga",
    country: "Spain",
    dates: "19–20 July 2024",
    year: 2024,
    endDate: "2024-07-20",
  },
  {
    name: "Dunas Airshow",
    location: "Aveiro",
    country: "Portugal",
    dates: "17–18 & 31 May 2024",
    year: 2024,
    endDate: "2024-05-31",
  },
  {
    name: "Beiras Airshow",
    location: "Castelo Branco",
    country: "Portugal",
    dates: "1–2 March 2024",
    year: 2024,
    endDate: "2024-03-02",
  },
  {
    name: "Careto Airshow",
    location: "Bragança",
    country: "Portugal",
    dates: "6–8 September 2023",
    year: 2023,
    endDate: "2023-09-08",
  },
  {
    name: "Red Burros Fly-in",
    location: "Mogadouro",
    country: "Portugal",
    dates: "2023 season",
    year: 2023,
    endDate: "2023-08-31",
  },
  {
    name: "Dunas Airshow",
    location: "Aveiro",
    country: "Portugal",
    dates: "2023 season",
    year: 2023,
    endDate: "2023-06-30",
  },
  {
    name: "Beiras Airshow",
    location: "Castelo Branco",
    country: "Portugal",
    dates: "March 2023",
    year: 2023,
    endDate: "2023-03-24",
  },
];

export const scheduleNote =
  "The Yakstars fly a full season of airshows and events across Portugal and Spain every year, and have done so since 2017 — from Ponte de Sor and the Algarve to military bases across the Peninsula. Booking for the upcoming season is open.";
