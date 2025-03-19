import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/file-upload";
import { Paperclip } from "lucide-react";
import { useFilesContext } from "@/components/templates/FilesContext";

// SVG component for file upload icon
const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        PDF, TXT or DOCX files
      </p>
    </>
  );
};

const FileUploaderTest = () => {
  // Get files and setFiles from context
  const { files, setFiles } = useFilesContext();

  // Configuration for the dropzone
  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 8, // 8MB
    multiple: true,
  };

  return (
    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropZoneConfig}
      className="relative bg-black text-foreground rounded-lg p-2"
    >
      {/* File input area */}
      <FileInput className="outline-dashed outline-1 outline-white">
        <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
          <FileSvgDraw />
        </div>
      </FileInput>

      {/* Uploaded files list */}
      <FileUploaderContent className="">
        {files &&
          files.length > 0 &&
          files.map((file, i) => (
            <FileUploaderItem 
              className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-sm py-4" 
              key={i} 
              index={i}
            >
              <Paperclip className="h-4 w-4 stroke-current" />
              <span className="w-48 text-nowrap overflow-hidden pr-4 text-ellipsis">
                {file.name}
              </span>
            </FileUploaderItem>
          ))}
      </FileUploaderContent>
    </FileUploader>
  );
};

export default FileUploaderTest;