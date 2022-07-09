import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMovieInfo, sortMovies, updateSettings, removeList,
} from 'store/actions';
import {
  getSearchResults, getMoviesByList, getUserLists, getUserId, getApiState,
} from 'store/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalization, useModalContext } from 'hooks';
import { MovieListItem, MovieListSorter, MovieListTitle } from 'components/molecules';
import { MovieListSkeleton } from 'components/skeletons';
import { getPredefinedLists, isEmpty, getSortOptions } from 'utils';
import { SORT_OPTIONS, MODAL_NAMES } from 'core/constants';

import './movieList.scss';

function MovieList() {
  const dic = useLocalization();
  const dispatch = useDispatch();
  const [sortedBy, setSortedBy] = useState(SORT_OPTIONS.NONE);
  const { showModal } = useModalContext();
  const sortOptions = useMemo(() => getSortOptions(dic), [dic]);
  const predefinedLists = useMemo(() => getPredefinedLists(dic), [dic]);
  const userLists = useSelector(getUserLists);
  const uid = useSelector(getUserId);
  const { isSearchMovieLoading } = useSelector(getApiState);
  const availableLists = [...predefinedLists, ...userLists];
  const navigate = useNavigate();
  const list = useLocation().pathname.slice(1);
  const isUserList = userLists.some((item) => item.id === list);
  const listTitle = availableLists.find((item) => item.id === list)?.title || dic.HOME;
  const data = list
    ? useSelector((state) => getMoviesByList(state, list))
    : useSelector(getSearchResults);

  const handleShowInfoClick = (id) => {
    dispatch(getMovieInfo(id));
    showModal(MODAL_NAMES.MOVIE_DETAILS);
  }
  const handleMoviesSort = (evt) => {
    const sortOption = evt.target.value;
    dispatch(sortMovies(sortOption));
    setSortedBy(sortOption);
  }

  const handleSaveChangesClick = (newTitle) => {
    const updatedUserLists = userLists.map((item) =>
      item.id === list ? ({ ...item, title: newTitle }) : item
    );
    dispatch(updateSettings(uid, { userLists: updatedUserLists }));
  }

  const handleDeleteListClick = () => {
    const updatedUserLists = userLists.filter((item) => item.id !== list);
    dispatch(updateSettings(uid, { userLists: updatedUserLists }));
    dispatch(removeList(uid, list));
    navigate('/');
  }

  const shouldShowListSorter = useMemo(() => !!list && !isEmpty(data), [list]);

  return (
    <section className="movie-list-container">
      <MovieListTitle
        title={listTitle}
        onSaveClick={handleSaveChangesClick}
        onDeleteClick={handleDeleteListClick}
        isUserList={isUserList}
        dic={dic}
      />
      {shouldShowListSorter && (
        <MovieListSorter
          options={sortOptions}
          onChange={handleMoviesSort}
          title={dic.SORT_MOVIES}
          value={sortedBy}
        />
      )}
      <ul className="movie-list">
        {isSearchMovieLoading
          ? <MovieListSkeleton />
          : data.map((item) => (
            <MovieListItem
              key={item.imdbID}
              data={item}
              onShowInfoClick={handleShowInfoClick}
            />
          ))}
      </ul>
    </section>
  );
}

export { MovieList };
