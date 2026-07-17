import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Yakstars Display Team website handles your information.",
};

const SECTIONS = [
  {
    title: "What this site collects",
    body: `This website does not use analytics trackers, advertising cookies, or third-party marketing scripts. Browsing the site does not require an account and does not store personal information about you.`,
  },
  {
    title: "Contacting the team",
    body: `The contact form on this site composes an email in your own mail application — nothing you type is stored by this website. When you email ${site.email}, the team receives the information you choose to send (such as your name, email address and message) and uses it only to respond to your enquiry.`,
  },
  {
    title: "External links",
    body: `This site links to external platforms such as Instagram and Facebook. Those services operate under their own privacy policies, which we encourage you to review.`,
  },
  {
    title: "Your rights",
    body: `Under the EU General Data Protection Regulation (GDPR) you may request access to, correction of, or deletion of personal data the team holds about you — for example, from past email correspondence. Write to ${site.email} and the team will handle your request.`,
  },
  {
    title: "Changes",
    body: `If the way this site handles information changes — for example, if analytics are added — this policy will be updated before those changes take effect.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lede="Short version: this site doesn't track you, and the only personal data the team sees is what you choose to email."
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
