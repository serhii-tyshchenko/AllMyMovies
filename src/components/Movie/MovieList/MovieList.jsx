import { useSelector, useDispatch } from 'react-redux';
import { showModal, getMovieInfo } from 'store/actions';
import { getSearchResults, getMoviesByList } from 'store/selectors';
import { useLocation } from 'react-router-dom';
import { MovieModal, MovieListItem } from 'components';

import './MovieList.scss';

const MovieList = () => {
  const list = useLocation().pathname.slice(1);
  const dispatch = useDispatch();
  const data = list
    ? useSelector((state) => getMoviesByList(state, list))
    : useSelector(getSearchResults);

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
