/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem, removeItem, updateSettings } from 'store/actions';
import {
  getUserId, getMovieById, getSearchResultById, getUserLists,
} from 'store/selectors';
import { Localization } from 'contexts';
import { v4 as uuidv4 } from 'uuid';

import { UIDropdown } from 'components';
import { MovieMenuItem } from './MovieMenuItem';
import { MovieMenuForm } from './MovieMenuForm';

import './MovieMenu.scss';

const MovieMenu = ({ id }) => {
  const dispatch = useDispatch();
  const uid = useSelector(getUserId);
  const saved = useSelector((state) => getMovieById(state, id));
  const searched = useSelector((state) => getSearchResultById(state, id));
  const userLists = useSelector(getUserLists);
  const STR = useContext(Localization);
  const predefinedLists = [
    { id: 'favourites', title: STR.FAVOURITES },
    { id: 'watch-later', title: STR.WATCH_LATER },
    { id: 'watched', title: STR.WATCHED },
  ];
  const [isMenuOpened, setMenuOpened] = useState(false);
  const movie = saved || searched;
  const lists = movie?.lists ? movie.lists : [];

  function handleMenuItemClick(evt) {
    const list = evt.target.value;
    const updatedLists = lists.includes(list)
      ? lists.filter((item) => item !== list)
      : [...lists, list];
    if (updatedLists.length) {
      dispatch(updateItem(uid, { ...movie, id, lists: updatedLists }));
    } else {
      dispatch(removeItem(uid, id));
    }
    setMenuOpened(false);
  }
  function handleAddNewList(title) {
    const updatedUserLists = [...userLists, { id: uuidv4(), title }];
    dispatch(updateSettings(uid, { userLists: updatedUserLists }));
  }
  function handleMenuToggle() {
    setMenuOpened(!isMenuOpened);
  }

  return (
    <UIDropdown isOpened={isMenuOpened} onToggle={handleMenuToggle} extraClassName="movie-menu">
      <ul className="movie-menu__items">
        {[...predefinedLists, ...userLists].map((list) => (
          <MovieMenuItem
            key={list.id}
            list={list.id}
            checked={lists.includes(list.id)}
            title={list.title}
            onClick={handleMenuItemClick}
          />
        ))}
      </ul>
      <MovieMenuForm onSubmit={handleAddNewList} STR={STR} />
    </UIDropdown>
  );
};

export { MovieMenu };
