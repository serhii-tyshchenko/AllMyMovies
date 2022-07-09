import PropTypes from 'prop-types';
import { Select } from 'components/ui';

import './movieListSorter.scss';

function MovieListSorter(props) {
  const {
    onChange, value, options, title,
  } = props;

  return (
    <div className="movie-list-sorter">
      <span className="movie-list-sorter__label">{title}:</span>
      <Select
        options={options}
        onChange={onChange}
        value={value}
        title={title}
        extraClassName="movie-list-sorter__select"
      />
    </div>
  );
}

MovieListSorter.defaultProps = {
  title: '',
};

MovieListSorter.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export { MovieListSorter };
