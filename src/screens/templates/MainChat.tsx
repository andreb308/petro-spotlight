import ChatMessage from "@/components/abstractions/ChatMessage";
import { PromptInput } from "@/screens/templates/PromptInput";
import React, { useEffect, useRef, useState } from "react";
import { BugIcon, CheckIcon, XIcon } from "lucide-react";
import FileTags from "@/components/abstractions/FileTags";
import { useMessagesContext } from "./MessagesContext";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useParams, useSearchParams } from "react-router";
import { EnhancedButton } from "@/components/ui/enhanced-button";

function MainChat() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { messages, setMessages } = useMessagesContext();
  const isHomePage = !useParams().chatId;
  const [webSearch, setWebSearch] = useState(false);
  const [codeInterpreter, setCodeInterpreter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      chatContainerRef.current!.scrollTop =
        chatContainerRef.current!.scrollHeight;
    }, 100);
  }, [messages?.length]);


  return (
    <div className="h-dvh py-4 w-full bg-black grid grid-cols-1 grid-rows-12">
      <div
        className="motion-preset-slide-down-sm motion-delay-1000 min-w-[70%] overflow-x-visible max-[900px]:px-12 rounded-md row-span-10 gap-12 flex flex-col p-12 overflow-y-auto"
        style={{ scrollbarColor: "white black" }}
        ref={chatContainerRef}
      >
        {messages && (
          <>
            <div className="size-full px-24 flex flex-col gap-8">
              {messages.map((m, i) => (
                <ChatMessage key={m.timestamp} msg={m} />
              ))}
            </div>
          </>
        )}

        {/*  */}
      </div>
      <div className="rounded-md px-48 max-[900px]:px-12 row-span-2 mt-2 flex items-center justify-around flex-col">
        {/* <FileTags /> */}
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
