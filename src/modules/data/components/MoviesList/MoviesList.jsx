import PropTypes from 'prop-types';
import { MoviesListItem } from './MoviesListItem';
import { MoviesListForm } from './MoviesListForm';

import './MoviesList.scss';

const MoviesList = (props) => {
  const {
    data, onCompleteClick, onSearchClick, STR,
  } = props;

  return (
    <section className="movies-list">
      <MoviesListForm onSubmit={onSearchClick} STR={STR} />
      <ul className="movies-list__list">
        {data.map((item) => (
          <MoviesListItem
            key={item.id}
            data={item}
            onCompleteClick={onCompleteClick}
          />
        ))}
      </ul>
    </section>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onCompleteClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  STR: PropTypes.shape().isRequired,
};

export { MoviesList };
