import type { Metadata } from "next";
import { Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { ScheduleList } from "@/components/schedule/ScheduleList";
import { EventsMap } from "@/components/schedule/EventsMap";
import { BannerSlideshow } from "@/components/schedule/BannerSlideshow";
import { EventsJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Where the Yakstars fly next — airshows and events across Portugal and Spain, plus the seasons already flown.",
};

export default function SchedulePage() {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <>
      <EventsJsonLd />

      <header className="border-b border-line bg-white pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="container-x">
          <Reveal>
            <h1 className="text-display-lg text-balance">Schedule</h1>
          </Reveal>
        </div>
      </header>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <ScheduleList today={today} />
          </Reveal>

          <Reveal delay={0.1} className="mt-20">
            <Eyebrow>Where we&rsquo;ve flown</Eyebrow>
            <div className="mt-6">
              <EventsMap today={today} />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-16">
            <BannerSlideshow>
              <h2 className="text-display-md max-w-2xl text-balance">
                Bring the Yakstars to your event
              </h2>
              <p className="mt-5 max-w-xl text-lg text-white/70">
                We fly airshows, festivals and private events all over Europe, and the team
                travels with everything it needs to put on a complete display.
              </p>
              <Button href="/contact" variant="light" className="mt-9">
                Start the conversation
              </Button>
            </BannerSlideshow>
          </Reveal>
        </div>
      </section>
    </>
  );
}
