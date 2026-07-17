import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { GalleryGrid, type GalleryItem } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The Yakstars in pictures — formation aerobatics, crossings, and six Yak-52 warbirds at work over Portugal and Spain.",
};

const ITEMS: GalleryItem[] = [
  { seed: 0, title: "Vic on the climb", caption: "Opening pass, smoke on", ratio: "aspect-[4/5]" },
  { seed: 7, title: "The crossing", caption: "French Crossing at show centre", ratio: "aspect-square" },
  { seed: 2, title: "Over the top", caption: "Formation loop, five ships", ratio: "aspect-[3/4]" },
  { seed: 9, title: "Echelon right", caption: "Repositioning for the break", ratio: "aspect-[4/3]" },
  { seed: 4, title: "Solo, vertical", caption: "High-energy solo between passes", ratio: "aspect-[4/5]" },
  { seed: 11, title: "Diamond", caption: "Cloverleaf entry, four ships", ratio: "aspect-square" },
  { seed: 6, title: "Blue on blue", caption: "The Yak-52 in its element", ratio: "aspect-[4/3]" },
  { seed: 1, title: "Crowd line", caption: "Arrow formation low pass", ratio: "aspect-[3/4]" },
  { seed: 8, title: "Tiramisu", caption: "The team's signature three-ship", ratio: "aspect-[4/5]" },
  { seed: 3, title: "Final break", caption: "Six ships, smoke on, pitching up", ratio: "aspect-square" },
  { seed: 10, title: "Close trail", caption: "Two ships through the loop", ratio: "aspect-[4/3]" },
  { seed: 5, title: "Golden hour", caption: "Sunset arrival at Ponte de Sor", ratio: "aspect-[4/5]" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            The show,
            <br />
            <span className="text-slate">frame by frame.</span>
          </>
        }
        lede="Brand artwork of the display today — this grid is built to hold the team's photography and video as it lands after each show weekend."
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <GalleryGrid items={ITEMS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
