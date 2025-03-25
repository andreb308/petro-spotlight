import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import URL from "../../../src/assets/logos/1 - LOGO_ÍCONE - conversa - letra A - sem fundo.png";
import ContextModal from "../abstractions/ModalContext";
import { Message } from "@/components/templates/MessagesContext";
import PopoverFeedback from "../abstractions/PopoverFeedback";
import { CopyIcon } from "lucide-react";
import { EnhancedButton } from "../ui/enhanced-button";
import MarkdownParser from "../abstractions/MarkdownParser";

type TableRow = { [key: string]: string };

// ChatMessage component
function ChatMessage({ msg }: { msg: Message }) {
  const { message_id, role, content, timestamp, score, comment } = msg;
  const [isHovering, setIsHovering] = useState(false);
  const date = new Date(timestamp);

  return (
    <div
      className={`select-text selection:text-black selection:bg-white motion-preset-fade-lg w-full flex flex-row gap-2 max-sm:gap-0 max-sm:w-dvw max-sm:px-4 ${
        role === "user" && "flex-row-reverse my-4"
      }`}
    >
      {/* Avatar */}
      <Avatar className="size-10">
        <AvatarImage
          src={role === "assistant" ? URL : "https://github.com/andreb308.png"}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      {/* Message content */}
      <div
        id="message"
        onPointerEnter={() => setIsHovering(true)}
        className={`${msg.role === "assistant" && "w-3/4 max-sm:w-full sm:max-lg:w-[90%]"} max-w-[72rem] relative h-auto rounded-2xl px-4 pb-4 pt-1 text-gray-100 ${msg.role === "assistant" ? "bg-[#ffffff10]" : "bg-[#ffffff05]"}`}
      >
        <p className="text-muted-foreground italic font-bold">
          {msg.role === "assistant" ? "Andre.IA:" : "Usuário:"}
        </p>

        <EnhancedButton title="Copiar Mensagem" onClick={() => navigator.clipboard.writeText(content)} className="absolute top-2 right-2 size-auto p-2 bg-transparent hover:bg-black"><CopyIcon /></EnhancedButton>

        {/* Markdown rendering */}

        <MarkdownParser role={role} content={content} />

        {/* Message footer */}
        <div
          id="footer"
          className={`mt-2 flex flex-row items-center justify-${
            role !== "user" ? "start" : "end"
          } gap-2`}
        >
          <p
            className={`text-xs text-zinc-400 h-6 flex items-center justify-center`}
            id="timestamp"
          >
            {date.toLocaleString("pt-BR")}
          </p>
          {role === "assistant" && isHovering && (
            <div className="flex gap-2">
              <PopoverFeedback
                message_id={message_id}
                rating={score}
                feedback={comment}
              />
              <ContextModal />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



export default ChatMessage;