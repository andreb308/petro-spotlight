import "../index.css";
import { MessagesContextProvider } from "@/components/templates/MessagesContext";
import ChatMessage from "@/components/templates/ChatMessage";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const prompt = searchParams.get("prompt")
  const isHomePage = !chatId;



  /* Se houver prompt, setCurrConv vai ser o prompt recebido. Teoricamente não deveria haver uma situação com chatId E prompt na mesma URL naturalmente. */

  
  // Get messages and setMessages from context
  const { currentConversation, setCurrentConversation } = useMessagesContext();
  
  
  // TO DO: Fetch from API based on chatId and return the message history. Currently hardcoded and imported from the 'conversations.ts' and 'MessagesContext.tsx' files.
  
  // // State for web search and code interpreter features (currently unused)
  // const [webSearch, setWebSearch] = useState(false);
  // const [codeInterpreter, setCodeInterpreter] = useState(false);

  // useEffect(() => {
  //   // const response = await api.get<Message[]>("/", { params: { chatId } }).then((response) => response.data);
  //   const response = getConversationById(chatId)
  //   setCurrentConversation(response);

  // }, [chatId]);
  // Effect to scroll to bottom of chat when messages change

  useEffect(() => {
    if (prompt) {
      setCurrentConversation({
        id: 16,
        topic: "New Conversation",
        messages: [
          {
            message_id: 1,
            user_key: "user_003",
            role: "user",
            content: prompt,
            documents: null,
            timestamp: "2023-10-05T14:00:00Z",
            score: null,
            comment: null,
          },
          {
            message_id: 2,
            user_key: "user_003",
            role: "assistant",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis voluptatem reprehenderit amet debitis? Voluptates eius atque perspiciatis doloremque enim, exercitationem nulla doloribus consequatur consequuntur eos totam sint fugiat voluptatibus voluptate, possimus omnis velit iusto ipsa aliquid non rem quisquam labore! Expedita sed, unde aut exercitationem praesentium tempora eius sit laboriosam iusto nostrum nobis excepturi neque. Doloribus perferendis voluptate maiores aut quaerat amet cum, voluptatem quasi ipsum dolorum aliquid pariatur enim dignissimos, explicabo voluptates! Adipisci, ducimus autem alias quaerat excepturi dolorem praesentium rerum tenetur vel voluptas iusto necessitatibus? Reprehenderit provident cumque magnam nemo ipsa culpa non. Veniam ex minima dicta aspernatur quibusdam possimus, libero laboriosam vel cupiditate natus quidem animi ducimus? Dolorum, odit saepe, error aut cum a eligendi totam quo quisquam ipsum molestias similique, soluta ex. Libero molestias rem laborum eos architecto unde repellat? Nesciunt soluta cupiditate dolore omnis et voluptatibus molestias dignissimos minus odit veritatis optio fuga autem, corrupti dolorem, impedit dolores deleniti sed numquam quaerat veniam mollitia esse maiores! Perspiciatis quo veniam obcaecati facilis eos doloribus perferendis itaque dolor consectetur minus a dignissimos cumque, commodi ullam maiores neque explicabo adipisci quod pariatur necessitatibus, sit quidem dolore corrupti magnam! Sint nobis recusandae repellat vel omnis a ea, at, laboriosam labore odit corporis asperiores veniam rem. Incidunt fuga sit facere perspiciatis corrupti quidem adipisci molestias sunt omnis ea, sequi quam expedita? Quod minima eius, inventore nam ullam est corrupti nesciunt eos explicabo accusamus. Eaque, nobis. Dolorem, vero? Minima, fugit exercitationem asperiores accusantium est obcaecati explicabo tempora iure officia animi minus quam, odio incidunt. Mollitia sunt ratione voluptatem ullam quae praesentium molestias facere neque at officia? Est quasi voluptatum totam corrupti suscipit incidunt veniam, perferendis eaque ex praesentium facere, ad autem deleniti laudantium. Illo, assumenda ullam autem a, magni iusto veniam debitis corrupti sequi corporis dignissimos. Omnis repellendus aliquid sunt!",
            documents: null,
            timestamp: "2023-10-05T14:00:15Z",
            score: "4",
            comment:
              "Good initial response, but could provide more immediate information.",
          },
        ],
      })
  }
  else if (chatId) {
      const response = getConversationById(chatId)
      setCurrentConversation(response);
  }
  
  }, [])
  

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
