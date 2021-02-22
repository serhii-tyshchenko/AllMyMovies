import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserLists } from 'store/selectors';
import { Localization } from 'contexts';
import { UIIconButton } from 'components/UI';
import { NavLinks } from './NavLinks';

import './Nav.scss';

const Nav = () => {
  const STR = useContext(Localization);
  const [isNavExpanded, toggleNav] = useState(false);
  const userLists = useSelector(getUserLists);
  const predefinedLists = [
    { id: '/', title: STR.HOME, icon: 'home' },
    { id: 'favourites', title: STR.FAVOURITES, icon: 'heart' },
    { id: 'watched', title: STR.WATCHED, icon: 'history' },
    { id: 'watch-later', title: STR.WATCH_LATER, icon: 'clock' },
  ];
  const navClassName = isNavExpanded ? 'nav' : 'nav nav--collapsed';

  function handleToggleNav() {
    toggleNav(!isNavExpanded);
  }

  return (
    <nav className={navClassName}>
      <div className="nav__content">
        <NavLinks data={[...predefinedLists, ...userLists]} />
        <UIIconButton
          icon={isNavExpanded ? 'left-open' : 'right-open'}
          onClick={handleToggleNav}
          extraClassName="nav__toggler"
        />
      </div>
    </nav>
  );
};

export { Nav };
