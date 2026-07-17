import Link from "next/link";
import { PlaneMark } from "@/components/art/Plane";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <PlaneMark size={56} rotate={135} className="text-line" />
      <p className="text-eyebrow mt-10 text-red">Error 404</p>
      <h1 className="text-display-lg mt-6 max-w-2xl text-balance">
        You’ve broken formation.
      </h1>
      <p className="mt-6 max-w-md text-lg text-slate">
        This page isn’t on the flight plan. Rejoin on the leader and we’ll get
        you back to the show.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue"
      >
        Rejoin at home
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </section>
  );
}
