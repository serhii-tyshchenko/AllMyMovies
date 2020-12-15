/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useCallback } from 'react';
import { Localization } from 'contexts';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem,
  addItem,
  removeItem,
  hideModal,
  searchMovie,
} from 'store/actions';
import { UIModal } from 'modules/ui';
import { FavouritesListContainer } from 'modules/data';
import { MoviesList } from '../components';

const MoviesListContainer = () => {
  const dispatch = useDispatch();
  const {
    user: { uid }, modals,
  } = useSelector((state) => state);
  const data = useSelector((state) => state.searchResults);
  const STR = useContext(Localization);

  function handleSearchClick(query) {
    dispatch(searchMovie(query));
  }
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
        onSearchClick={useCallback(handleSearchClick, [dispatch])}
        STR={STR}
      />
      <UIModal
        isVisible={modals.fav.isVisible}
        onClose={handleModalClose}
        title={STR.FAVORITES_LIST}
      >
        <FavouritesListContainer />
      </UIModal>
    </>
  );
};

export { MoviesListContainer };
