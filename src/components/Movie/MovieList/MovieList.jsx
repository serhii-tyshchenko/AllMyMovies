import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showModal, getMovieInfo, sortMovies, updateSettings, removeList,
} from 'store/actions';
import {
  getSearchResults, getMoviesByList, getUserLists, getUserId,
} from 'store/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalization } from 'hooks';
import {
  MovieModal, MovieListItem, MovieListSorter,
} from 'components';
import { getPredefinedLists, isEmpty, getSortOptions } from 'utils';
import { SORT_OPTIONS } from 'constants';

import { MovieListTitle } from './MovieListTitle';


function MovieList() {
  const dic = useLocalization();
  const dispatch = useDispatch();
  const [sortedBy, setSortedBy] = useState(SORT_OPTIONS.NONE);
  const sortOptions = useMemo(() => getSortOptions(dic), [dic]);
  const predefinedLists = useMemo(() => getPredefinedLists(dic), [dic]);
  const userLists = useSelector(getUserLists);
  const uid = useSelector(getUserId);
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
    dispatch(showModal({ modalName: 'fav' }));
  }
  const handleMoviesSort = (evt) => {
    const sortOption = evt.target.value;
    dispatch(sortMovies(sortOption));
    setSortedBy(sortOption);
  }

  const handleSaveChangesClick = (newTitle) => {
    const updatedUserLists = userLists.map((item) => {
      if (item.id === list) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    dispatch(updateSettings(uid, { userLists: updatedUserLists }));
  }

  const handleDeleteListClick = () => {
    const updatedUserLists = userLists.filter((item) => item.id !== list);
    dispatch(updateSettings(uid, { userLists: updatedUserLists }));
    dispatch(removeList(uid, list));
    navigate('/');
  }

  return (
    <section className="movie-list-container">
      <MovieListTitle
        title={listTitle}
        onSaveClick={handleSaveChangesClick}
        onDeleteClick={handleDeleteListClick}
        isUserList={isUserList}
        dic={dic}
      />

      {!isEmpty(data) && (
        <MovieListSorter
          options={sortOptions}
          onChange={handleMoviesSort}
          title={dic.SORT_MOVIES}
          value={sortedBy}
        />
      )}
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
    </section>
  );
}

export { MovieList };
