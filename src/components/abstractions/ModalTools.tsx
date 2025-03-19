import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { InfoIcon } from "lucide-react";
import ToolsAccordion from "./AccordionTools";

// Component to display a modal dialog for accessing various knowledge bases.
const ToolsModal = () => {
  return (
    <Dialog>
      {/* Open the dialog when the icon is clicked. Trigger changes text color on hover and includes an animation effect. */}
      <DialogTrigger asChild className="w-full h-12 text-foreground hover:text-black">

        <div className="group/settings w-full flex justify-center items-center text-sm group/modal-btn">
          {/* Info icon with animation effects on hover, rotating 720 degrees. */}
          <InfoIcon className="group-hover/settings:motion-rotate-in-[720deg] hover:motion-ease-spring-bouncier mr-2 cursor-pointer" />
          
          <span className="w-3/4 text-center">Bases de Conhecimento</span>
        </div>

      </DialogTrigger>

      {/* DialogContent defines the content of the modal, including a tools accordion for displaying knowledge bases. */}
      <DialogContent className="max-h-[90dvh] w-[50dvw] overflow-y-auto max-lg:w-[90%] max-[900px]:h-3/4" aria-describedby="Bases de conhecimento da ferramenta.">
        <ToolsAccordion /> {/* // Component to display a list of tools or knowledge bases in an accordion format. */}
      </DialogContent>
    </Dialog>
  );
};

export default ToolsModal;
