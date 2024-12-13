import { memo, useMemo, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { hide } from "tauri-plugin-spotlight-api";
import "../styles/App.css";
import { PopupInput } from "./ui/popup-input";
import { SparklesCore } from "./ui/sparkles";
import { WebviewWindow } from "@tauri-apps/api/window";

function Popup() {
  const placeholders = [
    // "VERSÃO: https://icad-dsv.petrobras.com.br",
    // "VERSÃO: localhost:8080",
    "Qual foi o lucro líquido da Petrobras nos últimos três trimestres e quais fatores influenciaram suas variações?",
    "Quais foram os principais destaques discutidos no webcast de resultados do último trimestre?",
    "Como se comportou a produção de petróleo da Petrobras ao longo de 2023, trimestre a trimestre?",
    "Quais foram as receitas operacionais da Petrobras em 2023 e como elas variaram ao longo dos trimestres?",
    "Compare os resultados financeiros da Petrobras em reais e dólares para o último trimestre, destacando as principais diferenças.",
  ];

  const [prompt, setPrompt] = useState("");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    webview.once("tauri://created", function (e) {
      console.log("created");
      console.log("webview", e);
    });

    webview.once("tauri://error", function (e) {
      console.log("error" + e.payload);
    });
  };
  return (
    <div className="flex relative items-center justify-center flex-col w-[700px] h-[150px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-[0.1px] border-gray-600 border-opacity-10 overflow-hidden">
      <Sparkles />
      {/* <img src="https://placehold.co/200x50" alt="" /> */}
      <PopupInput
        value={prompt}
        setValue={setPrompt}
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
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
