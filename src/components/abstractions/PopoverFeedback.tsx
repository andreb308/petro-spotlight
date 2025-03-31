import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import StarsRating from "./StarsRating";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { EnhancedButton } from "../ui/enhanced-button";

// PopoverFeedback component for collecting user feedback on messages
export default function PopoverFeedback({
  message_id,
  rating,
  feedback,
}: {
  message_id: number;
  rating: string | null;
  feedback: string | null;
}) {
  const [userFeedback, setUserFeedback] = useState(feedback ?? "");

  return (
    <div className="flex flex-col gap-4">
      <Popover>
        {/* Popover trigger - Star icon */}
        <PopoverTrigger asChild>
          {/* Commented out StarsRating component */}
          {/* <StarsRating message_id={message_id} rating={rating} /> */}
          <EnhancedButton
            title="Avaliar Mensagem"
            className="size-auto p-2 bg-transparent text-muted-foreground hover:bg-black"
          >
            <StarIcon className="cursor-pointer flex items-center text-muted-foreground" />
          </EnhancedButton>
        </PopoverTrigger>

        {/* Popover content - Feedback form */}
        <PopoverContent className="w-72 bg-sidebar text-foreground border-input">
          <h2 className="motion-preset-slide-right-sm w-full mb-2 text-sm font-semibold">Avalie a resposta:</h2>
          <form className="motion-preset-slide-right-sm space-y-3">
            {/* Star rating component */}
            <StarsRating message_id={message_id} rating={rating} />

            {/* Feedback textarea */}
            <Textarea
              spellCheck={false}
              id="feedback"
              placeholder="O que achou da resposta?"
              aria-label="Send feedback"
              onChange={(e) => setUserFeedback(e.target.value)}
              value={userFeedback}
              className="motion-preset-slide-right-sm "
            />

            {/* Submit button */}
            <div className=" motion-preset-slide-right-sm flex flex-col sm:flex-row sm:justify-end">
              <Button onClick={(e) => e.preventDefault()} size="sm">
                Enviar Avaliação
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
