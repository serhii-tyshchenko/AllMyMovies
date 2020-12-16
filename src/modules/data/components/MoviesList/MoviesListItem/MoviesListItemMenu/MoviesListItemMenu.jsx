/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { UIIconButton } from 'modules/ui';

import './MoviesListItemMenu.scss';

const MoviesListItemMenu = React.memo((props) => {
  const { onAddToListClick, data } = props;
  const [isMenuOpened, toggleMenu] = useState(false);
  const [lists, updateLists] = useState(data || []);
  // useEffect(() => onAddToListClick([...lists]), [lists]);

  function handleMenuClick() {
    toggleMenu(!isMenuOpened);
  }
  function handleListCheckboxClick(evt) {
    const list = evt.target.name;
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
    <div className="movies-list-item-menu">
      <UIIconButton onClick={handleMenuClick} icon="menu" extraClassName="movies-list-item-menu__btn" />
      {isMenuOpened && (
        <ul className="movies-list-item-menu__items">
          <li>
            <label>
              <input
                type="checkbox"
                name="in-watch-later"
                onChange={handleListCheckboxClick}
                checked={lists.includes('in-watch-later')}
              />
              Watch later
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="in-watched" onChange={handleListCheckboxClick} checked={lists.includes('in-watched')} />
              Watched
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="in-favourites" onChange={handleListCheckboxClick} checked={lists.includes('in-favourites')} />
              Favourites
            </label>
          </li>
        </ul>
      )}
    </div>
  );
});

export { MoviesListItemMenu };
