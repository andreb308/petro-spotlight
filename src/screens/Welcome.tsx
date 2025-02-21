import ChatMessage from "@/components/abstractions/ChatMessage";
import { PromptInput } from "@/screens/templates/PromptInput";
import React, { useEffect, useRef, useState } from "react";
import { BugIcon, CheckIcon, XIcon } from "lucide-react";
import FileTags from "@/components/abstractions/FileTags";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useParams, useSearchParams } from "react-router";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { MessagesContextProvider, useMessagesContext } from "./templates/MessagesContext";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FilesContextProvider } from "./templates/FilesContext";

function Welcome() {
  const { messages, setMessages } = useMessagesContext();
  const isHomePage = !useParams().chatId;
  const [webSearch, setWebSearch] = useState(false);
  const [codeInterpreter, setCodeInterpreter] = useState(false);

  return (
    <div className="h-dvh w-dvw flex items-center justify-center px-32 motion-preset-slide-down-sm motion-delay-1000 min-w-[70%] overflow-x-visible max-[900px]:px-12 ">
      <div className="motion-preset-fade-lg size-full flex items-center justify-center flex-col">
        <h1 className="w-full text-left font-bold text-white text-3xl">
          {"[WIP]"} Olá, bem-vindo!
        </h1>
        <h1 className="w-full text-left font-bold text-white text-xl">
          Aqui estão alguns exemplos iniciais:
        </h1>
        <div className="h-[15rem] w-full rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <div className="flex items-center flex-col w-full bg-zinc-800 rounded-lg p-4 gap-0 m-0">
            <PromptInput setter={setMessages} />
            <div className="flex items-center justify-start gap-2 w-full px-12">
              <EnhancedButton
                onClick={() => setWebSearch((p) => !p)}
                className={`rounded-full py-1 h-8 border-[0.5px] border-white  ${
                  !webSearch && "bg-transparent"
                }`}
                // effect="shineHover"
              >
                {webSearch && <CheckIcon />}Web Search
              </EnhancedButton>

              <EnhancedButton
                onClick={() => setCodeInterpreter((p) => !p)}
                className={`rounded-full py-1 h-8 border-[0.5px] border-white ${
                  !codeInterpreter && "bg-transparent"
                }`}
                // effect="shineHover"
              >
                {codeInterpreter && <CheckIcon />}Code Interpreter
              </EnhancedButton>

              {/* <button className="p-[3px] relative" onClick={() => setWebSearch(p => !p)} >
                    <InfiniteMovingCards
                          items={testimonials}
                          direction="right"
                          speed="slow"
                      />
                    <div className={`${!webSearch && 'hidden'} motion-preset-expand absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full`} />
                    <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white ">
                      Lit up borders
                      </div>
                  </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
