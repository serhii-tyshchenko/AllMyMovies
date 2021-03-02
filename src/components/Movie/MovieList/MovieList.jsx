import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showModal, getMovieInfo, sortMovies, updateSettings, removeList,
} from 'store/actions';
import {
  getSearchResults, getMoviesByList, getUserLists, getUserId,
} from 'store/selectors';
import { useLocation, useHistory } from 'react-router-dom';
import { Localization } from 'contexts';
import {
  MovieModal, MovieListItem, MovieListSorter,
} from 'components';
import { MovieListTitle } from './MovieListTitle';

import './MovieList.scss';

const MovieList = () => {
  const STR = useContext(Localization);
  const dispatch = useDispatch();
  const [sortedBy, setSortedBy] = useState('none');
  const sortOptions = [
    { value: 'none', label: '— — —', disabled: true },
    { value: 'title-asc', label: STR.SORT_BY_TITLE_A_Z },
    { value: 'title-dsc', label: STR.SORT_BY_TITLE_Z_A },
    { value: 'year-asc', label: STR.SORT_BY_YEAR_ASC },
    { value: 'year-dsc', label: STR.SORT_BY_YEAR_DSC },
  ];
  const predefinedLists = [
    { id: 'favourites', title: STR.FAVOURITES, icon: 'heart' },
    { id: 'watched', title: STR.WATCHED, icon: 'history' },
    { id: 'watch-later', title: STR.WATCH_LATER, icon: 'clock' }];
  const userLists = useSelector(getUserLists);
  const uid = useSelector(getUserId);
  const availableLists = [...predefinedLists, ...userLists];
  const history = useHistory();
  const list = useLocation().pathname.slice(1);
  const isUserList = userLists.some((item) => item.id === list);
  const listTitle = availableLists.find((item) => item.id === list)?.title || STR.HOME;
  const data = list
    ? useSelector((state) => getMoviesByList(state, list))
    : useSelector(getSearchResults);

  function handleShowInfoClick(id) {
    dispatch(getMovieInfo(id));
    dispatch(showModal({ modalName: 'fav' }));
  }
  function handleMoviesSort(evt) {
    const sortOption = evt.target.value;
    dispatch(sortMovies(sortOption));
    setSortedBy(sortOption);
  }

  function handleSaveChangesClick(newTitle) {
    const updatedUserLists = userLists.map((item) => {
      if (item.id === list) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    dispatch(updateSettings(uid, { userLists: updatedUserLists }));
  }

  function handleDeleteListClick() {
    const updatedUserLists = userLists.filter((item) => item.id !== list);
    dispatch(updateSettings(uid, { userLists: updatedUserLists }));
    dispatch(removeList(uid, list));
    history.push('/');
  }

  return (
    <section className="movie-list-container">
      <MovieListTitle
        title={listTitle}
        onSaveClick={handleSaveChangesClick}
        onDeleteClick={handleDeleteListClick}
        isUserList={isUserList}
        STR={STR}
      />

      {(data.length > 0 && list) && (
        <MovieListSorter
          options={sortOptions}
          onChange={handleMoviesSort}
          title={STR.SORT_MOVIES}
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
};

export { MovieList };
