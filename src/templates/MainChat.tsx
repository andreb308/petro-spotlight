import ChatMessage from "@/components/abstractions/ChatMessage";
import { PromptInput } from "@/templates/PromptInput";
import { Message } from "@/screens/App";
import React, { useEffect, useRef, useState } from "react";
import { BugIcon, XIcon } from "lucide-react";
import FileTags from "@/components/abstractions/FileTags";

function MainChat() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      content: "Hello, how are you?",
      datetime: "2024-03-15T12:00:00Z",
    },
    {
      role: "assistant",
      content:
        "I am doing well, thank you for asking! How can I help you today?",
      datetime: "2024-03-15T12:01:00Z",
    },
    {
      role: "user",
      content: "I need help with a coding problem.",
      datetime: "2024-03-15T12:02:00Z",
    },
    {
      role: "assistant",
      content:
        "I can help with that! Please provide me with the details of the problem.",
      datetime: "2024-03-15T12:03:00Z",
    },
    {
      role: "user",
      content: "I'm trying to implement a function that reverses a string.",
      datetime: "2024-03-15T12:04:00Z",
    },
    {
      role: "assistant",
      content:
        "Okay, that's a common task. What language are you using? Do you have any code you've started?",
      datetime: "2024-03-15T12:05:00Z",
    },
    {
      role: "user",
      content: "I'm using JavaScript, and I haven't written any code yet.",
      datetime: "2024-03-15T12:06:00Z",
    },
    {
      role: "assistant",
      content: `No problem! Here is an example of how to reverse a string in Javascript:\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nobis nostrum quia quasi ex! Maxime quibusdam beatae deserunt, sed voluptatum amet debitis consectetur nemo delectus, molestiae quo aliquam illum ad cum consequuntur esse aut impedit. Ex expedita perspiciatis at ipsam! Et deserunt ea voluptatibus velit recusandae repellat accusamus, cumque ad ex nesciunt excepturi corporis, veritatis, adipisci minus accusantium reiciendis blanditiis quia labore eum commodi omnis natus amet! Distinctio, similique incidunt cupiditate quos beatae impedit explicabo mollitia, itaque magni obcaecati debitis deleniti tempore qui molestiae, esse autem? Aliquid similique eius suscipit temporibus labore facere minima, inventore voluptates sit! Deserunt, dolorem cupiditate!`,
      datetime: "2024-03-15T12:07:00Z",
    },
  ]);

  useEffect(() => {
    chatContainerRef.current!.scrollTop =
      chatContainerRef.current!.scrollHeight;
  }, [messages]);
  return (
    <div className="w-dvw h-dvh p-4 px-48 bg-black grid grid-cols-1 grid-rows-12">
      <div
        className="motion-preset-slide-down-sm motion-delay-1000 rounded-md row-span-10 gap-12 flex flex-col p-12 overflow-y-auto"
        style={{ scrollbarColor: "white black" }}
        ref={chatContainerRef}
      >
        {messages.map((m, i) => (
          <ChatMessage
            key={m.datetime}
            role={m.role as "user" | "assistant"}
            content={m.content}
            datetime={m.datetime}
          />
        ))}
      </div>
      <div className="rounded-md row-span-2 mt-2 flex items-center justify-end flex-col">
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
