import type { Metadata } from "next";
import { PageHero, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { ScheduleList } from "@/components/schedule/ScheduleList";
import { EventsJsonLd } from "@/components/JsonLd";
import { scheduleNote } from "@/data/events";

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
      <PageHero
        eyebrow="Schedule"
        title={
          <>
            One season.
            <br />
            <span className="text-slate">Two countries. Full throttle.</span>
          </>
        }
        lede={scheduleNote}
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <ScheduleList today={today} />
          </Reveal>
          <Reveal delay={0.1} className="mt-16">
            <div className="rounded-3xl bg-blue-deep p-10 text-white md:p-14">
              <h2 className="text-display-md max-w-2xl text-balance">
                Want the Yakstars over your event?
              </h2>
              <p className="mt-5 max-w-xl text-lg text-white/70">
                Airshows, festivals, and private events across Europe — the
                team brings a complete, self-supported display operation.
              </p>
              <Button href="/contact" className="mt-9 bg-white text-ink hover:bg-gold">
                Start the conversation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
