// Importing necessary React hooks and types for managing state and context.
import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Interface to define the structure of the files context.
interface FilesContextInterface {
  files: File[] | null; // Array of files or null.
  setFiles: Dispatch<SetStateAction<File[] | null>>; // Function to update the files state.
}

// Creating the files context with an initial null value.
const FilesContext = createContext<FilesContextInterface | null>(null);

// Context provider that manages the files state and makes it available to child components.
export const FilesContextProvider: React.FC<any> = ({ children }) => {
  const [files, setFiles] = useState<File[] | null>(null); // Files state.

  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
};

// Custom hook to access the files context, ensuring it is used correctly.
export const useFilesContext = () => {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error(
      "useFilesContext must be used within a FilesContextProvider"
    );
  }
  return context;
};
