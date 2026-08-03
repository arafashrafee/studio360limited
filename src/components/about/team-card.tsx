import Image from "next/image";
import { cn } from "@/lib/utils";
import { SocialIcons } from "./social-icons";
import type { TeamMember } from "@/types";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-stone-light/20",
          member.featured ? "aspect-[4/5] md:aspect-[16/17]" : "aspect-[4/5]"
        )}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes={member.featured ? "(min-width: 768px) 640px, 100vw" : "(min-width: 640px) 33vw, 100vw"}
          className="object-cover grayscale"
        />
        <SocialIcons socials={member.socials} />
      </div>
      <h3 className="mt-5 font-display text-lg font-medium tracking-tight">{member.name}</h3>
      <p className="mt-1 text-sm text-stone">{member.role}</p>
    </div>
  );
}
