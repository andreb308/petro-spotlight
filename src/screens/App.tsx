import React from "react";
import Sidebar from "../templates/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import "../index.css";
import Chat from "@/templates/MainChat";
import { FilesContextProvider } from "@/templates/FilesContext";
import { useIsMobile } from "@/hooks/use-mobile";

export type Message = {
  role: "user" | "assistant";
  content: string;
  datetime: string | number;
};

function App() {

  return (
    <SidebarProvider>
      <FilesContextProvider>
        {/* <div className="flex flex-row minw-dvw h-dvh ">
        </div> */}
        <Sidebar />
        <SidebarTrigger className="motion-preset-slide-down-sm motion-delay-1000 text-white size-10" />
        <Chat />
      </FilesContextProvider>
    </SidebarProvider>
  );
}

export default App;
