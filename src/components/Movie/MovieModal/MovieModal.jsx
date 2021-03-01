/* eslint-disable react/jsx-one-expression-per-line */

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from 'store/actions';
import { getIsFavModalVisible, getMovieInfo } from 'store/selectors';
import { Localization } from 'contexts';
import { UIModal, MovieMenu } from 'components';
import { MovieModalSkeleton } from './MovieModalSkeleton';

import './MovieModal.scss';

const MovieModal = () => {
  const isVisible = useSelector(getIsFavModalVisible);
  const {
    isLoading, data: {
      title, year, poster, runtime, genre, director, country, plot, imdbRating, actors, imdbID,
    },
  } = useSelector(getMovieInfo);
  const dispatch = useDispatch();
  const STR = useContext(Localization);

  function handleModalClose() {
    dispatch(hideModal('fav'));
  }

  return isVisible ? (
    <UIModal isVisible={isVisible} onClose={handleModalClose} title={STR.MOVIE_INFO} extraClassName="movie-modal">
      {!isLoading ? (
        <div className="movie-modal__content">
          <div className="movie-modal__poster">
            <img src={poster} alt={title} width="240" height="350" />
            <MovieMenu id={imdbID} />
          </div>
          <div className="movie-modal__details">
            <h4 className="movie-modal__title">{title}</h4>
            <p className="movie-modal__plot">{plot}</p>
            <ul className="movie-modal__info">
              <li><strong>{STR.GENRE}:</strong>{genre}</li>
              <li><strong>{STR.CAST}:</strong>{actors}</li>
              <li><strong>{STR.DIRECTOR}:</strong>{director}</li>
              <li><strong>{STR.COUNTRY}:</strong>{country}</li>
              <li><strong>{STR.DURATION}:</strong>{runtime}</li>
              <li><strong>{STR.RELEASE}:</strong>{year}</li>
              <li><strong>{STR.RATING}:</strong>{imdbRating}</li>
            </ul>
          </div>
        </div>
      ) : <MovieModalSkeleton />}
    </UIModal>
  ) : null;
};

MovieModal.defaultProps = {
  STR: {
    MOVIE_INFO: 'Movie info',
  },
};

MovieModal.propTypes = {
  STR: PropTypes.shape({
    MOVIE_INFO: PropTypes.string,
  }),
};

export { MovieModal };
