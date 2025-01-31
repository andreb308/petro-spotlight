import { useFilesContext } from "@/templates/FilesContext";
import { XIcon } from "lucide-react";
import React from "react";

function FileTags() {
  const { files, setFiles } = useFilesContext();
  return (
    <div className="h-10 w-full flex items-center gap-2 justify-start">
      {files?.map( (f, i) => <div title={f.name} className="cursor-pointer rounded-full relative flex flex-row items-center bg-white px-2 py-1">
        <span className="max-w-28 overflow-hidden text-nowrap text-ellipsis" >{f.name}</span>
        <XIcon className="h-3 w-3 text-muted-foreground hover:text-black" />
      </div> )}
    </div>
  );
}

export default FileTags;
