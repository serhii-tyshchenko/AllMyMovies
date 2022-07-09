import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './tabs.scss';

const NAME_SPACE = 'tabs';

const getTabClass = (index, activeTabIndex) => getClassName(`${NAME_SPACE}__item`, { [`${NAME_SPACE}__item--active`]: index === activeTabIndex });

function Tabs(props) {
  const {
    extraClassName, labels, children, activeTab, onTabClick,
  } = props;

  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const handleTabClick = (e) => {
    setActiveTabIndex(labels.indexOf(e.target.value));
    if (onTabClick) {
      onTabClick();
    }
  }

  const componentClassName = getClassName(NAME_SPACE, extraClassName);

  return (
    <div className={componentClassName}>
      <ol className={`${NAME_SPACE}__list`}>
        {labels.map((label, index) => (
          <li key={label} className={getTabClass(index, activeTabIndex)}>
            <input
              className={`${NAME_SPACE}__btn`}
              type="button"
              onClick={handleTabClick}
              value={label}
            />
          </li>
        ))}
      </ol>
      <div className={`${NAME_SPACE}__content`}>
        {children.map((child, index) => (index !== activeTabIndex ? null : child))}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  extraClassName: '',
  activeTab: 0,
  labels: [],
  children: null,
  onTabClick: null,
};

Tabs.propTypes = {
  extraClassName: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.number,
  children: PropTypes.node,
  onTabClick: PropTypes.func,
};

export default memo(Tabs);
