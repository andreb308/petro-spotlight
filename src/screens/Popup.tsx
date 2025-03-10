// Import necessary React hooks and components
import { memo, useMemo, useState } from "react";
// Import Tauri API functions
import { invoke } from "@tauri-apps/api/tauri";
import { hide } from "tauri-plugin-spotlight-api";
// Import styles and custom components
import "../styles/App.css";
import { PopupInput } from "../components/ui/popup-input";
import { SparklesCore } from "../components/ui/sparkles";
// Import Tauri's WebviewWindow for creating new windows
import { WebviewWindow } from "@tauri-apps/api/window";

function Popup() {
  // Array of placeholder prompts for the input field
  const placeholders = [
    "Qual foi o lucro líquido da Petrobras nos últimos três trimestres e quais fatores influenciaram suas variações?",
    "Quais foram os principais destaques discutidos no webcast de resultados do último trimestre?",
    "Como se comportou a produção de petróleo da Petrobras ao longo de 2023, trimestre a trimestre?",
    "Quais foram as receitas operacionais da Petrobras em 2023 e como elas variaram ao longo dos trimestres?",
    "Compare os resultados financeiros da Petrobras em reais e dólares para o último trimestre, destacando as principais diferenças.",
  ];

  // State to hold the current prompt value
  const [prompt, setPrompt] = useState("");

  // Memoized Sparkles component to optimize rendering
  const Sparkles = useMemo(
    () =>
      memo(() => (
        <div className="w-dvw h-dvh absolute top-0 left-0 m-0 p-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      )),
    []
  );

  // Handler for input change events (currently not used)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  };

  // Handler for prompt submission
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new WebviewWindow with the current prompt
    const webview = new WebviewWindow(Date.now().toString(), {
      url: `https://icad-dsv.petrobras.com.br/?prompt=${prompt}`,
      decorations: true,
      center: true,
      resizable: true,
      transparent: false,
      width: 1280,
      height: 720,
      title: "Interface Conversacional",
      focus: true,
    });

    // Event listener for when the webview is created
    webview.once("tauri://created", function (e) {
      console.log("created");
      console.log("webview", e);
    });

    // Event listener for any errors during webview creation
    webview.once("tauri://error", function (e) {
      console.log("error" + e.payload);
    });
  };

  return (
    <div className="flex relative items-center justify-center flex-col w-[700px] h-[150px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-[0.1px] border-gray-600 border-opacity-10 overflow-hidden">
      <Sparkles />
      {/* Commented out placeholder image */}
      {/* <img src="https://placehold.co/200x50" alt="" /> */}
      <PopupInput
        value={prompt}
        setValue={setPrompt}
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {/* Close button */}
      <button
        className="absolute font-semibold top-2 right-2 p-0 size-7 text-black hover:text-white flex items-center justify-center bg-gray-200 hover:bg-gray-800 shadow-none rounded-full border-white border-[1px]"
        onClick={() => invoke("close")}
      >
        <span className=" mt-0.5">X</span>
      </button>
    </div>
  );
}

export default Popup;
