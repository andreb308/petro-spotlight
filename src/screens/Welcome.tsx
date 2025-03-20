import { PromptInput } from "@/components/templates/PromptInput";
import React, { useState } from "react";
import { CheckIcon } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { EnhancedButton } from "@/components/ui/enhanced-button";
// import { useMessagesContext } from "../components/templates/MessagesContext";
// import { useParams, useSearchParams } from "react-router";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Welcome() {
  // const { currentConversation, setCurrentConversation } = useMessagesContext();
  // const isHomePage = !useParams().chatId;
  const [webSearch, setWebSearch] = useState(false);
  const [codeInterpreter, setCodeInterpreter] = useState(false);

  return (
    <>
      <WavyBackground backgroundFill="#29273e" />
      <div className="relative h-dvh w-dvw flex items-center justify-center px-32 motion-preset-slide-down-sm motion-delay-1000 min-w-[70%] overflow-x-hidden sm:max-lg:px-2 max-sm:px-0">
        <div className="motion-preset-fade-lg size-full flex items-center justify-center flex-col max-sm:px-4 sm:max-lg:px-16 sm:max-lg:overflow-hidden">
          <h1 className="w-full text-left font-bold text-foreground text-3xl">
            [WIP] Olá, Usuário!
          </h1>
          <h2 className="w-full text-left font-bold text-foreground text-xl">
            O que a Andre.IA pode fazer por você?
          </h2>
          <div className="my-[2rem] w-full rounded-md flex flex-col antialiased bg-[#29273e] bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <div className="flex items-center flex-col w-full bg-zinc-800 rounded-lg p-4 gap-0 m-0">
              {/* onSubmit: sends the message to the API to start a new chat and move the URL to the new page */}
              {/* //@ts-ignore */}

              <input
                type="text"
                placeholder="Como você pode me ajudar a entender os resultados financeiros trimestrais da Petrobras?"
                className={
                  "w-full relative text-sm sm:text-base z-50 border-none text-foreground bg-transparent  h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr- py-4"
                }
              />
              <div className="flex items-center justify-start gap-2 w-full px-12">
                <EnhancedButton
                  onClick={() => setWebSearch((p) => !p)}
                  className={`rounded-full py-1 h-8 border-[0.5px] border-white ${
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
                    <div className={`${!webSearch && 'hidden'} motion-preset-expand absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full`} />
                    <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-foreground ">
                    Borders Test
                    </div>
                    </button> */}
              </div>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start", loop: true, 
            }}
            className="w-full max-w-[956px]"
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <li
                    className="w-[600px] h-[200px] max-w-full relative rounded-2xl flex flex-col gap-2 border flex-shrink-0 border-slate-700 bg-sidebar px-8 py-6"
                    // style={{
                    //   background:
                    //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                    // }}
                    key={item.title}
                  >
                    <>
                      <div
                        aria-hidden="true"
                        className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                      ></div>
                      <div className="relative z-20 flex flex-row items-center justify-start">
                        <span className="flex flex-col gap-1">
                          <span className="text-xl leading-[1] text-foreground font-normal">
                            {item.title}
                          </span>
                          <span className=" text-sm leading-[1.6] text-foreground font-normal">
                            {item.description}
                          </span>
                        </span>
                      </div>
                      <span className="relative z-20 text-sm leading-[1.6] text-gray-400 font-normal">
                        {item.prompt}
                      </span>
                    </>
                  </li>
                </CarouselItem>
              ))}
              {/* {Array.from({ length: 5 }).map((_, index) => (
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
            </CarouselContent>
            <CarouselPrevious className="max-sm:ml-8 sm:max-lg:ml-8" />
            <CarouselNext className="max-sm:mr-8 sm:max-lg:mr-8" />
          </Carousel>
          {/* <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="w-full"
          /> */}
        </div>
      </div>
    </>
  );
}

export default Welcome;

const testimonials = [
  {
    title: "Análise Financeira",
    description: "Consulta a dados financeiros trimestrais e anuais",
    prompt: "Qual foi o EBITDA ajustado da Petrobras no último trimestre?",
  },
  {
    title: "Produção e Vendas",
    description: "Relatórios de produção e vendas",
    prompt:
      "Quais foram os números de produção de petróleo da Petrobras no último ano?",
  },
  {
    title: "Demonstrações Financeiras",
    description: "Consulta a demonstrações em dólar e real",
    prompt:
      "Quais são os principais indicadores financeiros da Petrobras em 2024?",
  },
  {
    title: "Transcrição de Webcasts",
    description: "Consulta a transcrições de webcasts de resultados",
    prompt:
      "Quais foram os principais pontos discutidos no webcast do 3T24 da Petrobras?",
  },
  {
    title: "Plano Estratégico",
    description: "Consulta a apresentações dos planos estratégicos",
    prompt:
      "Quais são os objetivos estratégicos da Petrobras para os próximos cinco anos?",
  },
  {
    title: "Pesquisa na Web",
    description: "Consulta a internet para informações adicionais",
    prompt: "Quais são as últimas notícias sobre a Petrobras?",
  },
  {
    title: "Form 20-F",
    description: "Consulta a dados dos relatórios Form 20-F",
    prompt:
      "Quais foram as principais mudanças no Form 20-F da Petrobras em 2023?",
  },
  {
    title: "Indicadores de Desempenho",
    description: "Consulta a indicadores de desempenho",
    prompt: "Qual foi o histórico trimestral do CAPEX nos últimos três anos?",
  },
  {
    title: "Plotagem de Dados",
    description: "Criação de gráficos e visualizações",
    prompt:
      "Crie um gráfico da evolução do preço das ações da Petrobras nos últimos cinco anos.",
  },
];
