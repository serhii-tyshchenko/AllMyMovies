import { useContext } from 'react';
import { ModalContext } from 'contexts/modal';

const useModalContext = () => {
  const { setModalParams } = useContext(ModalContext);

  const showModal = (name) => setModalParams({ isOpen: true, name });

  const hideModal = (name) => setModalParams({ isOpen: false, name });

  return { showModal, hideModal };
};

export default useModalContext;
