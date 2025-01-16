"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Message } from "@/screens/App";
import { useState } from "react";

export function PromptInput({ setter }: { setter: React.Dispatch<React.SetStateAction<Message[]>> }) {

  const [value, setValue] = useState('')
  // Assistente de Análise de Desempenho: "Como você pode me ajudar a entender os resultados financeiros trimestrais da Petrobras?"
  // Consultor de Dados Financeiros: "Quais são as suas capacidades para analisar demonstrações financeiras e relatórios de resultados?"
  // Guia de Ferramentas de Consulta: "Quais ferramentas você utiliza para obter informações sobre produção e vendas da Petrobras?"
  // Especialista em Relatórios Corporativos: "Como você pode auxiliar na interpretação de transcrições de webcasts e relatórios de Form 20-F?"
  // Facilitador de Pesquisa de Dados: "De que forma você pode realizar buscas na internet para complementar informações sobre o desempenho da Petrobras?"
  const placeholders = [
    "Como você pode me ajudar a entender os resultados financeiros trimestrais da Petrobras?",
    "Quais são as suas capacidades para analisar demonstrações financeiras e relatórios de resultados?",
    "Quais ferramentas você utiliza para obter informações sobre produção e vendas da Petrobras?",
    "Como você pode auxiliar na interpretação de transcrições de webcasts e relatórios de Form 20-F?",
    "De que forma você pode realizar buscas na internet para complementar informações sobre o desempenho da Petrobras?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setter( prev => [...prev, {role: 'user', content: value, datetime: Date.now()}] )
    console.log("submitted");
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
      value={value}
      setValue={setValue}
    />
  );
}
