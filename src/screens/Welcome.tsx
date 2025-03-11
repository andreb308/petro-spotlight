import { PromptInput } from "@/components/templates/PromptInput";
import React, { useState } from "react";
import { CheckIcon } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { useParams, useSearchParams } from "react-router";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import {
  useMessagesContext,
} from "../components/templates/MessagesContext";

function Welcome() {
  const { messages, setMessages } = useMessagesContext();
  // const isHomePage = !useParams().chatId;
  const [webSearch, setWebSearch] = useState(false);
  const [codeInterpreter, setCodeInterpreter] = useState(false);

  return (
    <div className="bg-[#29273e] h-dvh w-dvw flex items-center justify-center px-32 motion-preset-slide-down-sm motion-delay-1000 min-w-[70%] overflow-x-hidden max-[900px]:px-12 ">
      <div className="motion-preset-fade-lg size-full flex items-center justify-center flex-col">
        <h1 className="w-full text-left font-bold text-white text-3xl">
          [WIP] Olá, Usuário!
        </h1>
        <h1 className="w-full text-left font-bold text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="min-h-[15rem] w-full rounded-md flex flex-col antialiased bg-[#29273e] bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <div className="flex items-center flex-col w-full bg-zinc-800 rounded-lg p-4 gap-0 m-0">

            {/* onSubmit: sends the message to the API to start a new chat and move the URL to the new page */}
            <PromptInput setter={setMessages} />
            
            <div className="flex items-center justify-start gap-2 w-full px-12">
              <EnhancedButton
                onClick={() => setWebSearch((p) => !p)}
                className={`rounded-full py-1 h-8 border-[0.5px] border-white ${!webSearch && "bg-transparent"}`}
                // effect="shineHover"
              >
                {webSearch && <CheckIcon />}Web Search
              </EnhancedButton>

              <EnhancedButton
                onClick={() => setCodeInterpreter((p) => !p)}
                className={`rounded-full py-1 h-8 border-[0.5px] border-white ${!codeInterpreter && "bg-transparent"}`}
                // effect="shineHover"
              >
                {codeInterpreter && <CheckIcon />}Code Interpreter
              </EnhancedButton>

              {/* <button className="p-[3px] relative" onClick={() => setWebSearch(p => !p)} >
                    <div className={`${!webSearch && 'hidden'} motion-preset-expand absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full`} />
                    <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white ">
                    Borders Test
                    </div>
                  </button> */}
            </div>
          </div>
        </div>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Welcome;

const testimonials = [
  {
    title: "Charles Dickens",
    description: "A Tale of Two Cities",
    prompt: "Lorem ipsum dolor sit amet.",
  },
  {
    title: "William Shakespeare",
    description: "Hamlet",
    prompt: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "Edgar Allan Poe",
    description: "A Dream Within a Dream",
    prompt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eos saepe atque.",
  },
  {
    title: "Jane Austen",
    description: "Pride and Prejudice",
    prompt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo mollitia assumenda cupiditate.",
  },
  {
    title: "Herman Melville",
    description: "Moby-Dick",
    prompt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis illo atque. Illum?",
  },
];
