import {
  NavLink,
} from 'react-router-dom';
import { useContext, useState } from 'react';
import { Localization } from 'contexts';
import { UIIconButton } from 'components/UI';

import './Nav.scss';

const Nav = () => {
  const STR = useContext(Localization);
  const [isNavExpanded, toggleNav] = useState(false);
  function handleHideMenuClick() {
    toggleNav(!isNavExpanded);
  }

  return (
    <nav className={isNavExpanded ? 'nav' : 'nav nav--collapsed'}>
      <div className="nav__content">
        <ul className="nav-links">
          <li className="nav-links__item">
            <NavLink to="/" exact className="nav-links__link nav-links__link--home" title={STR.HOME}>
              {STR.HOME}
            </NavLink>
          </li>
          <li className="nav-links__item">
            <NavLink to="favourites" className="nav-links__link nav-links__link--favourites" title={STR.FAVOURITES}>
              {STR.FAVOURITES}
            </NavLink>
          </li>
          <li className="nav-links__item">
            <NavLink to="watch-later" className="nav-links__link nav-links__link--watch-later" title={STR.WATCH_LATER}>
              {STR.WATCH_LATER}
            </NavLink>
          </li>
          <li className="nav-links__item">
            <NavLink to="watched" className="nav-links__link nav-links__link--watched" title={STR.WATCHED}>
              {STR.WATCHED}
            </NavLink>
          </li>
        </ul>
        <UIIconButton
          icon={isNavExpanded ? 'left-open' : 'right-open'}
          onClick={handleHideMenuClick}
          extraClassName="nav__toggler"
        />
      </div>
    </nav>
  );
};

export { Nav };
