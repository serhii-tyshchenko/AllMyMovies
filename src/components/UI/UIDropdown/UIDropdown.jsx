import PropTypes from 'prop-types';

import { UIIconButton } from 'components';

import './UIDropdown.scss';

function UIDropdown({
  children, onToggle, extraClassName, isOpened,
}) {
  const menuTogglerIcon = isOpened ? 'cancel' : 'ellipsis-vert';
  const componentClassName = extraClassName ? `ui-dropdown ${extraClassName}` : 'ui-dropdown';
  return (
    <div className={componentClassName}>
      <UIIconButton onClick={onToggle} icon={menuTogglerIcon} extraClassName="ui-dropdown__toggler" />
      {isOpened && (
        <div className="ui-dropdown__container">
          {children}
        </div>
      )}
    </div>
  );
}

UIDropdown.defaultProps = {
  extraClassName: '',
  children: null,
};

UIDropdown.propTypes = {
  onToggle: PropTypes.func.isRequired,
  extraClassName: PropTypes.string,
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export { UIDropdown };
