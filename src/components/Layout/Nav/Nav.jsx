import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserLists } from 'store/selectors';
import { useLocalization } from 'hooks';
import { UIIconButton } from 'components/UI';
import { NavLinks } from './NavLinks';

import './Nav.scss';

function Nav() {
  const dic = useLocalization();
  const [isNavExpanded, toggleNav] = useState(false);
  const userLists = useSelector(getUserLists);
  const predefinedLists = [
    { id: '/', title: dic.HOME, icon: 'home' },
    { id: 'favourites', title: dic.FAVOURITES, icon: 'heart' },
    { id: 'watched', title: dic.WATCHED, icon: 'history' },
    { id: 'watch-later', title: dic.WATCH_LATER, icon: 'clock' },
  ];
  const navClassName = isNavExpanded ? 'nav' : 'nav nav--collapsed';

  const handleToggleNav = () => toggleNav(!isNavExpanded);

  return (
    <nav className={navClassName}>
      <div className="nav__content">
        <NavLinks data={[...predefinedLists, ...userLists]} />
        <UIIconButton
          icon={isNavExpanded ? 'left-open' : 'right-open'}
          onClick={handleToggleNav}
          title={isNavExpanded ? dic.COLLAPSE : dic.EXPAND}
          extraClassName="nav__toggler"
        />
      </div>
    </nav>
  );
}

export { Nav };
