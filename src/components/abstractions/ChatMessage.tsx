import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import URL from "../../../src-tauri/icons/icon.ico";
import ContextModal from "./ModalContext";
import StarsRating from "./StarsRating";
import ImageModal from "./Modal_Image";
import { CodeBlockDemo } from "./CodeBlockTest";
import { Message } from "@/screens/templates/MessagesContext";
import PopoverFeedback from "./PopoverFeedback";

function ChatMessage({ msg }: { msg: Message }) {
  const { message_id, role, content, timestamp, score, comment } = msg;
  const memoizedValue = content.length % 2;
  const [isHovering, setIsHovering] = useState(false);
  const date = new Date(timestamp);
  // const { messages, setMessages } = useMessagesContext();

  return (
    <div
      className={`select-text selection:text-black selection:bg-white motion-preset-fade w-full flex flex-row gap-2 ${
        role === "user" && "flex-row-reverse"
      }`}
    >
      <Avatar className="size-10">
        <AvatarImage
          src={role === "assistant" ? URL : "https://github.com/andreb308.png"}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <div
        id="message"
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
        className={` relative h-auto rounded-2xl px-4 py-3 text-gray-100 max-w-xl bg-gray-900`}
      >
        <p className="whitespace-pre-wrap">{content}</p>

        {
          /* randomizing image vs code to test */
          role === "assistant" &&
            (!memoizedValue ? <ImageModal /> : null)
        }

        <div
          id="footer"
          className={`mt-2 flex flex-row items-center justify-${
            role === "user" ? "start" : "end"
          } gap-2`}
        >
          {role === "assistant" && isHovering && (
            <div className="flex gap-2">
              <ContextModal />
              <PopoverFeedback message_id={message_id} rating={score} feedback={comment} />
            </div>
          )}

          <p
            className={`text-xs text-zinc-400 h-6 flex items-center justify-center`}
            id="timestamp"
          >
            {date.toLocaleString("pt-BR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
