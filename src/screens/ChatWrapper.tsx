import "../index.css";
import { MessagesContextProvider } from "@/components/templates/MessagesContext";
import ChatMessage from "@/components/abstractions/ChatMessage";
import { PromptInput } from "@/components/templates/PromptInput";
import React, { useEffect, useRef, useState } from "react";
import { useMessagesContext } from "../components/templates/MessagesContext";
import { useParams, useSearchParams } from "react-router";

function ChatWrapper() {
  // Reference to the chat container for scrolling
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Check if it's the home page
  const chatId = useParams().chatId;
  const isHomePage = !chatId;

  // Get messages and setMessages from context
  const { messages, setMessages } = useMessagesContext();
  
  // TO DO: Fetch from API based on chatId and return the message history. Currently hardcoded and imported from the 'conversations.ts' and 'MessagesContext.tsx' files.
  
  // State for web search and code interpreter features (currently unused)
  const [webSearch, setWebSearch] = useState(false);
  const [codeInterpreter, setCodeInterpreter] = useState(false);

  // Effect to scroll to bottom of chat when messages change

  useEffect(() => {
    // const response = await api.get<Message[]>("/", { params: { chatId } }).then((response) => response.data);
    // setMessages(response);

    setTimeout(() => {
      chatContainerRef.current!.scrollTop =
        chatContainerRef.current!.scrollHeight;
    }, 100);
  }, [messages?.length]);

  return (
    <MessagesContextProvider>
      <div className="h-dvh py-4 w-full bg-[#29273e] grid grid-cols-1 grid-rows-12">
        {/* Chat messages container */}
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
        </div>

        {/* Input area */}
        <div className="rounded-md px-48 max-[900px]:px-12 row-span-2 mt-2 flex items-center justify-around flex-col">
          {/* <FileTags /> */}
          <PromptInput setter={setMessages} />
          {/* Disclaimer */}
          <p className="motion-preset-slide-up-lg motion-delay-500 text-muted-foreground mt-2 text-center text-sm">
            As respostas da Andre.IA foram geradas por Inteligência Artificial.
            Erros podem ocorrer.
          </p>
        </div>
      </div>
    </MessagesContextProvider>
  );
}

export default ChatWrapper;
