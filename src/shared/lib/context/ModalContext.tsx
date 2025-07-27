import { Project } from "@/shared/types";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  project: Project;
  setProject: (project: Project) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
};

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({} as Project);

  return (
    <ModalContext.Provider value={{ open, setOpen, project, setProject }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
