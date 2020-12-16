import PropTypes from 'prop-types';
import { MoviesListItem } from './MoviesListItem';

import './MoviesList.scss';

const MoviesList = (props) => {
  const {
    data, onAddToListClick, onShowInfoClick,
  } = props;

  return (
    <section className="movies-list">
      <ul className="movies-list__list">
        {data.map((item) => (
          <MoviesListItem
            key={item.imdbID}
            data={item}
            onAddToListClick={onAddToListClick}
            onShowInfoClick={onShowInfoClick}
          />
        ))}
      </ul>
    </section>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onAddToListClick: PropTypes.func.isRequired,
  onShowInfoClick: PropTypes.func.isRequired,
};

export { MoviesList };
