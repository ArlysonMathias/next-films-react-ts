import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalProviderData {
  stateModalDelete: boolean;
  stateModalEdit: boolean;
  stateModalInfo: boolean;
  handleModalDelete: () => void;
  handleModalEdit: () => void;
  handleModalInfo: () => void;
}

//context
const ModalContext = createContext<ModalProviderData>({} as ModalProviderData);

//provider

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [stateModalDelete, setStateModalDelete] = useState<boolean>(false);
  const [stateModalEdit, setStateModalEdit] = useState<boolean>(false);
  const [stateModalInfo, setStateModalInfo] = useState<boolean>(false);

  const handleModalDelete = () => {
    setStateModalDelete(!stateModalDelete);
  };

  const handleModalEdit = () => {
    setStateModalEdit(!stateModalEdit);
  };
  const handleModalInfo = () => {
    setStateModalInfo(!stateModalInfo);
  };

  return (
    <ModalContext.Provider
      value={{
        stateModalDelete,
        stateModalEdit,
        stateModalInfo,
        handleModalDelete,
        handleModalEdit,
        handleModalInfo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
