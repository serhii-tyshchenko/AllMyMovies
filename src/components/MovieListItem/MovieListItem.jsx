/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import noImage from 'assets/images/no-image.svg';
import { MovieMenu } from 'components';

import './MovieListItem.scss';

const MovieListItem = React.memo((props) => {
  const {
    data: {
      Title: title, Poster: posterUrl, Year: year, imdbID: id,
    },
    onShowInfoClick,
  } = props;
  function handleError(e) {
    e.target.onerror = null;
    e.target.src = noImage;
  }
  function handleShowInfoClick() {
    onShowInfoClick(id);
  }
  const posterURL = (posterUrl && posterUrl !== 'N/A') ? posterUrl : noImage;

  return (
    <li id={id} className="movie-list-item">
      <MovieMenu id={id} />
      <img
        src={posterURL}
        alt={title}
        width="320"
        height="480"
        className="movie-list-item__poster"
        onClick={handleShowInfoClick}
        loading="lazy"
        onError={handleError}
      />
      <div className="movie-list-item__details">
        <span className="movie-list-item__title">{title}</span>
        <span className="movie-list-item__year">{year}</span>
      </div>
    </li>
  );
});

MovieListItem.propTypes = {
  data: PropTypes.shape().isRequired,
  onShowInfoClick: PropTypes.func.isRequired,
};

export { MovieListItem };
