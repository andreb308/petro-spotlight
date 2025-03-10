"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import { Message } from "./MessagesContext";
import { useParams, useNavigate } from "react-router";

export function PromptInput({
  setter,
}: {
  setter: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  const [value, setValue] = useState("");
  const isHomePage = !useParams().chatId;
  let navigate = useNavigate();
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
    setter((prev) => [
      ...prev,
      {
        message_id: prev.length + 1,
        user_key: prev[0].user_key,
        role: "user",
        content: value,
        documents: null,
        timestamp: Date.now(),
        score: null,
        comment: null,
      },
    ]);
    console.log("submitted");
    if (isHomePage) {
      navigate(`/chat/13`);
      // navigate(`/chat/13?prompt=${value}`)
    }
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
