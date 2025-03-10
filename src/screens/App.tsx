import React, { useEffect } from "react";
import Sidebar from "../components/templates/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import "../index.css";
import Chat from "@/components/templates/MainChat";
import { FilesContextProvider } from "@/components/templates/FilesContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessagesContextProvider } from "@/components/templates/MessagesContext";

function App() {

  return (
    <MessagesContextProvider>
      <Chat />
    </MessagesContextProvider>
  );
}

export default App;
