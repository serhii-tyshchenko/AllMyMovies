import { useState } from 'react';
import PropTypes from 'prop-types';

import './UITabs.scss';

const UITabs = (props) => {
  const {
    extraClassName, labels, children, activeTab, onTabClick,
  } = props;
  const tabsClassName = `ui-tabs ${extraClassName}`;
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  function handleTabClick(e) {
    setActiveTabIndex(labels.indexOf(e.target.value));
    if (onTabClick) {
      onTabClick();
    }
  }
  function setTabClass(index) {
    return index === activeTabIndex ? 'ui-tabs__item ui-tabs__item--active' : 'ui-tabs__item';
  }

  return (
    <div className={tabsClassName}>
      <ol className="ui-tabs__list">
        {labels.map((label, index) => (
          <li key={label} className={setTabClass(index)}>
            <input
              className="ui-tabs__btn"
              type="button"
              onClick={handleTabClick}
              value={label}
            />
          </li>
        ))}
      </ol>
      <div className="ui-tabs__content">
        {children.map((child, index) => (index !== activeTabIndex ? null : child))}
      </div>
    </div>
  );
};

UITabs.defaultProps = {
  extraClassName: '',
  activeTab: 0,
  labels: [],
  children: null,
  onTabClick: null,
};

UITabs.propTypes = {
  extraClassName: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.number,
  children: PropTypes.node,
  onTabClick: PropTypes.func,
};

export { UITabs };
