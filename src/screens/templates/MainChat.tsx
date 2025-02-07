import ChatMessage from "@/components/abstractions/ChatMessage";
import { PromptInput } from "@/screens/templates/PromptInput";
import React, { useEffect, useRef, useState } from "react";
import { BugIcon, XIcon } from "lucide-react";
import FileTags from "@/components/abstractions/FileTags";
import { useMessagesContext } from "./MessagesContext";

function MainChat() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { messages, setMessages } = useMessagesContext();

  useEffect(() => {
    chatContainerRef.current!.scrollTop =
      chatContainerRef.current!.scrollHeight;
  }, [messages?.length]);
  return (
    <div className="h-dvh p-4 w-full bg-black grid grid-cols-1 grid-rows-12">
      <div
        className="motion-preset-slide-down-sm motion-delay-1000 min-w-[70%] px-48 max-[900px]:px-12 rounded-md row-span-10 gap-12 flex flex-col p-12 overflow-y-auto"
        style={{ scrollbarColor: "white black" }}
        ref={chatContainerRef}
      >
        {messages && messages.map((m, i) => (
          <ChatMessage
            message_id={m.message_id}
            key={m.datetime}
            role={m.role}
            content={m.content}
            datetime={m.datetime}
            rating={m.rating}
          />
        ))}
      </div>
      <div className="rounded-md px-48 max-[900px]:px-12 row-span-2 mt-2 flex items-center justify-end flex-col">
        <FileTags />
        <PromptInput setter={setMessages} />

        <p className="motion-preset-slide-up-lg motion-delay-500 text-muted-foreground mt-2 text-center text-sm">
          As respostas da Andre.IA foram geradas por Inteligência Artificial.
          Erros podem ocorrer.
        </p>
      </div>
    </div>
  );
}

export default MainChat;
