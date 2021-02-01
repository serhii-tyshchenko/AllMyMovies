/* eslint-disable react/jsx-one-expression-per-line */
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  hideModal,
} from 'store/actions';
import { Localization } from 'contexts';
import { UIModal } from 'components';
import { MovieInfoSkeleton } from 'skeletons';
import PropTypes from 'prop-types';
import noImage from 'assets/images/no-image.jpg';

import './MovieModal.scss';

const MovieModal = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const isLoading = useSelector((state) => state.api.isLoading);
  const isVisible = useSelector((state) => state.modals.fav.isVisible);
  const {
    Title, Year, Poster: posterUrl, Runtime, Genre, Director, Country, Plot, imdbRating, Actors,
  } = useSelector((state) => state.movieInfo);
  const posterSrc = posterUrl !== 'N/A' ? posterUrl : noImage;
  function handleModalClose() {
    dispatch(hideModal('fav'));
  }

  return isVisible ? (
    <UIModal isVisible={isVisible} onClose={handleModalClose} title={STR.MOVIE_INFO} extraClassName="movie-modal">
      {!isLoading ? (
        <div className="movie-modal__content">
          <div className="movie-modal__poster">
            <img src={posterSrc} alt={Title} width="240" height="350" />
          </div>
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
      ) : <MovieInfoSkeleton />}
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
