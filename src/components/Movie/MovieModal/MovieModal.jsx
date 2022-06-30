/* eslint-disable react/jsx-one-expression-per-line */

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from 'store/actions';
import { getIsFavModalVisible, getMovieInfo } from 'store/selectors';
import { useLocalization } from 'hooks';
import { UIModal, MovieMenu } from 'components';
import { MovieModalSkeleton } from './MovieModalSkeleton';

import './MovieModal.scss';

function MovieModal() {
  const isVisible = useSelector(getIsFavModalVisible);
  const {
    isLoading, data: {
      title, year, poster, runtime, genre, director, country, plot, imdbRating, actors, imdbID,
    },
  } = useSelector(getMovieInfo);
  const dispatch = useDispatch();
  const dic = useLocalization();

  const handleModalClose = () => {
    dispatch(hideModal('fav'));
  }

  return isVisible ? (
    <UIModal isVisible={isVisible} onClose={handleModalClose} title={dic.MOVIE_INFO} extraClassName="movie-modal">
      {!isLoading ? (
        <div className="movie-modal__content">
          <div className="movie-modal__poster">
            <img src={poster} alt="Poster" width="240" height="350" />
            <MovieMenu id={imdbID} />
          </div>
          <div className="movie-modal__details">
            <h4 className="movie-modal__title">{title}</h4>
            <p className="movie-modal__plot">{plot}</p>
            <ul className="movie-modal__info">
              <li><strong>{dic.GENRE}:</strong>{genre}</li>
              <li><strong>{dic.CAST}:</strong>{actors}</li>
              <li><strong>{dic.DIRECTOR}:</strong>{director}</li>
              <li><strong>{dic.COUNTRY}:</strong>{country}</li>
              <li><strong>{dic.DURATION}:</strong>{runtime}</li>
              <li><strong>{dic.RELEASE}:</strong>{year}</li>
              <li><strong>{dic.RATING}:</strong>{imdbRating}</li>
            </ul>
          </div>
        </div>
      ) : <MovieModalSkeleton />}
    </UIModal>
  ) : null;
}

MovieModal.defaultProps = {
  dic: {
    MOVIE_INFO: 'Movie info',
  },
};

MovieModal.propTypes = {
  dic: PropTypes.shape({
    MOVIE_INFO: PropTypes.string,
  }),
};

export { MovieModal };
