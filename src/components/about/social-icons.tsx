import { X } from "lucide-react";
import type { SVGProps } from "react";

function DribbbleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8.56 2.75c2.5 3.5 4.24 7.61 5.02 12.08M2.25 12.5c4.5-.9 9.55-.7 13.9.9M8.5 21.25c1.4-3.9 4.3-7.6 8.5-9.6" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05C21.9 8.59 23 10.9 23 14.4V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    </svg>
  );
}

export function SocialIcons({
  socials,
}: {
  socials?: { dribbble?: string; x?: string; linkedin?: string };
}) {
  if (!socials) return null;
  const iconClass = "size-3.5";

  return (
    <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full bg-background/95 px-3 py-2 shadow-sm backdrop-blur-sm">
      {socials.dribbble && (
        <a href={socials.dribbble} aria-label="Dribbble" className="text-foreground/80 transition-colors hover:text-foreground">
          <DribbbleIcon className={iconClass} />
        </a>
      )}
      {socials.x && (
        <a href={socials.x} aria-label="X" className="text-foreground/80 transition-colors hover:text-foreground">
          <X className={iconClass} strokeWidth={1.75} />
        </a>
      )}
      {socials.linkedin && (
        <a href={socials.linkedin} aria-label="LinkedIn" className="text-foreground/80 transition-colors hover:text-foreground">
          <LinkedinIcon className={iconClass} />
        </a>
      )}
    </div>
  );
}
