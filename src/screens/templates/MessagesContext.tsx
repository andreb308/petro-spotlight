import React, {
    useState,
    createContext,
    useContext,
    useRef,
    Dispatch,
    SetStateAction,
  } from "react";

  import conversation from "@/lib/conversation"
  

  export type Rating = "1" | "2" | "3" | "4" | "5";
  
  export type Message = {
    message_id: number;
    user_key: string;
    role: "user" | "assistant";
    content: string;
    documents: string | null;
    timestamp: string | number;
    score: Rating | null;
    comment: string | null;
  };

  // export type UserMessage = {
  //   message_id: number;
  //   role: "user";
  //   content: string;
  //   datetime: string | number;
  //   rating?: never;
  // };
  // export type AssistantMessage = {
  //   message_id: number;
  //   role: "assistant";
  //   content: string;
  //   datetime: string | number;
  //   rating: string;
  // };

  // export type Message = UserMessage | AssistantMessage;

  interface MessagesContextInterface {
    messages: Message[] | null;
    setMessages: Dispatch<SetStateAction<Message[]>>;
  }
  
  const MessagesContext = createContext<MessagesContextInterface | null>(null);
  
  
  export const MessagesContextProvider: React.FC<any> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>(conversation);
      
    return (
      <MessagesContext.Provider value={{messages, setMessages}}>{children}</MessagesContext.Provider>
    );
  };
  
  export const useMessagesContext = () => {
    const context = useContext(MessagesContext);
    if (!context) {
      throw new Error("useMessagesContext must be used within a MessagesContextProvider");
    }
    return context;
  };