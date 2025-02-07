import { useFilesContext } from "@/screens/templates/FilesContext";
import { XIcon } from "lucide-react";
import React from "react";

function FileTags() {
  const { files, setFiles } = useFilesContext();
  const handleTagClick = (ind : number) => { setFiles(prevFiles => prevFiles!.filter((file) => file !== prevFiles![ind]))}

  return (
    <div className="h-10 w-full flex items-center gap-2 justify-start">
      {files?.map( (f, i) => <div title={f.name} className="motion-opacity-in-0 motion-translate-y-in-100 motion-translate-y-out-100 motion-blur-in-sm cursor-pointer rounded-full relative flex flex-row items-center bg-white px-2 py-1">
        <span className="max-w-28 overflow-hidden text-nowrap text-ellipsis" >{f.name}</span>
        <XIcon onClick={() => handleTagClick(i)} className="h-4 w-4 text-muted-foreground hover:text-black" />
      </div> )}
    </div>
  );
}

export default FileTags;
