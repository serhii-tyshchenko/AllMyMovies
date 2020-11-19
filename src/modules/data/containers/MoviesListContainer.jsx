import { useContext, useCallback } from 'react';
import { Localization } from 'contexts';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem,
  addItem,
  hideModal,
} from 'store/actions';
import { UIModal } from 'modules/ui';
import { FavouritesListContainer } from 'modules/data';
import { MoviesList } from '../components';

const MoviesListContainer = () => {
  const dispatch = useDispatch();
  const {
    user: { uid }, modals,
  } = useSelector((state) => state);
  const data = useSelector((state) => state.data.filter((item) => item.inList === true));
  const STR = useContext(Localization);

  function handleSearchClick(title) {
    dispatch(addItem(uid, { id: uuidv4(), title, inList: true }));
  }
  function handleCompleteClick(evt) {
    const { id } = evt.target.closest('li');
    dispatch(updateItem(uid, { id, inList: false }));
  }
  function handleModalClose() {
    dispatch(hideModal({ modalName: 'fav', data: null }));
  }

  return (
    <>
      <MoviesList
        data={data}
        onCompleteClick={useCallback(handleCompleteClick, [dispatch, uid])}
        onSearchClick={useCallback(handleSearchClick, [dispatch, uid])}
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
