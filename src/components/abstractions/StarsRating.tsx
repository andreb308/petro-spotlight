import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Rating,
  useMessagesContext,
} from "@/components/templates/MessagesContext";
import { RiStarFill } from "@remixicon/react";
import { useId, useState } from "react";

export default function StarsRating({
  message_id,
  rating,
}: {
  message_id: number;
  rating: string | null;
}) {
  // Generate a unique ID for accessibility
  const id = useId();

  // State for hover and current rating
  const [hoverRating, setHoverRating] = useState("");
  const [currentRating, setCurrentRating] = useState(rating);

  // Get setMessages function from context
  const { setCurrentConversation } = useMessagesContext();

  // Handle rating change
  const handleRating = (message_id: number, newRating: Rating) => {
    // Update messages in context
    setCurrentConversation((m) => {
      const newMessages = m.messages.map((item) =>
        item.message_id === message_id ? { ...item, score: newRating } : item
      );

      return { ...m, messages: newMessages };
    });

    // Update local state
    setCurrentRating(newRating);
  };

  return (
    <fieldset className="motion-preset-slide-up-lg h-6 overflow-hidden">
      {/* Commented out legend */}
      {/* <legend className="text-sm font-medium leading-none text-foreground">
        Rate your experience
      </legend> */}

      <RadioGroup
        className="inline-flex gap-0"
        onValueChange={(r) => handleRating(message_id, r as Rating)}
      >
        {["1", "2", "3", "4", "5"].map((value) => (
          <label
            key={value}
            className="group relative cursor-pointer rounded-lg p-0.5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
            onMouseEnter={() => setHoverRating(value)}
            onMouseLeave={() => setHoverRating("")}
          >
            <RadioGroupItem
              id={`${id}-${value}`}
              value={value}
              className="sr-only"
            />
            <RiStarFill
              size={20}
              className={`transition-all ${
                (currentRating || hoverRating) >= value
                  ? "text-amber-500"
                  : "text-input"
              } group-hover:scale-110`}
            />
            {/* Screen reader text for accessibility */}
            <span className="sr-only">
              {value} star{value === "1" ? "" : "s"}
            </span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
