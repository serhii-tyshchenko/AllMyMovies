import { useState } from 'react';
import PropTypes from 'prop-types';
import { getClassName } from 'utils';

const getTabClass = (index, activeTabIndex) => getClassName('ui-tabs__item', { 'ui-tabs__item--active': index === activeTabIndex });
function UITabs(props) {
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
  const componentClassName = getClassName('ui-tabs', extraClassName);


  return (
    <div className={componentClassName}>
      <ol className="ui-tabs__list">
        {labels.map((label, index) => (
          <li key={label} className={getTabClass(index, activeTabIndex)}>
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
