/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { MovieMenu } from 'components';

const MovieListItem = React.memo((props) => {
  const {
    data: {
      title, poster, year, imdbID,
    },
    onShowInfoClick,
  } = props;

  const handleShowInfoClick = () => onShowInfoClick(imdbID);

  return (
    <li id={imdbID} className="movie-list-item">
      <MovieMenu id={imdbID} />
      <img
        src={poster}
        alt="Poster"
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
