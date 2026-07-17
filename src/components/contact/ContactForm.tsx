"use client";

import { useState } from "react";
import { site } from "@/data/site";

const SUBJECTS = [
  "Book the team for an airshow",
  "Sponsorship & partnership",
  "Media enquiry",
  "Something else",
] as const;

/**
 * Composes an email in the visitor's own mail client — the team's inbox is
 * the single source of truth, no backend required.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      message,
      "",
      "—",
      `Name: ${name}`,
      organisation ? `Organisation: ${organisation}` : null,
    ]
      .filter((l): l is string => l !== null)
      .join("\n");
    const url = `mailto:${site.email}?subject=${encodeURIComponent(
      `[${subject}] ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  const inputCls =
    "w-full rounded-xl border border-line bg-white px-5 py-4 text-ink placeholder:text-faint transition-colors focus:border-blue";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-eyebrow mb-2.5 block text-slate">
            Name
          </label>
          <input
            id="cf-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-org" className="text-eyebrow mb-2.5 block text-slate">
            Organisation <span className="normal-case text-faint">(optional)</span>
          </label>
          <input
            id="cf-org"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            className={inputCls}
            placeholder="Airshow, brand, media outlet…"
            autoComplete="organization"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="text-eyebrow mb-2.5 block text-slate">
          Subject
        </label>
        <select
          id="cf-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputCls}
        >
          {SUBJECTS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="text-eyebrow mb-2.5 block text-slate">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className={inputCls}
          placeholder="Dates, location, and what you have in mind."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue hover:shadow-lg hover:shadow-blue/20"
      >
        Open in your mail app
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
      <p className="text-sm text-faint">
        This composes an email to {site.email} in your own mail client — nothing is
        stored on this website.
      </p>
    </form>
  );
}
