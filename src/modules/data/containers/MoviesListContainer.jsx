/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useCallback } from 'react';
import { Localization } from 'contexts';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem,
  removeItem,
  hideModal,
} from 'store/actions';
import { UIModal } from 'modules/ui';
import {
  useParams, useLocation,
} from 'react-router-dom';
import { MoviesList } from '../components';

const MoviesListContainer = () => {
  const pathname = useLocation().pathname.slice(1);
  const dispatch = useDispatch();
  const {
    user: { uid }, modals,
  } = useSelector((state) => state);
  const data = pathname
    ? useSelector((state) => state.data).filter((item) => item.lists.includes(pathname))
    : useSelector((state) => state.searchResults);
  const STR = useContext(Localization);

  function handleAddToListClick(id, lists) {
    const item = data.find((el) => el.imdbID === id);
    if (lists.length) {
      dispatch(updateItem(uid, { ...item, id, lists }));
    } else {
      dispatch(removeItem(uid, id));
    }
  }
  function handleModalClose() {
    dispatch(hideModal({ modalName: 'fav', data: null }));
  }

  return (
    <>
      <MoviesList
        data={data}
        onAddToListClick={handleAddToListClick}
      />
      <UIModal
        isVisible={modals.fav.isVisible}
        onClose={handleModalClose}
        title={STR.FAVORITES_LIST}
      />
    </>
  );
};

export { MoviesListContainer };
