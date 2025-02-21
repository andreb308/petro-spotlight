"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Rating, useMessagesContext } from "@/screens/templates/MessagesContext";
import { RiStarFill } from "@remixicon/react";
import { useId, useState } from "react";

export default function StarsRating({
  message_id,
  rating,
}: {
  message_id: number;
  rating: string | null;
}) {
  const id = useId();
  const [hoverRating, setHoverRating] = useState("");
  const [currentRating, setCurrentRating] = useState(rating);
  const { setMessages } = useMessagesContext();


  const handleRating = (id: number, newRating: Rating) => {
    setMessages((m) =>
      m.map((item) => ((item.role === "assistant" && item.message_id === id) ? { ...item, score: newRating } : item))
    );
    setCurrentRating(newRating); // Update local state
  };

  return (
    <fieldset className="motion-preset-slide-up-lg h-6 overflow-hidden">
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
            {/* <span className="sr-only">
              {value} star{value === "1" ? "" : "s"}
            </span> */}
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
