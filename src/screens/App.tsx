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
    <MessagesContextProvider>
      <Chat />
    </MessagesContextProvider>
  );
}

export default App;
