import "../index.css";
import { MessagesContextProvider } from "@/components/templates/MessagesContext";
import ChatMessage from "@/components/abstractions/ChatMessage";
import { PromptInput } from "@/components/templates/PromptInput";
import React, { useEffect, useRef, useState } from "react";
import { useMessagesContext } from "../components/templates/MessagesContext";
import { useParams, useSearchParams } from "react-router";
import { getConversationById, Conversation } from "@/lib/conversation";

function ChatWrapper() {
  // Reference to the chat container for scrolling
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Check if it's the home page
  const params = useParams()
  const chatId = parseInt(String(params.chatId)) || 0;
  const isHomePage = !chatId;

  // Get messages and setMessages from context
  const { currentConversation, setCurrentConversation } = useMessagesContext();
  
  // TO DO: Fetch from API based on chatId and return the message history. Currently hardcoded and imported from the 'conversations.ts' and 'MessagesContext.tsx' files.
  
  // State for web search and code interpreter features (currently unused)
  const [webSearch, setWebSearch] = useState(false);
  const [codeInterpreter, setCodeInterpreter] = useState(false);

  // Effect to scroll to bottom of chat when messages change

  useEffect(() => {
    // const response = await api.get<Message[]>("/", { params: { chatId } }).then((response) => response.data);
    const response = getConversationById(chatId)
    setCurrentConversation(response);

  }, [chatId]);

useEffect( () => {
  setTimeout(() => {
    chatContainerRef.current!.scrollTop =
      chatContainerRef.current!.scrollHeight;
  }, 100);
}, [currentConversation.id, currentConversation.messages.length] )

  return (
      <div className="h-dvh py-4 w-full bg-background grid grid-cols-1 grid-rows-12">
        {/* Chat messages container */}
        <div
          className="motion-preset-slide-down-sm motion-delay-1000 min-w-[70%] rounded-md row-span-10 gap-12 flex flex-col p-12 overflow-y-auto max-sm:w-auto max-sm:p-0 sm:max-lg:p-0"
          style={{ scrollbarColor: "white black" }}
          ref={chatContainerRef}
        >
          {currentConversation && currentConversation.messages.length ? (
            <>
              <div className="size-full px-24 flex flex-col gap-8 max-sm:px-0 max-sm:gap-2 sm:max-lg:px-4">
                {currentConversation.messages.map((m, i) => (
                  <ChatMessage key={m.timestamp} msg={m} />
                ))}
              </div>
            </>
          ) : (
            // Div with Error message
            <div className="size-full flex items-center justify-center">
              <h1 className="text-3xl text-center font-bold text-foreground">Houve um erro ao carregar as mensagens.</h1>
            </div>
          )}
        </div>

        {/* Input area */}
        {/* NOTA: Utilizar '&&' em vez do operador '?' acaba renderizando o length (0) na tela. Não alterar. */}
        {(currentConversation && currentConversation.messages.length) ? (<div className="rounded-md px-48 max-sm:px-4 row-span-2 mt-2 flex items-center justify-around flex-col sm:max-lg:px-4">
          {/* <FileTags /> */}
          <PromptInput setter={setCurrentConversation} />
          {/* Disclaimer */}
          <p className="motion-preset-slide-up-lg motion-delay-500 text-muted-foreground mt-2 text-center text-sm max-sm:m-0">
          A Andre.IA pode cometer erros: verifique sempre as respostas nas fontes oficiais. <br/>
          Não inclua informações ou arquivos confidenciais.
          {/* As respostas da Andre.IA foram geradas por Inteligência Artificial.
            Erros podem ocorrer. */}
          </p>
        </div>) : null}
        
        
      </div>
  );
}

export default ChatWrapper;
