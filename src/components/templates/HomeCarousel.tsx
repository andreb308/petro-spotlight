import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router";

function HomeCarousel() {
  let navigate = useNavigate();

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
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
          <CarouselItem
            onClick={() => navigate(`/chat/16?prompt=${item.prompt}`)}
            key={idx}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <li
              className="w-[600px] h-[200px] cursor-pointer max-w-full relative rounded-2xl flex flex-col gap-2 border flex-shrink-0 border-slate-700 bg-sidebar px-8 py-6"
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
  );
}

export default HomeCarousel;

/* <InfiniteMovingCards
    items={testimonials}
    direction="right"
    speed="slow"
    className="w-full" /> */

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
