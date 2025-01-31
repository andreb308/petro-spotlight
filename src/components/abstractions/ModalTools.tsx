import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { InfoIcon, SquareMousePointer } from "lucide-react";
import ToolsAccordion from "./AccordionTools";

const ToolsModal = () => {
  return (
    <Dialog>
      <DialogTrigger className=" h-12 size-full text-white hover:text-black flex justify-center items-center text-sm group/modal-btn whitespace-pre-wrap">
        <InfoIcon className="hover:motion-rotate-in-[720deg] hover:motion-ease-spring-bouncier mr-2 cursor-pointer" />
        Andre.IA: Ferramentas
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[50dvw] overflow-y-auto ">
        <ToolsAccordion />
        {/* <DialogFooter className="gap-4">
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ToolsModal;
