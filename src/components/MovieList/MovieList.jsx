import { useSelector, useDispatch } from 'react-redux';
import {
  showModal,
  getMovieInfo,
} from 'store/actions';
import { useLocation } from 'react-router-dom';
import { MovieModal, MovieListItem } from 'components';

import './MovieList.scss';

const MovieList = () => {
  const pathname = useLocation().pathname.slice(1);
  const dispatch = useDispatch();
  const data = pathname
    ? useSelector((state) => state.data).filter((item) => item.lists.includes(pathname))
    : useSelector((state) => state.searchResults);

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
            onShowInfoClick={handleShowInfoClick}
          />
        ))}
      </ul>
      <MovieModal />
    </>
  );
};

export { MovieList };
