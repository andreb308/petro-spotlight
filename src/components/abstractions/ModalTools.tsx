import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { InfoIcon } from "lucide-react";
import ToolsAccordion from "./AccordionTools";

// Component to display a modal dialog for accessing various knowledge bases.
const ToolsModal = () => {
  return (
    <Dialog>
      {/* Open the dialog when the icon is clicked. Trigger changes text color on hover and includes an animation effect. */}
      <DialogTrigger
        asChild
        className="w-full h-12 text-foreground hover:text-black"
      >
        <div className="group/settings w-full flex justify-center items-center text-sm group/modal-btn">
          {/* Info icon with animation effects on hover, rotating 720 degrees. */}
          <InfoIcon className="group-hover/settings:motion-rotate-in-[720deg] hover:motion-ease-spring-bouncier mr-2 cursor-pointer" />

          <span className="w-3/4 text-center">Bases de Conhecimento</span>
        </div>
      </DialogTrigger>

      {/* DialogContent defines the content of the modal, including a tools accordion for displaying knowledge bases. */}
      <DialogContent
        style={{ scrollbarColor: "white transparent" }}
        className="w-1/2 max-sm:w-[90%] max-h-[80%] overflow-y-auto  max-sm:overflow-y-auto max-sm:rounded-lg  max-sm:h-3/4 sm:max-lg:w-4/5 p-8 sm:max-lg:overflow-y-auto"
        aria-describedby="Bases de conhecimento da ferramenta."
      >
        {/* <DialogContent className="max-h-[90dvh] w-[50dvw] overflow-y-auto max-sm:w-[90%] max-[900px]:h-3/4" aria-describedby="Bases de conhecimento da ferramenta."> */}
        <ToolsAccordion />{" "}
        {/* // Component to display a list of tools or knowledge bases in an accordion format. */}
      </DialogContent>
    </Dialog>
  );
};

export default ToolsModal;
