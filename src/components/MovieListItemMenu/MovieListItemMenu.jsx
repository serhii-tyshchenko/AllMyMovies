/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem,
  removeItem,
  hideModal,
} from 'store/actions';
import { UIIconButton } from 'components';

import './MovieListItemMenu.scss';

const MovieListItemMenu = ({ id }) => {
  const dispatch = useDispatch();
  const {
    uid,
  } = useSelector((state) => state.user);
  const currMovie = useSelector((state) => state.data).find((item) => item.id === id);
  const { lists } = currMovie;

  const [isMenuOpened, toggleMenu] = useState(false);

  function handleAddToListClick(list) {
    console.log(id, currMovie, list);
    if (list.length) {
      dispatch(updateItem(uid, { ...currMovie, id, lists: list }));
    } else {
      dispatch(removeItem(uid, id));
      dispatch(hideModal('fav'));
    }
  }
  function handleMenuClick() {
    toggleMenu(!isMenuOpened);
  }
  function handleListCheckboxClick(evt) {
    const list = evt.target.value;
    if (lists.includes(list)) {
      handleAddToListClick(lists.filter((item) => item !== list));
    } else {
      handleAddToListClick([...lists, list]);
    }
    toggleMenu(!isMenuOpened);
  }

  return (
    <div className="movie-list-item-menu">
      <UIIconButton onClick={handleMenuClick} icon="menu" extraClassName="movie-list-item-menu__btn" />
      {isMenuOpened && (
        <ul className="movie-list-item-menu__items">
          <li>
            <label>
              <input
                type="checkbox"
                value="watch-later"
                onChange={handleListCheckboxClick}
                checked={lists.includes('watch-later')}
              />
              Watch later
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" value="watched" onChange={handleListCheckboxClick} checked={lists.includes('watched')} />
              Watched
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" value="favourites" onChange={handleListCheckboxClick} checked={lists.includes('favourites')} />
              Favourites
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};

MovieListItemMenu.propTypes = {
  id: PropTypes.string.isRequired,
};

export { MovieListItemMenu };
