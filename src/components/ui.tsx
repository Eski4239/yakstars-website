import Link from "next/link";
import { Reveal } from "@/components/motion";

export function Eyebrow({
  children,
  tone = "red",
  size = "sm",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "red" | "blue" | "slate";
  size?: "sm" | "lg";
  className?: string;
}) {
  const color =
    tone === "red" ? "text-red" : tone === "blue" ? "text-blue" : "text-slate";
  const sizeCls = size === "lg" ? "text-2xl font-bold tracking-tight md:text-3xl" : "text-eyebrow";
  return (
    <p className={`${sizeCls} ${color} ${className}`}>
      {size === "sm" && (
        <span aria-hidden className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-current" />
      )}
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "red",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  tone?: "red" | "blue" | "slate";
  align?: "left" | "center";
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="text-display-md mt-5 text-balance">{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p className="mt-6 text-lg leading-relaxed text-slate">{lede}</p>
        </Reveal>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "light";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-lg px-7 py-3.5 text-[0.9375rem] font-bold tracking-tight transition-all duration-200";
  const styles = {
    primary: "bg-ink text-white hover:bg-blue hover:shadow-lg hover:shadow-blue/20",
    outline:
      "border border-line text-ink hover:border-ink hover:bg-ink hover:text-white",
    ghost: "text-blue hover:text-blue-deep px-0 py-0",
    light: "bg-white text-ink hover:bg-gold hover:text-ink",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

/** Full-width interior page opener. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line bg-white pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="container-x">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-display-lg mt-6 max-w-4xl text-balance">{title}</h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
              {lede}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </header>
  );
}
