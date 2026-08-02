import { FadeIn } from "@/components/ui/fade-in";

const DETAILS = [
  {
    label: "Address",
    lines: ["Block F, House 13 Road No. 1", "Dhaka, Bangladesh"],
  },
  {
    label: "Phone",
    lines: ["+880 1977-111360", "+880 1707-711360"],
  },
  {
    label: "Email",
    lines: ["studio360ltd@gmail.com"],
  },
  {
    label: "Business Hours",
    lines: ["Saturday – Thursday: 9 AM – 6 PM", "Friday: Closed"],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/studio360ltd/",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/studio360ltd/",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM17.4 4.6a1.17 1.17 0 1 0 0 2.33 1.17 1.17 0 0 0 0-2.33Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCA7FPPAY9k-RC12kvyL_k3A",
    path: "M23.5 6.75s-.23-1.64-.95-2.36c-.9-.95-1.92-.95-2.38-1.01C16.9 3 12 3 12 3h-.01s-4.9 0-8.16.38c-.47.06-1.48.06-2.38 1.01C.72 5.11.5 6.75.5 6.75S.27 8.66.27 10.58v1.8c0 1.92.23 3.83.23 3.83s.23 1.64.95 2.36c.9.95 2.08.92 2.61 1.02C5.9 20.9 12 21 12 21s4.91-.01 8.17-.39c.47-.06 1.48-.06 2.38-1.01.72-.72.95-2.36.95-2.36s.23-1.91.23-3.83v-1.8c0-1.92-.23-3.83-.23-3.83ZM9.75 14.85V8.71l5.75 3.08-5.75 3.06Z",
  },
];

export function OfficeInfo() {
  return (
    <div className="border-t border-line pt-10">
      <div className="grid grid-cols-2 gap-8">
        {DETAILS.map((detail, i) => (
          <FadeIn key={detail.label} delay={i * 0.06}>
            <p className="text-xs uppercase tracking-[0.14em] text-stone">
              {detail.label}
            </p>
            <div className="mt-2 text-[15px] leading-relaxed text-foreground">
              {detail.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.24} className="mt-10">
        <p className="text-xs uppercase tracking-[0.14em] text-stone">
          Socials
        </p>
        <div className="mt-3 flex items-center gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full border border-line text-stone transition-colors hover:border-foreground hover:text-foreground"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.3} className="mt-10 overflow-hidden">
        <iframe
          title="Studio360 Ltd office location"
          src="https://maps.google.com/maps?q=Block%20F%2C%20House%2013%20Road%20No.%201%2C%20Dhaka%2C%20Bangladesh&t=&z=14&ie=UTF8&output=embed"
          className="h-[320px] w-full grayscale-[35%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </FadeIn>
    </div>
  );
}
