import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { InfoIcon } from "lucide-react";
import ToolsAccordion from "./AccordionTools";

const ToolsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full h-12 text-white hover:text-black ">
        <div className="group/settings w-full flex justify-center items-center text-sm group/modal-btn whitespace-pre-wrap">
          <InfoIcon className="group-hover/settings:motion-rotate-in-[720deg] hover:motion-ease-spring-bouncier mr-2 cursor-pointer" />
          <span className="w-3/4 text-center">Andre.IA: Ferramentas</span>
        </div>
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
