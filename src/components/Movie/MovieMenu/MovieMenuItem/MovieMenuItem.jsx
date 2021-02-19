import PropTypes from 'prop-types';

import './MovieMenuItem.scss';

const MovieMenuItem = ({
  list, onChange, checked, title,
}) => (
  <li className="movie-menu-item">
    <label htmlFor={list}>
      <input type="checkbox" id={list} value={list} onChange={onChange} checked={checked} />
      {title}
    </label>
  </li>
);

MovieMenuItem.defaultProps = {
  list: '',
  onChange: null,
  checked: false,
  title: '',
};

MovieMenuItem.propTypes = {
  list: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  title: PropTypes.string,
};

export { MovieMenuItem };
