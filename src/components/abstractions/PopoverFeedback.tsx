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

  const [userFeedback, setUserFeedback] = useState(feedback ?? "")
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        {/* Popover trigger - Star icon */}
        <PopoverTrigger asChild>
          {/* Commented out StarsRating component */}
          {/* <StarsRating message_id={message_id} rating={rating} /> */}
          <StarIcon className="cursor-pointer h-6 flex items-center text-muted-foreground" />
        </PopoverTrigger>

        {/* Popover content - Feedback form */}
        <PopoverContent className="w-72">
          <h2 className="mb-2 text-sm font-semibold">Avalie a resposta:</h2>
          <form className="space-y-3">
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
            />

            {/* Submit button */}
            <div className="flex flex-col sm:flex-row sm:justify-end">
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