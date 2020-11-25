import PropTypes from 'prop-types';
import { MoviesListItem } from './MoviesListItem';
import { MoviesListForm } from './MoviesListForm';

import './MoviesList.scss';

const MoviesList = (props) => {
  const {
    STR, data, onSearchClick, onAddToWatchLaterClick, onAddToWatchedClick, onAddToFavouritesClick,
  } = props;

  return (
    <section className="movies-list">
      <MoviesListForm onSubmit={onSearchClick} STR={STR} />
      <ul className="movies-list__list">
        {data.map((item) => (
          <MoviesListItem
            key={item.imdbID}
            data={item}
            onAddToWatchLaterClick={onAddToWatchLaterClick}
            onAddToWatchedClick={onAddToWatchedClick}
            onAddToFavouritesClick={onAddToFavouritesClick}
          />
        ))}
      </ul>
    </section>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onAddToWatchedClick: PropTypes.func.isRequired,
  onAddToWatchLaterClick: PropTypes.func.isRequired,
  onAddToFavouritesClick: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  STR: PropTypes.shape().isRequired,
};

export { MoviesList };
