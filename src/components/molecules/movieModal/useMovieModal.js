import { useSelector } from 'react-redux';
import { getMovieInfo, getApiState } from 'store/selectors';
import { MODAL_NAMES } from 'core/constants';
import { useModalContext, useLocalization } from 'hooks';

const useMovieModal = () => {
  const dic = useLocalization();
  const data = useSelector(getMovieInfo);
  const { isGetMovieInfoLoading } = useSelector(getApiState);
  const { hideModal } = useModalContext();

  const handleModalClose = () => hideModal(MODAL_NAMES.MOVIE_DETAILS);
  return {
    data,
    isGetMovieInfoLoading,
    handleModalClose,
    dic,
  };
};

export default useMovieModal;
