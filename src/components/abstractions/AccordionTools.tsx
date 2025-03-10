// Import necessary UI components and icons
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger, 
} from "@/components/ui/accordion";
import { SquareFunctionIcon } from "lucide-react";
import { DialogTitle } from "../ui/dialog";

// Define the list of tools with their descriptions
const toolList = [
  { tool: "Produção e vendas", description: "consulta a relatório de produção e vendas trimestrais e anuais" },
  { tool: "Release de resultados (dólar)", description: "consulta a release de resultados em DOLAR de resultados trimestrais e anuais" },
  { tool: "Release de resultados (real)", description: "consulta a release de resultados em REAL de resultados trimestrais e anuais" },
  { tool: "Apresentações do plano estratégico", description: "consulta a dados das apresentações dos planos estratégicos da Petrobras" },
  { tool: "Demonstração financeira (dólar)", description: "consulta a demonstrações financeiras em DOLAR de resultados trimestrais e anuais" },
  { tool: "Demonstração financeira (real)", description: "consulta a demonstrações financeiras em REAL de resultados trimestrais e anuais" },
  { tool: "Transcrição webcast", description: "consulta a transcrição dos Webcasts de resultados trimestrais e anuais" },
  { tool: "Form 20-f", description: "consulta a dados dos form 20-f emitidos da Petrobras" },
  { tool: "DuckDuckGo", description: "consulta a internet para responder a pergunta do usuário" },
  { tool: "SQL", description: "consulta indicadores de desempenho da Petrobras, base de dados confiável, GOTO para perguntas quantitativas. Consulta em linguagem natural" },
  { tool: "Python REPL", description: "Um shell Python. Use isso para executar comandos Python. A entrada deve ser um comando Python válido. Se você quiser ver a saída de um valor, deve imprimi-lo com print(...). Sempre salve os gráficos em static/python_repl/arquivo.png (caminho relativo)." },
];

export default function ToolsAccordion() {
  return (
    <div className="space-y-4 w-full ">
      {/* Title of the accordion */}
      <DialogTitle className="text-2xl font-bold">
        Bases de Conhecimento
      </DialogTitle>
      
      {/* Accordion component */}
      <Accordion 
        type="single" 
        collapsible 
        className="w-full border border-input px-4 shadow-sm shadow-black/5 rounded-lg" 
        defaultValue="1"
      >
        {/* Map through the toolList to create accordion items */}
        {toolList.map((item, ind) => (
          <AccordionItem value={(ind + 1).toString()} key={ind} className="py-2">
            <AccordionTrigger className="py-2 leading-6 hover:no-underline">
              <span className="flex items-center gap-3">
                {/* Icon for each tool */}
                <SquareFunctionIcon size={16} strokeWidth={2} className="shrink-0 opacity-60" aria-hidden="true" />
                {/* Tool name */}
                <h2 className="m-0 text-lg bg-transparent">
                  {item.tool}
                </h2>
              </span>
            </AccordionTrigger>
            {/* Tool description */}
            <AccordionContent className="pb-2 ml-2 text-muted-foreground">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}