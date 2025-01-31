import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import URL from "../../../src-tauri/icons/icon.ico";
import ContextModal from "./ModalContext";
import { Message } from "@/screens/App";
import StarsRating from "./StarsRating";
import Component from "./PopoverFeedback";

function ChatMessage({ role, content, datetime }: Message) {
  const [isHovering, setIsHovering] = useState(false);
  const date = new Date(datetime);

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
        className={` relative h-auto rounded-2xl px-4 py-3 text-gray-100 max-w-xl bg-green-700`}
      >
        <p className="whitespace-pre-wrap">{content}</p>

        {role === "assistant" && (
          <div id="img-container" className="w-full flex justify-center my-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://placehold.co/600x100/"
            >
              <img className="rounded-lg" src="https://placehold.co/600x100/" alt="" />
            </a>
          </div>
        )}

        <div
          id="footer"
          className={`flex flex-row items-center justify-${
            role === "user" ? "start" : "end"
          } gap-2`}
        >
          {role === "assistant" && isHovering && (
            <div className="flex gap-2" >
              <ContextModal />
              <StarsRating />
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
