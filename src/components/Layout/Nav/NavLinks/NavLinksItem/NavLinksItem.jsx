import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './NavLinksItem.scss';

function NavLinksItem({ route, icon, title }) {
  return <li>
    <NavLink to={route} exact="true" className={`nav-links-item icon-${icon}`} title={title}>
      {title}
    </NavLink>
  </li>
}

NavLinksItem.defaultProps = {
  route: '',
  icon: 'menu',
  title: 'MyList',
};

NavLinksItem.propTypes = {
  route: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export { NavLinksItem };
