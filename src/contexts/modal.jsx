import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { MODAL_NAMES } from 'core/constants';

const ModalContext = createContext();
ModalContext.displayName = 'ModalContext';

const initialState = {
  [MODAL_NAMES.AUTH]: {
    isOpen: false,
  },
  [MODAL_NAMES.MOVIE_DETAILS]: {
    isOpen: false,
  }
}

function ModalContextProvider({ children }) {
  const [modalState, setModalState] = useState(initialState);

  const setModalParams = ({ isOpen, name }) => setModalState({ ...modalState, [name]: { isOpen } });

  const value = useMemo(() => ({ modalState, setModalParams }), [modalState, setModalParams]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ModalContext, ModalContextProvider };