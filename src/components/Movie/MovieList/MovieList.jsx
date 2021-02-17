import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showModal, getMovieInfo, sortMovies } from 'store/actions';
import { getSearchResults, getMoviesByList } from 'store/selectors';
import { useLocation } from 'react-router-dom';
import { Localization } from 'contexts';
import { MovieModal, MovieListItem, MovieListSorter } from 'components';

import './MovieList.scss';

const MovieList = () => {
  const STR = useContext(Localization);
  const list = useLocation().pathname.slice(1);
  const dispatch = useDispatch();
  const [sortedBy, setSortedBy] = useState('');
  const data = list
    ? useSelector((state) => getMoviesByList(state, list))
    : useSelector(getSearchResults);
  const sortOptions = [
    { label: '— — —' },
    { value: 'title-asc', label: STR.SORT_BY_TITLE_A_Z },
    { value: 'title-dsc', label: STR.SORT_BY_TITLE_Z_A },
    { value: 'year-asc', label: STR.SORT_BY_YEAR_ASC },
    { value: 'year-dsc', label: STR.SORT_BY_YEAR_DSC },
  ];

  function handleShowInfoClick(id) {
    dispatch(getMovieInfo(id));
    dispatch(showModal({ modalName: 'fav' }));
  }
  function handleMoviesSort(evt) {
    const sortOption = evt.target.value;
    dispatch(sortMovies(sortOption));
    setSortedBy(sortOption);
  }

  return (
    <>
      {(data.length && list) ? (
        <MovieListSorter
          options={sortOptions}
          onChange={handleMoviesSort}
          title={STR.SORT_MOVIES}
          value={sortedBy}
        />
      ) : null}
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
