import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router";
import App from "./screens/App";
import Welcome from "./screens/Welcome";
import {
  MessagesContextProvider,
} from "./components/templates/MessagesContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FilesContextProvider } from "./components/templates/FilesContext";
import Sidebar from "./components/templates/Sidebar";

// Get the root element from the HTML document.
const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilesContextProvider>
        <SidebarProvider>
          <MessagesContextProvider>
            <Sidebar />
            <SidebarTrigger className="motion-preset-slide-down-sm motion-delay-1000 text-white size-10" />
            
            {/* Define the application's routes. */}
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="chat/:chatId" element={<App />} />
              
              {/* Fallback route to the welcome screen. */}
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>

          </MessagesContextProvider>
        </SidebarProvider>
      </FilesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
