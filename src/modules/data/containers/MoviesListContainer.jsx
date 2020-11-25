/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useCallback } from 'react';
import { Localization } from 'contexts';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem,
  addItem,
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
  function handleAddToWatchLaterClick(evt) {
    const { id } = evt.target.closest('.movies-list-item');
    const item = data.find((el) => el.imdbID === id);
    dispatch(addItem(uid, { ...item, id, inWatchLater: true }));
  }
  function handleAddToWatchedClick(evt) {
    const { id } = evt.target.closest('.movies-list-item');
    const item = data.find((el) => el.imdbID === id);
    dispatch(addItem(uid, { ...item, id, inWatched: true }));
  }
  function handleAddToFavouritesClick(evt) {
    const { id } = evt.target.closest('.movies-list-item');
    const item = data.find((el) => el.imdbID === id);
    dispatch(addItem(uid, { ...item, id, inFavourites: true }));
  }
  function handleModalClose() {
    dispatch(hideModal({ modalName: 'fav', data: null }));
  }

  return (
    <>
      <MoviesList
        data={data}
        onAddToWatchLaterClick={handleAddToWatchLaterClick}
        onAddToWatchedClick={handleAddToWatchedClick}
        onAddToFavouritesClick={handleAddToFavouritesClick}
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
