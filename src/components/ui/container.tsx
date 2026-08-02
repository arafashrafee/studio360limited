import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[var(--container-page)] px-6 md:px-12 lg:px-20 xl:px-24",
        className
      )}
    >
      {children}
    </Tag>
  );
}
