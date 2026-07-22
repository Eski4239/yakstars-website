import { Button, Eyebrow } from "@/components/ui";
import { CTA_CONTENT, SECTION_IDS } from "./constants";

export function CTA() {
  const headingId = `${SECTION_IDS.cta}-heading`;
  return (
    <section
      id={SECTION_IDS.cta}
      aria-labelledby={headingId}
      className="border-t border-line py-20 md:py-28"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl rounded-lg border border-line bg-mist p-10 text-center md:p-14">
          <Eyebrow className="justify-center">{CTA_CONTENT.eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-display-md mt-5 text-balance">
            {CTA_CONTENT.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-slate">
            {CTA_CONTENT.description}
          </p>
          {CTA_CONTENT.cta && (
            <div className="mt-8 flex justify-center">
              <Button href={CTA_CONTENT.cta.href}>{CTA_CONTENT.cta.label}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
