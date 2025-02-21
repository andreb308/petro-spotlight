import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
  RedirectFunction,
  Navigate,
} from "react-router";
import App from "./screens/App";
import Welcome from "./screens/Welcome";
import {
  MessagesContextProvider,
  useMessagesContext,
} from "./screens/templates/MessagesContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FilesContextProvider } from "./screens/templates/FilesContext";
import Sidebar from "./screens/templates/Sidebar";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilesContextProvider>
        <SidebarProvider>
          <MessagesContextProvider>
            {/* <div className="flex flex-row minw-dvw h-dvh ">
        </div> */}
            <Sidebar />
            <SidebarTrigger className="motion-preset-slide-down-sm motion-delay-1000 text-white size-10" />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="chat/:chatId" element={<App />} />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
          </MessagesContextProvider>
        </SidebarProvider>
      </FilesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
