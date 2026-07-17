import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal information for the Yakstars Display Team website.",
};

const SECTIONS = [
  {
    title: "Website operator",
    body: `This website is published by the Yakstars Display Team, whose pilots and crew are members of ${site.association.name}, a non-profit association registered in Spain's National Association Registry. Contact: ${site.email}.`,
  },
  {
    title: "Content & copyright",
    body: `All content on this website — text, graphics, artwork and design — is © 2014–2026 Yakstars Display Team, all rights reserved, unless otherwise credited. Content may not be reproduced without prior written permission.`,
  },
  {
    title: "Trademarks",
    body: `Team names, marks and liveries appearing on this site belong to their respective owners. References to aircraft manufacturers and third parties are informational.`,
  },
  {
    title: "Display operations",
    body: `All Yakstars display flying is performed by qualified pilots under the applicable aviation regulations and display authorisations of the countries in which the team performs. Nothing on this website constitutes operational or aeronautical guidance.`,
  },
  {
    title: "Liability",
    body: `The information on this website is provided in good faith and for general information. While the team works to keep it accurate and current, no warranty is given as to completeness or fitness for any purpose, and the team accepts no liability for decisions made on the basis of this website.`,
  },
];

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Legal notice"
        lede="Publisher information, copyright and terms for this website."
      />
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl space-y-12">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <h2 className="text-2xl font-bold tracking-tight">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-slate">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
