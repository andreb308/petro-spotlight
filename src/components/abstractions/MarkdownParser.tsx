import React, { useRef, useCallback } from "react";
import ImageModal from "../abstractions/Modal_Image";
import { Message } from "@/components/templates/MessagesContext";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { saveAs } from "file-saver";
import { DownloadCloudIcon } from "lucide-react";
import { EnhancedButton } from "../ui/enhanced-button";

function MarkdownParser({
  role,
  content,
}: {
  role: string;
  content: string | null | undefined;
}) {
  return (
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
              className="max-sm:max-w-[70vw]"
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
            <p className={`my-6 ${role === "user" ? "text-right " : ""}`}>
              {children}
            </p>
          );
        },
        h1: (props) => {
          const { children } = props;
          return (
            <h1
              className={`my-6 text-2xl ${
                role === "user" ? "text-right " : ""
              }`}
            >
              {children}
            </h1>
          );
        },
        h2: (props) => {
          const { children } = props;
          return (
            <h2
              className={`my-6 text-xl ${
                role === "user" ? "text-right " : ""
              }`}
            >
              {children}
            </h2>
          );
        },
        h3: (props) => {
          const { children } = props;
          return (
            <h3
              className={`my-6 text-lg ${
                role === "user" ? "text-right " : ""
              }`}
            >
              {children}
            </h3>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownParser;

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
      
      // Add UTF-8 BOM
      const BOM = '\uFEFF';
      const csvWithBOM = BOM + csv;
      
      const blob = new Blob([csvWithBOM], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "table_data.csv");
    }
  }, []);

  return (
    <div className="relative pb-10">
      <table
        ref={tableRef}
        className="table-auto !border-[hsl(var(--foreground))] w-full text-left whitespace-nowrap"
      >
        {children}
      <EnhancedButton className="group/csv absolute bottom-0 left-0" onClick={handleDownload}>
        <DownloadCloudIcon xlinkTitle="Baixar como CSV" className="group-hover/csv:motion-preset-pulse motion-loop-once motion-duration-500" /> Baixar CSV
      </EnhancedButton>
      </table>
    </div>
  );
};
