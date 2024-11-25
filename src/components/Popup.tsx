import { memo, useMemo, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { hide } from "tauri-plugin-spotlight-api";
import "../styles/App.css";
import { PopupInput } from "./ui/popup-input";
import { SparklesCore } from "./ui/sparkles";
import { WebviewWindow } from "@tauri-apps/api/window";

function Popup() {
  const placeholders = [
    "Qual o resultado do relatório mais recente de XXX da empresa?",
    "Quais são as principais conclusões com base no relatório XXX?",
    "Mostre-me gráficos de XXX no ano de YYYY",
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
            particleDensity={300}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      )),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const webview = new WebviewWindow("teste-2", {
      url: `https://icad-dsv.petrobras.com.br/`,
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
    <div className="flex items-center justify-center flex-col w-[700px] h-[150px] rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-[0.1px] border-gray-800 overflow-hidden bprder">
      <Sparkles />
      {/* <img src="https://placehold.co/200x50" alt="" /> */}
      <PopupInput
        value={prompt}
        setValue={setPrompt}
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Popup;
