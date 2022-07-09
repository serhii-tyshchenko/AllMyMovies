import PropTypes from 'prop-types';

import './movieMenuItem.scss';

const NAME_SPACE = 'movie-menu-item';

function MovieMenuItem(props) {
  const {
    list, onClick, checked, title,
  } = props;

  return <li className={NAME_SPACE}>
    <label htmlFor={list}>
      <input
        type="checkbox"
        id={list}
        value={list}
        onChange={onClick}
        checked={checked}
      />
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
