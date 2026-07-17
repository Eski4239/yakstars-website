import type { Metadata } from "next";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { PageHero } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { PlaneMark } from "@/components/art/Plane";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book the Yakstars for your airshow or event, discuss a partnership, or reach the team's media contacts.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s put six ships
            <br />
            <span className="text-slate">over your horizon.</span>
          </>
        }
        lede="The fastest way to reach the team is email — for bookings, partnerships and media. Someone will get back to you promptly."
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-eyebrow text-ink">Email</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-block text-2xl font-bold tracking-tight text-blue transition-colors hover:text-blue-deep"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.15}>
                <h2 className="text-eyebrow text-ink">Bases</h2>
              </Reveal>
              <Stagger className="mt-5 space-y-4">
                {site.bases.map((b) => (
                  <StaggerItem key={b.icao}>
                    <div className="rounded-2xl bg-mist p-6">
                      <div className="flex items-center gap-3">
                        <PlaneMark size={18} rotate={45} className="text-blue" />
                        <p className="font-mono text-sm font-bold tracking-[0.2em] text-red">
                          {b.icao}
                        </p>
                      </div>
                      <p className="mt-2.5 text-lg font-bold tracking-tight">{b.name}</p>
                      <p className="text-sm text-slate">{b.region}</p>
                      <p className="mt-2 font-mono text-xs text-faint">
                        {b.coords.lat.toFixed(4)}°N, {Math.abs(b.coords.lon).toFixed(4)}°W
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-eyebrow text-ink">Follow the team</h2>
                <div className="mt-4 flex gap-3">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-full border border-line px-5 py-3 text-sm font-semibold text-slate transition-all hover:border-ink hover:text-ink"
                  >
                    <FaInstagram size={18} /> Instagram
                  </a>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-full border border-line px-5 py-3 text-sm font-semibold text-slate transition-all hover:border-ink hover:text-ink"
                  >
                    <FaFacebook size={18} /> Facebook
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
