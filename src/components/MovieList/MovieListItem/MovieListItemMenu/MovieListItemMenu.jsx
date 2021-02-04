/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { UIIconButton } from 'components';

import './MovieListItemMenu.scss';

const MovieListItemMenu = React.memo((props) => {
  const { onAddToListClick, data } = props;
  const [isMenuOpened, toggleMenu] = useState(false);
  const [lists, updateLists] = useState(data || []);

  function handleMenuClick() {
    toggleMenu(!isMenuOpened);
  }
  function handleListCheckboxClick(evt) {
    const list = evt.target.value;
    if (lists.includes(list)) {
      updateLists(lists.filter((item) => item !== list));
      onAddToListClick(lists.filter((item) => item !== list));
    } else {
      updateLists([...lists, list]);
      onAddToListClick([...lists, list]);
    }
    toggleMenu(!isMenuOpened);
  }

  return (
    <div className="movie-list-item-menu">
      <UIIconButton onClick={handleMenuClick} icon="menu" extraClassName="movie-list-item-menu__toggler" />
      {isMenuOpened && (
        <ul className="movie-list-item-menu__items">
          <li className="movie-list-item-menu__item">
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
          <li className="movie-list-item-menu__item">
            <label>
              <input type="checkbox" value="watched" onChange={handleListCheckboxClick} checked={lists.includes('watched')} />
              Watched
            </label>
          </li>
          <li className="movie-list-item-menu__item">
            <label>
              <input type="checkbox" value="favourites" onChange={handleListCheckboxClick} checked={lists.includes('favourites')} />
              Favourites
            </label>
          </li>
        </ul>
      )}
    </div>
  );
});

export { MovieListItemMenu };
