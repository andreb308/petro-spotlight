// Importing necessary components and hooks.
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
// import { Message, useMessagesContext } from "./MessagesContext";
import { useParams, useNavigate } from "react-router";
import { addMessageToConversation, Conversation } from "@/lib/conversation";
import { log } from "console";
import { EnhancedButton } from "../ui/enhanced-button";
import { CheckIcon } from "lucide-react";

// Function component for the input prompt, which takes a setter function as a prop.
export function HomeInput() {
  // State to manage the input value.
  const [value, setValue] = useState("");

  const [webSearch, setWebSearch] = useState(false);
  const [codeInterpreter, setCodeInterpreter] = useState(false);

  const chatId = parseInt(String(useParams().chatId));
  // const { currentConversation, setCurrentConversation } = useMessagesContext();

  // Determine if the current page is the home page based on the absence of a chatId parameter.
  const isHomePage = !useParams().chatId;

  // Hook to programmatically navigate to different routes.
  let navigate = useNavigate();

  // Array of placeholder texts for the input, providing guidance on possible queries.
  const placeholders = [
    "Qual foi o EBITDA ajustado da Petrobras no último trimestre?",
    "Quais foram os números de produção de petróleo da Petrobras no último ano?",
    "Quais são os principais indicadores financeiros da Petrobras em 2024?",
    "Quais foram os principais pontos discutidos no webcast do 3T24 da Petrobras?",
    "Quais são os objetivos estratégicos da Petrobras para os próximos cinco anos?",
    "Quais são as últimas notícias sobre a Petrobras?",
    "Quais foram as principais mudanças no Form 20-F da Petrobras em 2023?",
    "Qual foi o histórico trimestral do CAPEX nos últimos três anos?",
    "Crie um gráfico da evolução do preço das ações da Petrobras nos últimos cinco anos.",
  ];

  // Handler for input change events, logging the current value.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // Handler for form submission, updating the messages state and navigating if on the home page.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chatId) {
      navigate(`/chat/16?prompt=${value}`);
      return;
      // navigate(`/chat/13?prompt=\${value}`)
    }
    console.log("submitted");
    // else {
    //   setCurrentConversation((prevConversation => {
    //     console.log('previus', prevConversation);

    //     const newMessageId = prevConversation.messages.length > 0
    //       ? prevConversation.messages[prevConversation.messages.length - 1].message_id + 1
    //       : 1;

    //     const newMessage: Message = {
    //       message_id: newMessageId,
    //       user_key: "user_001",
    //       role: "user",
    //       content: value,
    //       documents: null,
    //       timestamp: new Date().toISOString(),
    //       score: null,
    //       comment: null,
    //     };

    //     return {
    //       ...prevConversation,
    //       messages: [...prevConversation.messages, newMessage]
    //     };
    //   }));
    // }
  };

  // Rendering the input component with placeholders, change handler, submit handler, and value management.
  return (
    <div className="my-[2rem] w-full rounded-md flex flex-col antialiased bg-[#29273e] bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="flex items-center flex-col w-full bg-zinc-800 rounded-lg p-4 gap-0 m-0">
        {/* onSubmit: sends the message to the API to start a new chat and move the URL to the new page */}
        {/* //@ts-ignore */}
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          value={value}
          setValue={setValue}
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
  );
}
