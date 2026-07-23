export type TeamEvent = {
  name: string;
  location: string;
  country: "Portugal" | "Spain";
  dates: string; // human-readable
  year: number;
  /** ISO date of the last show day, used to compute upcoming/past */
  endDate: string;
  lat: number;
  lon: number;
};

export const events: TeamEvent[] = [
  {
    name: "Rock in Rio Lisboa",
    location: "Lisbon",
    country: "Portugal",
    dates: "20–21 June 2026",
    year: 2026,
    endDate: "2026-06-21",
    lat: 38.7223,
    lon: -9.1393,
  },
  {
    name: "Gijón International Airshow",
    location: "Gijón",
    country: "Spain",
    dates: "27–28 June 2025",
    year: 2025,
    endDate: "2025-06-28",
    lat: 43.5322,
    lon: -5.6611,
  },
  {
    name: "Beja International Airshow",
    location: "Beja Air Base (BA11)",
    country: "Portugal",
    dates: "2–4 November 2024",
    year: 2024,
    endDate: "2024-11-04",
    lat: 38.015,
    lon: -7.8656,
  },
  {
    name: "Torre del Mar International Airshow",
    location: "Torre del Mar, Málaga",
    country: "Spain",
    dates: "19–20 July 2024",
    year: 2024,
    endDate: "2024-07-20",
    lat: 36.7396,
    lon: -4.0975,
  },
  {
    name: "Dunas Airshow",
    location: "Aveiro",
    country: "Portugal",
    dates: "17–18 & 31 May 2024",
    year: 2024,
    endDate: "2024-05-31",
    lat: 40.6405,
    lon: -8.6538,
  },
  {
    name: "Beiras Airshow",
    location: "Castelo Branco",
    country: "Portugal",
    dates: "1–2 March 2024",
    year: 2024,
    endDate: "2024-03-02",
    lat: 39.8222,
    lon: -7.4913,
  },
  {
    name: "Careto Airshow",
    location: "Bragança",
    country: "Portugal",
    dates: "6–8 September 2023",
    year: 2023,
    endDate: "2023-09-08",
    lat: 41.8073,
    lon: -6.7568,
  },
  {
    name: "Red Burros Fly-in",
    location: "Mogadouro",
    country: "Portugal",
    dates: "2023 season",
    year: 2023,
    endDate: "2023-08-31",
    lat: 41.3406,
    lon: -6.7139,
  },
  {
    name: "Dunas Airshow",
    location: "Aveiro",
    country: "Portugal",
    dates: "2023 season",
    year: 2023,
    endDate: "2023-06-30",
    lat: 40.6405,
    lon: -8.6538,
  },
  {
    name: "Beiras Airshow",
    location: "Castelo Branco",
    country: "Portugal",
    dates: "March 2023",
    year: 2023,
    endDate: "2023-03-24",
    lat: 39.8222,
    lon: -7.4913,
  },
];
