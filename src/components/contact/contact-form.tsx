"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const PROJECT_TYPES = [
  "Architecture",
  "Construction",
  "Interior Design",
  "Project Management",
  "Renovation & Remodeling",
  "Space Maker",
  "Other",
];

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent py-3.5 text-[15px] text-foreground outline-none transition-colors placeholder:text-stone-light focus:border-foreground";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-[360px] flex-col justify-center border-t border-line pt-10"
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-foreground text-background">
          <Check className="size-5" strokeWidth={1.75} />
        </div>
        <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
          Message sent.
        </h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-stone">
          Thank you for reaching out. A member of our team will respond
          within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-line pt-10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-[0.14em] text-stone">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Rahman"
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-[0.14em] text-stone">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs uppercase tracking-[0.14em] text-stone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+880 1XXX XXXXXX"
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="service" className="text-xs uppercase tracking-[0.14em] text-stone">
            Project Type
          </label>
          <select id="service" name="service" defaultValue="" className={`${fieldClass} mt-2`}>
            <option value="" disabled>
              Select a service
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-xs uppercase tracking-[0.14em] text-stone">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about your site, timeline, and goals."
            className={`${fieldClass} mt-2 resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group/btn mt-10 inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium tracking-wide text-background transition-colors duration-300 hover:bg-stone disabled:opacity-60"
      >
        <span>{loading ? "Sending…" : "Send Message"}</span>
        <AnimatePresence initial={false} mode="wait">
          {!loading && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArrowUpRight
                className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
