/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import noimage from 'assets/images/no-image.jpg';
import { MovieMenu } from 'components';

import './MovieListItem.scss';

const MovieListItem = React.memo((props) => {
  const {
    data: {
      Title: title, Poster: posterUrl, Year: year, imdbID: id,
    },
    onShowInfoClick,
  } = props;
  function handleShowInfoClick() {
    onShowInfoClick(id);
  }
  const posterURL = posterUrl !== 'N/A' ? posterUrl : noimage;

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
