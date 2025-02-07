import React, {
    useState,
    createContext,
    useContext,
    useRef,
    Dispatch,
    SetStateAction,
  } from "react";
  

  export type Rating = "-1" | "1" | "2" | "3" | "4" | "5";
  
  export type Message = {
    message_id: number;
    role: "user" | "assistant";
    content: string;
    datetime: string | number;
    rating: Rating;
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
    const [messages, setMessages] = useState<Message[]>([
        {
          message_id: 1,
          role: "user",
          content: "Hello, how are you?",
          datetime: "2024-03-15T12:00:00Z",
          rating: "-1",
        },
        {
          message_id: 2,
          role: "assistant",
          content: "I am doing well, thank you for asking! How can I help you today?",
          datetime: "2024-03-15T12:01:00Z",
          rating: "-1",
        },
        {
          message_id: 3,
          role: "user",
          content: "I need help with a coding problem.",
          datetime: "2024-03-15T12:02:00Z",
          rating: "-1",
        },
        {
          message_id: 4,
          role: "assistant",
          content: "I can help with that! Please provide me with the details of the problem.",
          datetime: "2024-03-15T12:03:00Z",
          rating: "-1",
        },
        {
          message_id: 5,
          role: "user",
          content: "I'm trying to implement a function that reverses a string.",
          datetime: "2024-03-15T12:04:00Z",
          rating: "-1",
        },
        {
          message_id: 6,
          role: "assistant",
          content:
            "Okay, that's a common task. What language are you using? Do you have any code you've started?",
          datetime: "2024-03-15T12:05:00Z",
          rating: "-1",
        },
        {
          message_id: 7,
          role: "user",
          content: "I'm using JavaScript, and I haven't written any code yet.",
          datetime: "2024-03-15T12:06:00Z",
          rating: "-1",
        },
        {
          message_id: 0,
          role: "assistant",
          content: `No problem! Here is an example of how to reverse a string in Javascript:\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nobis nostrum quia quasi ex! Maxime quibusdam beatae deserunt, sed voluptatum amet debitis consectetur nemo delectus, molestiae quo aliquam illum ad cum consequuntur esse aut impedit. Ex expedita perspiciatis at ipsam! Et deserunt ea voluptatibus velit recusandae repellat accusamus, cumque ad ex nesciunt excepturi corporis, veritatis, adipisci minus accusantium reiciendis blanditiis quia labore eum commodi omnis natus amet! Distinctio, similique incidunt cupiditate quos beatae impedit explicabo mollitia, itaque magni obcaecati debitis deleniti tempore qui molestiae, esse autem? Aliquid similique eius suscipit temporibus labore facere minima, inventore voluptates sit! Deserunt, dolorem cupiditate!`,
          datetime: "2024-03-15T12:07:00Z",
          rating: "-1",
        },
      ]);
      
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