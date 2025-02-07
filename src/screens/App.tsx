import React from "react";
import Sidebar from "./templates/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import "../index.css";
import Chat from "@/screens/templates/MainChat";
import { FilesContextProvider } from "@/screens/templates/FilesContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessagesContextProvider } from "@/screens/templates/MessagesContext";

function App() {
  return (
    <SidebarProvider>
      <FilesContextProvider>
        {/* <div className="flex flex-row minw-dvw h-dvh ">
        </div> */}
        <Sidebar />
        <SidebarTrigger className="motion-preset-slide-down-sm motion-delay-1000 text-white size-10" />

        <MessagesContextProvider>
          <Chat />
        </MessagesContextProvider>
      </FilesContextProvider>
    </SidebarProvider>
  );
}

export default App;
