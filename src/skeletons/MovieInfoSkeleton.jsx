import './MovieInfoSkeleton.scss';

const MovieInfoSkeleton = () => (
  <div className="movie-info-skeleton">
    <div className="movie-info-skeleton__poster skeleton" />
    <div className="movie-info-skeleton__details">
      <div className="movie-info-skeleton__title skeleton" />
      <div className="movie-info-skeleton__plot skeleton" />
      <div className="movie-info-skeleton__info skeleton" />
    </div>
  </div>
);

export { MovieInfoSkeleton };
