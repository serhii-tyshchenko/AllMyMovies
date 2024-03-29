import { useContext } from 'react';
import { ModalContext } from 'contexts/modal';
import { AuthModal, MovieModal } from 'components/molecules';
import { MODAL_NAMES } from 'core/constants';

function ModalService() {

    const { modalState } = useContext(ModalContext);

    return (
        <>
            <AuthModal isOpen={modalState[MODAL_NAMES.AUTH].isOpen} />
            <MovieModal isOpen={modalState[MODAL_NAMES.MOVIE_DETAILS].isOpen} />
        </>
    )
}

export default ModalService;
