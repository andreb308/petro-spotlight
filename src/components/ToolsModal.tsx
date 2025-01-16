import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { InfoIcon, SquareMousePointer } from "lucide-react";

const ToolsModal = () => {
  const toolList = [
    {
      tool: "producao_vendas_tool",
      description:
        "consulta a relatório de produção e vendas trimestrais e anuais",
    },
    {
      tool: "release_resultados_dolar_tool",
      description:
        "consulta a release de resultados em DOLAR de resultados trimestrais e anuais",
    },
    {
      tool: "release_resultados_real_tool",
      description:
        "consulta a release de resultados em REAL de resultados trimestrais e anuais",
    },
    {
      tool: "demonstracao_financeira_dolar_tool",
      description:
        "consulta a demonstrações financeiras em DOLAR de resultados trimestrais e anuais",
    },
    {
      tool: "demonstracao_financeira_real_tool",
      description:
        "consulta a demonstrações financeiras em REAL de resultados trimestrais e anuais",
    },
    {
      tool: "webcast_transcricao_tool",
      description:
        "consulta a transcrição dos Webcasts de resultados trimestrais e anuais",
    },
    {
      tool: "form20_tool",
      description: "consulta a dados dos form 20-f emitidos da Petrobras",
    },
    {
      tool: "apresentacao_plano_estrategico_tool",
      description:
        "consulta a dados das apresentações dos planos estratégicos da Petrobras",
    },
    {
      tool: "duckduckgo_search_tool",
      description: "Search the internet to answer the user's question",
    },
    {
      tool: "sql_indicador_tool",
      description:
        "Consulta indicadores de desempenho da Petrobras, base de dados confiável, GOTO para perguntas quantitativas. Consulta em linguagem natural",
    },
    {
      tool: "python_repl",
      description:
        "A Python shell. Use this to execute python commands. Input should be a valid python command. If you want to see the output of a value, you should print it out with print(...). Always save plots to static/python_repl/filename.png (relative path)",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger className=" h-12 size-full text-white hover:text-black flex justify-center items-center text-sm group/modal-btn whitespace-pre-wrap">
        <InfoIcon className="hover:motion-rotate-in-[720deg] hover:motion-ease-spring-bouncier cursor-pointer" />   andre.IA: Ferramentas
      </DialogTrigger>
      <DialogContent className="max-h-[80dvh] w-[40dvw] overflow-y-auto">
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Ferramentas Disponíveis
          {/* <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
            dolor
        //   </span> 
        //   sit amet.*/}
        </h4>
        <div className="flex justify-center items-center">
          <ul>
            {toolList.map((t) => (
              <>
                <li>
                  <pre className="bg-black text-white">{t.tool}</pre> {"->"} {t.description}
                </li>
                <br />
                <br />
              </>
            ))}
          </ul>
        </div>
        <DialogFooter className="gap-4">
          <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button>
          <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
            Not Cancel
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ToolsModal;
