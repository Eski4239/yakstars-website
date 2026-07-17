import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.fullName} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="44" height="44" viewBox="0 0 100 100">
            <path
              d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z"
              fill="#0b3c8d"
            />
            <path d="M50 0 L61 39 L100 50 L61 61 L50 100 Z" fill="#c8102e" />
          </svg>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 10,
              color: "#0b0c10",
            }}
          >
            YAKSTARS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -4,
              color: "#0b0c10",
              lineHeight: 1.02,
            }}
          >
            Precision. Passion.
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -4,
              color: "#0b3c8d",
              lineHeight: 1.02,
            }}
          >
            Performance.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#52535c" }}>
            Six Yak-52 warbirds. One formation. Southern Europe&apos;s largest
            civilian display team.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#86878f",
          }}
        >
          <div>www.yakstars.net</div>
          <div style={{ color: "#c8102e", fontWeight: 700 }}>
            LEMT Casarrubios · LPSO Ponte de Sor
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
