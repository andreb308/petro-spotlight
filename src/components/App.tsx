import { useCallback, useEffect, useState } from "react";
import {
  appWindow,
  currentMonitor,
  getCurrent,
  LogicalSize,
} from "@tauri-apps/api/window";
import { invoke } from "@tauri-apps/api/tauri";
import { hide } from "tauri-plugin-spotlight-api";
import "../styles/App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [prompt, setPrompt] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    
  );
}

export default App;
