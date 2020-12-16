/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { MoviesListItemMenu } from './MoviesListItemMenu';

import './MoviesListItem.scss';

const MoviesListItem = React.memo((props) => {
  const {
    data: {
      Title: title, Poster: posterUrl, Year: year, Type: type, imdbID: id, lists,
    },
    onAddToListClick,
  } = props;
  function handleAddToListClick(data) {
    onAddToListClick(id, data);
  }

  return (
    <li id={id} className="movies-list-item">
      <MoviesListItemMenu
        data={lists}
        onAddToListClick={handleAddToListClick}
      />
      <img src={posterUrl} alt={title} width="320" height="480" className="movies-list-item__poster" />
      <div className="movies-list-item__details">
        <span className="movies-list-item__title">{title}</span>
        <span className="movies-list-item__year">{year}</span>
      </div>
    </li>
  );
});

MoviesListItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export { MoviesListItem };
