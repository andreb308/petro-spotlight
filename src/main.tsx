import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      {/* <div className="flex flex-row minw-dvw h-dvh ">
      </div> */}
        <Sidebar />
        <SidebarTrigger />

        
    </SidebarProvider>
  </React.StrictMode>
);
