import { useSelector } from 'react-redux';
import { getUserLists } from 'store/selectors';
import { useLocalization, useToggle } from 'hooks';
import { UIIconButton } from 'components/UI';
import { getClassName } from 'utils';

import getPredefinedLists from './utils';
import { NavLinks } from './NavLinks';

const NAME_SPACE = 'nav';

function Nav() {
  const dic = useLocalization();
  const [isNavExpanded, toggleNav] = useToggle();
  const userLists = useSelector(getUserLists);

  const predefinedLists = getPredefinedLists(dic);
  const navBtnIcon = isNavExpanded ? 'left-open' : 'right-open';
  const navBtnTitle = isNavExpanded ? dic.COLLAPSE : dic.EXPAND;

  const navClassName = getClassName(NAME_SPACE, { [`${NAME_SPACE}--collapsed`]: !isNavExpanded });

  return (
    <nav className={navClassName}>
      <div className={`${NAME_SPACE}__content`}>
        <NavLinks data={[...predefinedLists, ...userLists]} />
        <UIIconButton
          icon={navBtnIcon}
          onClick={toggleNav}
          title={navBtnTitle}
          extraClassName={`${NAME_SPACE}__toggler`}
        />
      </div>
    </nav>
  );
}

export { Nav };
