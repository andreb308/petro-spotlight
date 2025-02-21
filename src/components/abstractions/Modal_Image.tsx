import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";

const ImageModal = ({ src = "https://placehold.co/640x360/111/222" }: { src?: string }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full flex justify-center my-4">
        {/* <div id="img-container" className="">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://placehold.co/600x100/"
        > */}
        <img
          className="rounded-lg"
          src={src}
          alt=""
        />
        {/* </a>
        </div> */}
      </DialogTrigger>
      <DialogContent className="w-auto p-0 flex items-center justify-center overflow-y-auto ">
        <img
          className="max-h-[90dvh] max-w-[90dvw] rounded-lg object-contain"
          src={src}
          alt=""
        />
        {/* <ToolsAccordion /> */}
        {/* <DialogFooter className="gap-4">
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
