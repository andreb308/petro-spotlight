import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import ChatWrapper from "./screens/ChatWrapper";
import Welcome from "./screens/Welcome";
import { MessagesContextProvider } from "./components/templates/MessagesContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FilesContextProvider } from "./components/templates/FilesContext";
import Sidebar from "./components/templates/Sidebar";
import Admin from "./screens/Admin";

// Get the root element from the HTML document.
const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilesContextProvider>
        <SidebarProvider className="bg-background overflow-hidden">
          {/* <MessagesContextProvider> */}

          {/* 
              Define the application's routes.
              - '/': The root route, renders the Welcome component.
              
              - 'chat/:chatId': A dynamic route for displaying a specific chat, using the ChatWrapper component.
              The `chatId` is a parameter passed in the URL.
              
              - '/*': A fallback route for any other paths that don't match defined routes.
              It redirects the user to the root route ('/') using the Navigate component.
              */}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path="chat/:chatId"
              element={
                <MessagesContextProvider>
                  <ChatWrapper />
                </MessagesContextProvider>
              }
              />
              <Route path="/admin" element={<Admin />} />

            {/* Fallback route to the welcome screen. */}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* </MessagesContextProvider> */}
        </SidebarProvider>
      </FilesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
