// Importing necessary components and hooks.
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import { Message, useMessagesContext } from "./MessagesContext";
import { useParams, useNavigate } from "react-router";
import { addMessageToConversation, Conversation } from "@/lib/conversation";
import { log } from "console";

// Function component for the input prompt, which takes a setter function as a prop.
export function PromptInput({
  setter,
}: {
  setter: React.Dispatch<React.SetStateAction<Conversation>>;
}) {
  // State to manage the input value.
  const [value, setValue] = useState("");
  const chatId = parseInt(String(useParams().chatId));
  const { currentConversation, setCurrentConversation } = useMessagesContext();

  
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
    if (!chatId) {
      navigate(`/chat/13`);
      return;
      // navigate(`/chat/13?prompt=\${value}`)
    }
    else {
      setCurrentConversation((prevConversation => {
        console.log('previous', prevConversation);
        
        const newMessageId = prevConversation.messages.length > 0 
          ? prevConversation.messages[prevConversation.messages.length - 1].message_id + 1 
          : 1;
  
        const newMessage: Message = {
          message_id: newMessageId,
          user_key: "user_001",
          role: "user",
          content: value,
          documents: null,
          timestamp: new Date().toISOString(),
          score: null,
          comment: null,
        };
  
        return {
          ...prevConversation,
          messages: [...prevConversation.messages, newMessage]
        };
      }));
    }
    

    console.log("submitted");
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