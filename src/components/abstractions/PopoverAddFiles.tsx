import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EnhancedButton } from "../ui/enhanced-button";
import { motion } from "framer-motion";
import FileUploaderTest from "./Uploader";
import { useFilesContext } from "@/components/templates/FilesContext";

function AddFilesPopover() {
  // Destructuring files from the FilesContext to access the current list of files.
  const { files } = useFilesContext();

  return (
    <Popover>
      {/* Opens popover when clicked. */}
      <PopoverTrigger asChild>
      {/* <EnhancedButton
        effect="shineHover"
          onClick={() => setCodeInterpreter((p) => !p)}
          className={`rounded-full bg-sidebar hover:bg-sidebar py-1 h-8 border-[0.5px] border-white ${
            !codeInterpreter && "bg-transparent"
          }`}
          // effect="shineHover"
        >
          <SquareChartGanttIcon />
          {/* {codeInterpreter ? <CheckIcon /> : <SquareChartGanttIcon />}Code Interpreter 
        </EnhancedButton> */}
        <EnhancedButton
          type="button"
          effect='shineHover'
          className={`group/files absolute right-12 top-1/2 z-50 -translate-y-1/2 rounded-full bg-transparent ${!!files && 'bg-sidebar hover:bg-sidebar'} size-8 border-[0.5px] border-white overflow-visible`}
        >
          {/* Number of files as a badge if there are any. */}
          {!!files?.length && (
            <span className="absolute -bottom-2 right-0 flex justify-center items-center text-xs p-2 z-[51] rounded-full bg-red-600 size-2 text-foreground">
              {files.length}
            </span>
          )}
          {/* SVG icon for the button, with motion effects for animation. */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-paperclip text-gray-300 h-4 w-4 group-hover/files:motion-preset-pulse motion-loop-once motion-duration-500"
          >
            <path d="M13.234 20.252 21 12.3" />
            <path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
          </motion.svg>
        </EnhancedButton>
      </PopoverTrigger>

      {/* PopoverContent defines the content of the popover, including the file uploader component. */}
      <PopoverContent className="w-72 bg-black border-[#fff]">
        <FileUploaderTest />
      </PopoverContent>
    </Popover>
  );
}

export default AddFilesPopover;