// Importing necessary components and hooks.
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import { Message } from "./MessagesContext";
import { useParams, useNavigate } from "react-router";

// Function component for the input prompt, which takes a setter function as a prop.
export function PromptInput({
  setter,
}: {
  setter: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  // State to manage the input value.
  const [value, setValue] = useState("");
  
  // Determine if the current page is the home page based on the absence of a chatId parameter.
  const isHomePage = !useParams().chatId;

  // Hook to programmatically navigate to different routes.
  let navigate = useNavigate();

  // Array of placeholder texts for the input, providing guidance on possible queries.
  const placeholders = [
    "Como você pode me ajudar a entender os resultados financeiros trimestrais da Petrobras?",
    "Quais são as suas capacidades para analisar demonstrações financeiras e relatórios de resultados?",
    "Quais ferramentas você utiliza para obter informações sobre produção e vendas da Petrobras?",
    "Como você pode auxiliar na interpretação de transcrições de webcasts e relatórios de Form 20-F?",
    "De que forma você pode realizar buscas na internet para complementar informações sobre o desempenho da Petrobras?",
  ];

  // Handler for input change events, logging the current value.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // Handler for form submission, updating the messages state and navigating if on the home page.
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
      // navigate(`/chat/13?prompt=\${value}`)
    }
  };

  // Rendering the input component with placeholders, change handler, submit handler, and value management.
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