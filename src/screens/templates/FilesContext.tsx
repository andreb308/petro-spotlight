import React, {
  useState,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

interface FilesContextInterface {
  files: File[] | null;
  setFiles: Dispatch<SetStateAction<File[] | null>>;
}
const FilesContext = createContext<FilesContextInterface | null>(null);

export const FilesContextProvider: React.FC<any> = ({ children }) => {
  const [files, setFiles] = useState<File[] | null>(null);

  // The handleFetch function
  // const handleFetch = async () => {
  //   const textResponse: CakesInfo = await fetch(
  //     "https://lace-fifth-dragonfly.glitch.me/"
  //   ).then((res) => res.json());
  //   setData(textResponse);
  // };

  // const contextValue: FilesContextInterface = {
  //   setData,
  //   loading,
  //   setLoading,
  //   texto,
  //   setTexto,
  // };

  return (
    <FilesContext.Provider value={{files, setFiles}}>{children}</FilesContext.Provider>
  );
};

export const useFilesContext = () => {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error("useFilesContext must be used within a FilesContextProvider");
  }
  return context;
};