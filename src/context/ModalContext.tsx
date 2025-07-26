import { createContext, useContext, useState } from "react";

type ModalContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  projectID: number;
  setProjectID: (value: number) => void;
};

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [projectID, setProjectID] = useState(0);
  return (
    <ModalContext.Provider value={{ open, setOpen, projectID, setProjectID }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
