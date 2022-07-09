/* eslint-disable react/prop-types */
import { MovieModalSkeleton } from 'components/skeletons';
import { Modal } from 'components/ui';

import { MovieMenu } from '../movieMenu';

import useMovieModal from './useMovieModal';

import NAME_SPACE from './constants';

import './movieModal.scss';

function MovieModal({ isOpen }) {

  const {
    isGetMovieInfoLoading,
    data,
    handleModalClose,
    dic,
  } = useMovieModal();

  const {
    title,
    year,
    poster,
    runtime,
    genre,
    director,
    country,
    plot,
    imdbRating,
    actors,
    imdbID,
  } = data;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      title={dic.MOVIE_INFO}
      extraClassName={NAME_SPACE}
      closeBtnTitle={dic.CLOSE}
    >
      {isGetMovieInfoLoading
        ? <MovieModalSkeleton />
        : (
          <div className={`${NAME_SPACE}__content`}>
            <div className={`${NAME_SPACE}__poster`}>
              <img src={poster} alt="Poster" width="240" height="350" />
              <MovieMenu id={imdbID} />
            </div>
            <div className={`${NAME_SPACE}__details`}>
              <h4 className={`${NAME_SPACE}__title`}>{title}</h4>
              <p className={`${NAME_SPACE}__plot`}>{plot}</p>
              <ul className={`${NAME_SPACE}__info`}>
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
        )}
    </Modal>
  );
}

export { MovieModal };
