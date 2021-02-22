import PropTypes from 'prop-types';

import './MovieMenuItem.scss';

const MovieMenuItem = ({
  list, onClick, checked, title,
}) => (
  <li className="movie-menu-item">
    <label htmlFor={list}>
      <input type="checkbox" id={list} value={list} onChange={onClick} checked={checked} />
      {title}
    </label>
  </li>
);

MovieMenuItem.defaultProps = {
  list: '',
  onClick: null,
  checked: false,
  title: '',
};

MovieMenuItem.propTypes = {
  list: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  title: PropTypes.string,
};

export { MovieMenuItem };
