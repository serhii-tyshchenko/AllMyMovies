/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { UIIconButton } from 'modules/ui';

import './MoviesListItemMenu.scss';

const MoviesListItemMenu = React.memo((props) => {
  const { onAddToWatchLaterClick, onAddToWatchedClick, onAddToFavouritesClick } = props;
  const [isMenuOpened, toggleMenu] = useState(false);
  function handleClick() {
    toggleMenu(!isMenuOpened);
  }

  return (
    <div className="movies-list-item-menu">
      <UIIconButton onClick={handleClick} icon="menu" extraClassName="movies-list-item-menu__btn" />
      {isMenuOpened && (
        <ul className="movies-list-item-menu__items">
          <li onClick={onAddToWatchLaterClick}>Add to Watch later</li>
          <li onClick={onAddToWatchedClick}>Add to Watched</li>
          <li onClick={onAddToFavouritesClick}>Add to Favourites</li>
        </ul>
      )}
    </div>
  );
});

export { MoviesListItemMenu };
