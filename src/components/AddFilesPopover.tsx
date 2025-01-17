import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { EnhancedButton } from "./ui/enhanced-button";
import { motion } from "framer-motion";
import FileUploaderTest from "./ui/Uploader";


function AddFilesPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <EnhancedButton
          type="button"
          className="absolute right-12 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full bg-zinc-900 disabled:bg-zinc-800 transition duration-200 flex items-center justify-center border-none"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-paperclip text-gray-300 h-4 w-4"
          >
            <path d="M13.234 20.252 21 12.3" />
            <path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
          </motion.svg>
        </EnhancedButton>
      </PopoverTrigger>
      <PopoverContent className="w-72 bg-black">
      <FileUploaderTest />
      </PopoverContent>
    </Popover>
  );
}

export default AddFilesPopover;
