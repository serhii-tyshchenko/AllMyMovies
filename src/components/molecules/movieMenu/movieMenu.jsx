/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { updateItem, removeItem, updateSettings } from 'store/actions';
import {
  getUserId, getMovieById, getSearchResultById, getUserLists,
} from 'store/selectors';
import { useLocalization, useToggle } from 'hooks';

import { Dropdown } from 'components/ui';
import { getPredefinedLists } from 'utils';
import { MovieMenuItem } from './movieMenuItem';
import { MovieMenuForm } from './movieMenuForm';

import './movieMenu.scss';

const NAME_SPACE = 'movie-menu';

function MovieMenu({ id }) {
  const dic = useLocalization();
  const dispatch = useDispatch();
  const uid = useSelector(getUserId);
  const saved = useSelector((state) => getMovieById(state, id));
  const searched = useSelector((state) => getSearchResultById(state, id));
  const userLists = useSelector(getUserLists);

  const [isMenuOpened, toggleMenu] = useToggle();

  const predefinedLists = useMemo(() => getPredefinedLists(dic), [dic]);
  const menuItems = useMemo(() => [...predefinedLists, ...userLists], [predefinedLists, userLists]);

  const movie = saved || searched;
  const lists = movie?.lists ? movie.lists : [];


  const handleMenuItemClick = (evt) => {
    const list = evt.target.value;
    const updatedLists = lists.includes(list)
      ? lists.filter((item) => item !== list)
      : [...lists, list];
    if (updatedLists.length) {
      dispatch(updateItem(uid, { ...movie, id, lists: updatedLists }));
    } else {
      dispatch(removeItem(uid, id));
    }
    toggleMenu();
  }
  const handleAddNewList = (title) => dispatch(updateSettings(uid, { userLists: [...userLists, { id: uuidv4(), title }] }));

  return (
    <Dropdown isOpened={isMenuOpened} onToggle={toggleMenu} extraClassName={NAME_SPACE}>
      <ul className={`${NAME_SPACE}__items`}>
        {menuItems.map((list) => (
          <MovieMenuItem
            key={list.id}
            list={list.id}
            checked={lists.includes(list.id)}
            title={list.title}
            onClick={handleMenuItemClick}
          />
        ))}
      </ul>
      <MovieMenuForm onSubmit={handleAddNewList} dic={dic} />
    </Dropdown>
  );
}

export { MovieMenu };
