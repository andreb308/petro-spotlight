import { useCallback, useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { hide } from "tauri-plugin-spotlight-api";
import "../styles/App.css";
import { PopupInput } from "./ui/popup-input";
import { SparklesCore } from "./ui/sparkles";
import { WebviewWindow } from "@tauri-apps/api/window";

function App() {
  const placeholders = [
    "Qual o resultado do relatório mais recente de sustentabilidade da empresa?",
    "Quais são os principais desafios enfrentados pelo setor DESEMPENHO?",
    "Mostre-me gráficos de XXX no ano de YYYY",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [prompt, setPrompt] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const webview = new WebviewWindow(Date.now().toString(), {
      url: `../../index.html?prompt=${prompt}`,
      decorations: false,
      center: true,
      resizable: false,
      transparent: true,
    });
    // since the webview window is created asynchronously,
    // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
    webview.once("tauri://created", function () {
      console.log("creasted");

      // webview window successfully created
    });
    webview.once("tauri://error", function (e) {
      console.log("error" + e.payload);

      // an error occurred during webview window creation
    });
    // invoke("open_window", { url: "https://example.com" })
    //   .then(() => {
    //     console.log("Window opened successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Failed to open window:", error);
    //   });
  };
  return (
    <div className="flex items-center justify-center flex-col w-[800px] h-[200px] bg-slate-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-[0.5px] border-gray-800 overflow-hidden bprder">
      {/* <img src="https://placehold.co/200x50" alt="" /> */}
      <PopupInput
        value={prompt}
        setValue={setPrompt}
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="w-[800px] h-[200px] absolute top-0 left-0 m-0 p-0">
        {/* Gradients */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={130}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      </div>{" "}
    </div>
  );
}

export default App;
