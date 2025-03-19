import React, { useRef, useState, useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import URL from "../../../src/assets/logos/1 - LOGO_ÍCONE - conversa - letra A - sem fundo.png";
import ContextModal from "./ModalContext";
import ImageModal from "./Modal_Image";
import { Message } from "@/components/templates/MessagesContext";
import PopoverFeedback from "./PopoverFeedback";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { saveAs } from "file-saver";
import { CopyIcon, DownloadCloudIcon } from "lucide-react";
import { Button } from "../ui/button";
import { EnhancedButton } from "../ui/enhanced-button";

type TableRow = { [key: string]: string };

// ChatMessage component
function ChatMessage({ msg }: { msg: Message }) {
  const { message_id, role, content, timestamp, score, comment } = msg;
  const [isHovering, setIsHovering] = useState(false);
  const date = new Date(timestamp);

  return (
    <div
      className={`select-text selection:text-black selection:bg-white motion-preset-fade-lg w-full flex flex-row gap-2 max-lg:gap-0 max-lg:w-dvw max-lg:px-4 ${
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
        className={`${msg.role === "assistant" && "w-3/4 max-lg:w-full"} max-w-[72rem] relative h-auto rounded-2xl px-4 pb-4 pt-1 text-gray-100 ${msg.role === "assistant" ? "bg-[#ffffff10]" : "bg-[#ffffff05]"}`}
      >
        <p className="text-muted-foreground italic font-bold ">
          {msg.role === "assistant" ? "Andre.IA:" : "Usuário:"}
        </p>

        <EnhancedButton title="Copiar Mensagem" onClick={() => navigator.clipboard.writeText(content)} className="absolute top-2 right-2 size-auto p-2 bg-transparent hover:bg-black"><CopyIcon /></EnhancedButton>

        {/* Markdown rendering */}

        <Markdown
          // remarkPlugins is used to render tables.
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom rendering for images to allow full-screen viewing.
            img: (image) => <ImageModal src={image.src || ""} />,

            // Custom rendering for code blocks to enhance syntax highlighting.
            code: (props) => {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");

              return match ? (
                //@ts-expect-error
                <SyntaxHighlighter
                  {...rest}
                  wrapLongLines
                  className="max-lg:max-w-[70vw]"
                  PreTag="div"
                  children={String(children).replace(/\n\\$/, "")}
                  showLineNumbers={true}
                  language={match[1]}
                  style={dracula}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },

            // Custom rendering for tables to include a download as CSV functionality.
            table: (props) => {
              const { children } = props;
              return <TableComponent {...props}>{children}</TableComponent>;
            },

            // Custom rendering for paragraphs.
            p: (props) => {
              const { children } = props;
              return (
                <p className={`my-6 ${msg.role === 'user' ? 'text-right ' : ""}`}>
                  {children}
                </p>
              );
            },
            h1: (props) => {
              const { children } = props;
              return (
                <h1 className={`my-6 text-2xl ${msg.role === 'user' ? 'text-right ' : ""}`}>
                  {children}
                </h1>
              );
            },
            h2: (props) => {
              const { children } = props;
              return (
                <h2 className={`my-6 text-xl ${msg.role === 'user' ? 'text-right ' : ""}`}>
                  {children}
                </h2>
              );
            },
            h3: (props) => {
              const { children } = props;
              return (
                <h3 className={`my-6 text-lg ${msg.role === 'user' ? 'text-right ' : ""}`}>
                  {children}
                </h3>
              );
            },
          }}
        >
          {content}
        </Markdown>

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


// Function to convert table data to CSV
const convertToCSV = (tableData: string[][]): string => {
  const header = tableData[0].join(",");
  const rows = tableData.slice(1).map((row) => row.join(","));
  return [header, ...rows].join("\n");
};

// Function to extract data from table
const extractTableData = (tableElement: HTMLTableElement): string[][] => {
  const rows = Array.from(tableElement.querySelectorAll("tr"));
  return rows.map((row) =>
    Array.from(row.querySelectorAll("th, td")).map(
      (cell) => cell.textContent || ""
    )
  );
};

// TableComponent for rendering tables with download functionality
interface TableComponentProps {
  children: React.ReactNode;
}

const TableComponent: React.FC<TableComponentProps> = ({ children }) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const handleDownload = useCallback(() => {
    if (tableRef.current) {
      const tableData = extractTableData(tableRef.current);
      const csv = convertToCSV(tableData);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "table_data.csv");
    }
  }, []);

  return (
    <div>
      <table
        ref={tableRef}
        className="table-auto relative !border-[hsl(var(--foreground))] w-full text-left whitespace-nowrap"
      >
        {children}
      </table>
      <EnhancedButton onClick={handleDownload}>
        <DownloadCloudIcon /> Baixar como CSV
      </EnhancedButton>
    </div>
  );
};

export default ChatMessage;