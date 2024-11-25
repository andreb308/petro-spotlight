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

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (!event.ctrlKey || !event.shiftKey) return;
    if (event.key.toLowerCase() === "o") {
      void hide();
    }
  }, []);

  useEffect(() => {
    // get url params
    const urlParams = new URLSearchParams(window.location.search);
    setPrompt(urlParams.get("prompt") || "");
    // setTimeout(() => {
    //   window.location.href = "https://google.com";
    // }, 3000);
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex items-center justify-center flex-col minw-dvw h-dvh">
      <div className="row">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            void greet();
          }}
        >
          <h1 className="text-3xl font-bold underline text-center mb-8">
            {prompt}
          </h1>
          <input
            id="greet-input"
            autoComplete="off"
            autoCorrect="off"
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            placeholder="Enter a name..."
            autoFocus
          />
          <button type="submit">Greet</button>
        </form>
      </div>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
