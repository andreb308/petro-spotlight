import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import URL from "../../src-tauri/icons/icon.ico";
import ContextModal from "./ContextModal";
import { Message } from "@/screens/App";

function ChatMessage({ role, content, datetime }: Message) {
  const [isHovering, setIsHovering] = useState(false)
 const date = new Date(datetime);

    return (
    <div 
      className={`w-full flex flex-row gap-2 ${role === "user" && "flex-row-reverse"}`}
    >
      <Avatar className="size-10">
        <AvatarImage src={role === "assistant" ? URL : "https://github.com/andreb308.png"}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <div id="message" onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)} className={` relative h-auto rounded-2xl px-4 py-3 text-gray-100 max-w-xl bg-green-700`}>
          <p className="whitespace-pre-wrap">{content}</p>
          <div id="footer" className={`flex flex-row items-center justify-${ role === "user" ? "start" : "end" } gap-2`}> 
              {role === "assistant" && <div className={`${!isHovering && 'hidden'}`}> <ContextModal /> </div>}
              <p className={`text-xs text-zinc-400 h-6 flex items-center justify-center`} id="timestamp">
                {date.toLocaleString('pt-BR')}
              </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;

