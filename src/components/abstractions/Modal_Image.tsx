import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Component to display an image in a modal dialog, allowing for full-screen viewing.
const ImageModal = ({ src = "https://placehold.co/640x360/222/333", alt = "Image" }: { src?: string, alt?: string }) => {
  return (
    <Dialog>
      {/* Button behavior, used to open the dialog when the image is clicked. */}
      <DialogTrigger className="w-full max-w-[640px] flex justify-center my-4">
        <img
          className="rounded-lg" // Styling for rounded corners.
          src={src} // Source of the image to be displayed.
          alt={alt} // Alt text for accessibility
        />
      </DialogTrigger>

      {/* Content of the modal -> full-screen image. */}
      <DialogContent className="w-auto p-0 flex items-center justify-center overflow-y-auto">
        {/* VisuallyHidden is used to provide an accessible title for screen readers. */}
        <VisuallyHidden>
          <DialogTitle>{alt}</DialogTitle>
        </VisuallyHidden>

        <img
          className="max-h-[90dvh] max-w-[90dvw] rounded-lg object-contain" // Styling to ensure the image fits within the viewport.
          src={src}
          alt={alt}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;