import ChatMessage from "@/components/abstractions/ChatMessage";
import { PromptInput } from "@/screens/templates/PromptInput";
import React, { useEffect, useRef, useState } from "react";
import { BugIcon, XIcon } from "lucide-react";
import FileTags from "@/components/abstractions/FileTags";
import { useMessagesContext } from "./MessagesContext";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useParams, useSearchParams } from "react-router";

function MainChat() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { messages, setMessages } = useMessagesContext();
  const isHomePage = !useParams().chatId;

  useEffect(() => {
    setTimeout(() => {
      chatContainerRef.current!.scrollTop =
        chatContainerRef.current!.scrollHeight;
    }, 100);
  }, [messages?.length]);

  const testimonials = [
    {
      title: "Charles Dickens",
      description: "A Tale of Two Cities",
      prompt: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "William Shakespeare",
      description: "Hamlet",
      prompt: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      title: "Edgar Allan Poe",
      description: "A Dream Within a Dream",
      prompt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eos saepe atque.",
    },
    {
      title: "Jane Austen",
      description: "Pride and Prejudice",
      prompt:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo mollitia assumenda cupiditate.",
    },
    {
      title: "Herman Melville",
      description: "Moby-Dick",
      prompt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis illo atque. Illum?",
    },
  ];
  return (
    <div className="h-dvh py-4 w-full bg-black grid grid-cols-1 grid-rows-12">
      <div
        className="motion-preset-slide-down-sm motion-delay-1000 min-w-[70%] overflow-x-visible max-[900px]:px-12 rounded-md row-span-10 gap-12 flex flex-col p-12 overflow-y-auto"
        style={{ scrollbarColor: "white black" }}
        ref={chatContainerRef}
      >
        {isHomePage ? (
          <div className="motion-preset-fade-lg size-full flex items-center justify-center gap-4 flex-col">
            <h1 className="w-3/4 text-left font-bold text-white text-3xl">
              Olá, bem-vindo!
            </h1>
            <h1 className="w-3/4 text-left font-bold text-white text-xl">
              Aqui estão alguns exemplos iniciais:
            </h1>
            <div className="h-[15rem] w-full rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        ) : (
          messages && (
            <>
              <div className="size-full px-24 flex flex-col gap-8">
                {messages.map((m, i) => (
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
            </>
          )
        )}

        {/*  */}
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
