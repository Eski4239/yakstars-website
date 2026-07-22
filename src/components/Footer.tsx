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

        <div className="mt-16 border-t border-line pt-8 text-[0.85rem] text-slate">
          <p>© 2014–2026 Yakstars Display Team</p>
        </div>
      </div>
    </footer>
  );
}
