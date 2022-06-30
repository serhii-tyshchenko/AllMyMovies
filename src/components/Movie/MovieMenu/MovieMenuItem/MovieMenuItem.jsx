import PropTypes from 'prop-types';

function MovieMenuItem({
  list, onClick, checked, title,
}) {
  return <li className="movie-menu-item">
    <label htmlFor={list}>
      <input type="checkbox" id={list} value={list} onChange={onClick} checked={checked} />
      {title}
    </label>
  </li>
}

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
