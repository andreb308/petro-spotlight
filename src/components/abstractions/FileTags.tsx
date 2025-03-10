// Importing necessary hooks and components for the FileTags functionality.
import { useFilesContext } from "@/components/templates/FilesContext"; // Custom hook to access files context.
import { XIcon } from "lucide-react"; // Icon component for the close button.
import React from "react";

// Component to display file tags with the ability to remove them.
function FileTags() {
  // Destructuring files and setFiles from the FilesContext.
  const { files, setFiles } = useFilesContext();

  // Function to handle the click event on a file tag's close icon.
  // It removes the file from the list based on its index.
  const handleTagClick = (ind: number) => {
    setFiles(prevFiles => prevFiles!.filter((file) => file !== prevFiles![ind]));
  };

  return (
    <div className="h-10 w-full flex items-center gap-2 justify-start">
      {/* Mapping over the files array to display each file as a tag. */}
      {files?.map((f, i) => (
        <div
          title={f.name} // Tooltip displaying the full file name. on hover
          className="motion-opacity-in-0 motion-translate-y-in-100 motion-translate-y-out-100 motion-blur-in-sm cursor-pointer rounded-full relative flex flex-row items-center bg-white px-2 py-1"
        >
          {/* File name with text overflow handling. */}
          <span className="max-w-28 overflow-hidden text-nowrap text-ellipsis">
            {f.name}
          </span>
          {/* Close icon to remove the file tag, triggering handleTagClick on click. */}
          <XIcon
            onClick={() => handleTagClick(i)}
            className="h-4 w-4 text-muted-foreground hover:text-black"
          />
        </div>
      ))}
    </div>
  );
}

export default FileTags;