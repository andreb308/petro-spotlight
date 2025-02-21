import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import StarsRating from "./StarsRating";
import { StarIcon } from "lucide-react";

export default function PopoverFeedback({
  message_id,
  rating,
  feedback,
}: {
  message_id: number;
  rating: string | null;
  feedback: string | null;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
            {/* <StarsRating message_id={message_id} rating={rating} /> */}
          <StarIcon className="cursor-pointer h-6 flex items-center text-muted-foreground" />
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <h2 className="mb-2 text-sm font-semibold">Send us feedback</h2>
          <form className="space-y-3">
            <StarsRating message_id={message_id} rating={rating} />
            <Textarea
              id="feedback"
              placeholder="How can we improve Origin UI?"
              aria-label="Send feedback"
              value={feedback ?? ""}
            />
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <Button size="sm">Send feedback</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
