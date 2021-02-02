import './MovieModalSkeleton.scss';

const MovieModalSkeleton = () => (
  <div className="movie-modal-skeleton">
    <div className="movie-modal-skeleton__poster skeleton" />
    <div className="movie-modal-skeleton__details">
      <div className="movie-modal-skeleton__title skeleton" />
      <div className="movie-modal-skeleton__plot skeleton" />
      <div className="movie-modal-skeleton__info skeleton" />
    </div>
  </div>
);

export { MovieModalSkeleton };
