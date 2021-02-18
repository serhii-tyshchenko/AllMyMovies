import PropTypes from 'prop-types';
import { UISelect } from 'components';

import './MovieListSorter.scss';

const MovieListSorter = (props) => {
  const {
    onChange, value, options, title,
  } = props;

  return (
    <div className="movie-list-sorter">
      <span className="movie-list-sorter__label">
        {title}
      </span>
      <UISelect
        options={options}
        onChange={onChange}
        value={value}
        title={title}
        extraClassName="movie-list-sorter__select"
      />
    </div>
  );
};

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
