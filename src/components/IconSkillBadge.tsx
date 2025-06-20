import { cn } from "@/lib/utils";
import skillIcons from "./skillIcons";
import { HTMLAttributes } from "react";

export default function IconSkillBadge({
  label,
  className,
}: {
  label: string;
  className?: HTMLAttributes<HTMLSpanElement>["className"];
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full border border-purple-600 bg-purple-950 text-purple-300",
        className
      )}
    >
      {skillIcons[label] && (
        <span className="text-lg">{skillIcons[label]}</span>
      )}
      {label}
    </span>
  );
}
