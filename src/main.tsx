import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import "./index.css";
import ChatMessage from "./components/ChatMessage";
import { PromptInput } from "./components/PromptInput";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      {/* <div className="flex flex-row minw-dvw h-dvh ">
      </div> */}
      <Sidebar />
      {/* <SidebarTrigger className="" /> */}
      <div className="w-dvw h-dvh p-4 px-48 bg-black grid grid-cols-1 grid-rows-12">
        <div
          className="rounded-md row-span-10 gap-12 flex flex-col p-12 overflow-y-auto"
          style={{ scrollbarColor: "white black" }}
        >
          {" "}
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
          <ChatMessage role="user" />
          <ChatMessage role="system" />
        </div>
        <div className="rounded-md row-span-2 mt-2 flex items-center justify-end flex-col ">
          <PromptInput />

          <p className="text-zinc-700 mt-2 text-center text-sm">
            Texto explicativo caso precise
          </p>
        </div>
      </div>
    </SidebarProvider>
  </React.StrictMode>
);
