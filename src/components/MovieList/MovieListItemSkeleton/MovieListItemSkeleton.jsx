import './MovieListItemSkeleton.scss';

const MovieListItemSkeleton = () => (
  <li className="movie-list-item-skeleton">
    <div className="movie-list-item-skeleton__poster skeleton" />
    <div className="movie-list-item-skeleton__details">
      <span className="movie-list-item-skeleton__title skeleton" />
      <div className="movie-list-item-skeleton__year skeleton" />
    </div>
  </li>
);

export { MovieListItemSkeleton };
