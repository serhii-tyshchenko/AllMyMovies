import PropTypes from 'prop-types';
import { MoviesListItem } from './MoviesListItem';

import './MoviesList.scss';

const MoviesList = (props) => {
  const {
    data, onAddToListClick,
  } = props;

  return (
    <section className="movies-list">
      <ul className="movies-list__list">
        {data.map((item) => (
          <MoviesListItem
            key={item.imdbID}
            data={item}
            onAddToListClick={onAddToListClick}
          />
        ))}
      </ul>
    </section>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onAddToListClick: PropTypes.func.isRequired,
};

export { MoviesList };
