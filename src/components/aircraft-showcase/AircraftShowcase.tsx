import { Airframe } from "./Airframe";
import { Cockpit } from "./Cockpit";
import { CTA } from "./CTA";
import { Engine } from "./Engine";
import { Hero } from "./Hero";
import { Specifications } from "./Specifications";

/**
 * Aircraft Showcase — the full Hero → Airframe → Engine → Cockpit →
 * Specifications → CTA sequence. This is the only export other pages need.
 *
 * Structure only: no animation library is wired up here. See
 * components/aircraft-showcase/README.md for where GSAP ScrollTrigger will
 * later attach and where the Blender renders belong.
 */
export function AircraftShowcase() {
  return (
    <article>
      <Hero />
      <Airframe />
      <Engine />
      <Cockpit />
      <Specifications />
      <CTA />
    </article>
  );
}
