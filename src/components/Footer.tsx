import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { footerLinks, site } from "@/data/site";
import { StarMark } from "@/components/Logo";

const COLUMNS = [
  { title: "The Team", links: footerLinks.team },
  { title: "The Experience", links: footerLinks.experience },
  { title: "Connect", links: footerLinks.connect },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <StarMark size={28} />
              <span className="text-xl font-bold tracking-[0.22em]">YAKSTARS</span>
            </div>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-slate">
              A Spanish–Portuguese precision aerobatic team flying six Yak-52
              warbirds — the largest civilian display team in Southern Europe.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yakstars on Instagram"
                className="text-slate transition-colors hover:text-blue"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yakstars on Facebook"
                className="text-slate transition-colors hover:text-blue"
              >
                <FaFacebook size={22} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-eyebrow text-ink">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[0.95rem] text-slate transition-colors hover:text-blue"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border-t border-line pt-8 text-[0.85rem] text-slate md:grid-cols-2">
          <p>
            {site.bases.map((b, i) => (
              <span key={b.icao}>
                {i > 0 && <span className="mx-2 text-faint">·</span>}
                <span className="font-mono text-[0.8rem]">{b.icao}</span> {b.name},{" "}
                {b.country}
              </span>
            ))}
          </p>
          <p className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end">
            {footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </Link>
            ))}
            <span>© 2014–2026 Yakstars Display Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
