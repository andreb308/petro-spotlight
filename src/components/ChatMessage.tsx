import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import URL from "../../src-tauri/icons/icon.ico";
import ContextModal from "./ContextModal";

function ChatMessage({ role }: { role: "user" | "system" }) {
  
  const userPlaceholderText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, at!";
  const systemPlaceholderText =
    "Ab minima temporibus exercitationem cum, illum ratione odit autem maiores corporis, ipsa voluptatem dicta maxime facere, dignissimos laboriosam. Numquam at officiis obcaecati in voluptas architecto fugiat, ipsum, minima ipsam labore voluptatibus quibusdam, quo natus hic reprehenderit maxime deserunt adipisci possimus amet similique!";
  
    return (
    <div
      className={`w-full flex flex-row gap-2 ${role === "user" && "flex-row-reverse"}`}
    >
      <Avatar className="size-10">
        <AvatarImage src={role === "system" ? URL : "https://github.com/andreb308.png"}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <div
        id="message"
        className={"relative w-full h-auto rounded-3xl p-4 text-gray-100 max-w-xl bg-green-700"}
      >
        {role === "user" ? userPlaceholderText : systemPlaceholderText}
        <div
          id="footer"
          className={`flex flex-row items-center justify-${ role === "user" ? "start" : "end" } gap-2`}
        >
          {role === "system" && <ContextModal />}
          <p className={`text-xs text-zinc-400`} id="timestamp">
            quarta-feira, 13:13
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;

