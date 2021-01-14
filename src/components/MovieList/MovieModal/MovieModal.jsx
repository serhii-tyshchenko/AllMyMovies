/* eslint-disable react/jsx-one-expression-per-line */
import { useContext } from 'react';
import { Localization } from 'contexts';
import PropTypes from 'prop-types';
import { UIModal } from 'components';
import noImage from 'assets/images/no-image.jpg';

import './MovieModal.scss';

const MovieModal = (props) => {
  const {
    data: {
      Title, Year, Poster: posterUrl, Runtime, Genre, Director, Country, Plot, imdbRating, Actors,
    },
    isVisible,
    onClose,
  } = props;
  const STR = useContext(Localization);

  return (
    <UIModal isVisible={isVisible} onClose={onClose} title={STR.MOVIE_INFO} extraClassName="movie-modal">
      <div className="movie-modal__content">
        <img src={posterUrl !== 'N/A' ? posterUrl : noImage} alt={Title} className="movie-modal__poster" />
        <div className="movie-modal__details">
          <h4 className="movie-modal__title">{Title}</h4>
          <p className="movie-modal__plot">{Plot}</p>
          <ul className="movie-modal__info">
            <li><strong>{STR.GENRE}:</strong>{Genre}</li>
            <li><strong>{STR.CAST}:</strong>{Actors}</li>
            <li><strong>{STR.DIRECTOR}:</strong>{Director}</li>
            <li><strong>{STR.COUNTRY}:</strong>{Country}</li>
            <li><strong>{STR.DURATION}:</strong>{Runtime}</li>
            <li><strong>{STR.RELEASE}:</strong>{Year}</li>
            <li><strong>{STR.RATING}:</strong>{imdbRating}</li>
          </ul>
        </div>
      </div>
    </UIModal>
  );
};

MovieModal.defaultProps = {
  STR: {
    MOVIE_INFO: 'Movie info',
  },
};

MovieModal.propTypes = {
  data: PropTypes.shape().isRequired,
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  STR: PropTypes.shape({
    MOVIE_INFO: PropTypes.string,
  }),
};

export { MovieModal };
