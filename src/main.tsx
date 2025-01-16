import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import "./index.css";
import ChatMessage from "./components/ChatMessage";
import { PromptInput } from "./components/PromptInput";
import App from "./screens/App";

const root = document.getElementById("root") as HTMLElement
ReactDOM.createRoot(root).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
