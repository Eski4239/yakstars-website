import { site } from "@/data/site";
import { pilots } from "@/data/team";
import { events } from "@/data/events";

/** Schema.org structured data for the organisation, injected site-wide. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "PerformingGroup",
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    foundingDate: String(site.founded),
    sameAs: [site.social.instagram, site.social.facebook],
    member: pilots.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: `${p.callsign} — ${p.position}`,
    })),
    location: site.bases.map((b) => ({
      "@type": "Place",
      name: `${b.name} (${b.icao})`,
      address: { "@type": "PostalAddress", addressCountry: b.country },
      geo: { "@type": "GeoCoordinates", latitude: b.coords.lat, longitude: b.coords.lon },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Schema.org Event markup for the schedule page. */
export function EventsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: events.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Event",
        name: `${site.name} at ${e.name}`,
        endDate: e.endDate,
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: e.location,
          address: { "@type": "PostalAddress", addressCountry: e.country },
        },
        performer: { "@type": "PerformingGroup", name: site.fullName, url: site.url },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
