import { MutableRefObject } from "react";

export const useModalFunctionality = (modalRef: MutableRefObject<HTMLDialogElement | null>) => {
  const closeModal = () => {
    modalRef?.current?.close();
  };

  const openModal = () => {
    modalRef?.current?.showModal();
  };

  return {
    closeModal,
    openModal,
  };
};
