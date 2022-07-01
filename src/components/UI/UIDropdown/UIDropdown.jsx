import { UIIconButton } from 'components';

import { getClassName } from 'utils';

import { UIDropdownPropTypes, UIDropdownDefaultProps } from './UIDropdown.props';

import { NAME_SPACE } from './constants';

function UIDropdown({
  children, onToggle, extraClassName, isOpened,
}) {

  const togglerBtnIcon = isOpened ? 'cancel' : 'ellipsis-vert';

  const componentClassName = getClassName(NAME_SPACE, extraClassName);

  return (
    <div className={componentClassName}>
      <UIIconButton onClick={onToggle} icon={togglerBtnIcon} extraClassName={`${NAME_SPACE}__toggler`} />
      {isOpened && (
        <div className={`${NAME_SPACE}__container`}>
          {children}
        </div>
      )}
    </div>
  );
}

UIDropdown.defaultProps = UIDropdownDefaultProps;

UIDropdown.propTypes = UIDropdownPropTypes;

export { UIDropdown };
