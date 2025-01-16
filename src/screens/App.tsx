import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "../components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import "../index.css";
import ChatMessage from "../components/ChatMessage";
import { PromptInput } from "../components/PromptInput";
import { Modal } from "@/components/ui/animated-modal";


export type Message = {
  role: 'user' | "assistant";
  content: string;
  datetime: string | number;
}

function App() {
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
  ])

  return (
      <SidebarProvider>
        {/* <div className="flex flex-row minw-dvw h-dvh ">
        </div> */}
        <Sidebar />
        {/* <SidebarTrigger className="" /> */}
        <div className="w-dvw h-dvh p-4 px-48 bg-black grid grid-cols-1 grid-rows-12">
          <div
            className="animate-appear rounded-md row-span-10 gap-12 flex flex-col p-12 overflow-y-auto"
            style={{ scrollbarColor: "white black" }}
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
          <div className="rounded-md row-span-2 mt-2 flex items-center justify-end flex-col ">
            <PromptInput setter={setMessages} />

            <p className="motion-preset-slide-up-lg motion-delay-500 text-zinc-700 mt-2 text-center text-sm">
              Texto explicativo caso precise
            </p>
          </div>
        </div>
      </SidebarProvider>
  );
}

export default App;
