import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem,
  removeItem,
  showModal,
  getMovieInfo,
} from 'store/actions';
import { useLocation } from 'react-router-dom';
import { MovieModal } from './MovieModal';
import { MovieListItem } from './MovieListItem';

import './MovieList.scss';

const MovieList = () => {
  const pathname = useLocation().pathname.slice(1);
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user.uid);
  const data = pathname
    ? useSelector((state) => state.data).filter((item) => item.lists.includes(pathname))
    : useSelector((state) => state.searchResults);

  function handleAddToListClick(id, lists) {
    const item = data.find((el) => el.imdbID === id);
    if (lists.length) {
      dispatch(updateItem(uid, { ...item, id, lists }));
    } else {
      dispatch(removeItem(uid, id));
    }
  }
  function handleShowInfoClick(id) {
    dispatch(getMovieInfo(id));
    dispatch(showModal({ modalName: 'fav' }));
  }

  return (
    <>
      <ul className="movie-list">
        {data.map((item) => (
          <MovieListItem
            key={item.imdbID}
            data={item}
            onAddToListClick={handleAddToListClick}
            onShowInfoClick={handleShowInfoClick}
          />
        ))}
      </ul>
      <MovieModal />
    </>
  );
};

export { MovieList };
