import PropTypes from 'prop-types';
import { NavLinksItem } from './NavLinksItem';

import './NavLinks.scss';

const NavLinks = ({ data }) => (
  <ul className="nav-links">
    {data.map((item) => (
      <NavLinksItem
        key={item.id}
        route={item.id}
        title={item.title}
        icon={item.icon}
      />
    ))}
  </ul>
);

NavLinks.defaultProps = {
  data: [],
};

NavLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  })),
};

export { NavLinks };
