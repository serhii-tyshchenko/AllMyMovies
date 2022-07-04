import { useContext } from 'react';
import { ModalContext } from 'contexts/modal';
import { AuthModal, MovieModal } from 'components';
import { MODAL_NAMES } from 'constants';

function ModalService() {

    const { modalState } = useContext(ModalContext);

    return (
        <>
            {modalState[MODAL_NAMES.AUTH].isOpen ? <AuthModal /> : null}
            {modalState[MODAL_NAMES.MOVIE_DETAILS].isOpen ? <MovieModal /> : null}
        </>
    )
}

export default ModalService;
