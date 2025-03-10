import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { LucideProps, BugIcon } from "lucide-react";
import { useId } from "react";

// SettingsOption component for rendering a single setting with a switch
export default function SettingSwitchOption({
  label = "Label ",
  sublabel = "(Sublabel)",
  desc = "A short description goes here. (placeholder)",
  Icon = BugIcon,
}: {
  label?: string,
  sublabel?: string,
  desc?: string,
  Icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}) {
  // Generate a unique ID for accessibility
  const id = useId();

  return (
    <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 ">
      {/* Switch component */}
      <Switch
        id={id}
        className="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 [&_span]:data-[state=checked]:translate-x-2 rtl:[&_span]:data-[state=checked]:-translate-x-2"
        aria-describedby={`${id}-description`}
      />

      {/* Content container */}
      <div className="flex grow items-center gap-3">
        {/* Icon */}
        <Icon />

        {/* Text content */}
        <div className="grid grow gap-2">
          {/* Label and sublabel */}
          <Label htmlFor={id}>
            {label}
            <span className="ml-1 text-red-500 text-xs font-normal leading-[inherit]">
              {sublabel}
            </span>
          </Label>

          {/* Description */}
          <p id={`${id}-description`} className="text-xs text-muted-foreground">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}