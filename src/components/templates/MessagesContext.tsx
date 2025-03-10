// Importing necessary React hooks and types for managing state and context.
import React, {
  useState,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

// Importing initial conversation data from a specified path.
import conversation from "@/lib/conversation"

// Defining a type for rating, which can be a string from "1" to "5".
export type Rating = "1" | "2" | "3" | "4" | "5";

// Defining a type for a message, which includes various properties such as message ID, user key, role, content, documents, timestamp, score, and comment.
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

// Interface to define the structure of the messages context.
interface MessagesContextInterface {
  messages: Message[] | null; // Array of messages or null.
  setMessages: Dispatch<SetStateAction<Message[]>>; // Function to update the messages state.
}

// Creating the messages context with an initial null value.
const MessagesContext = createContext<MessagesContextInterface | null>(null);

// Context provider that manages the messages state and makes it available to child components.
export const MessagesContextProvider: React.FC<any> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>(conversation); // Initializing messages state with conversation data.

  return (
      <MessagesContext.Provider value={{messages, setMessages}}>
          {children}
      </MessagesContext.Provider>
  );
};

// Custom hook to access the messages context, ensuring it is used correctly.
export const useMessagesContext = () => {
  const context = useContext(MessagesContext);
  if (!context) {
      throw new Error("useMessagesContext must be used within a MessagesContextProvider");
  }
  return context;
};