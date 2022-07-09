import { getClassName } from 'utils';
import { IconButton } from '../iconButton';

import { dropdownPropTypes, dropdownDefaultProps } from './dropdown.props';

import { NAME_SPACE } from './constants';

import './dropdown.scss';

function Dropdown({
  children, onToggle, extraClassName, isOpened,
}) {

  const togglerBtnIcon = isOpened ? 'cancel' : 'ellipsis-vert';

  const componentClassName = getClassName(NAME_SPACE, extraClassName);

  return (
    <div className={componentClassName}>
      <IconButton
        onClick={onToggle}
        icon={togglerBtnIcon}
        extraClassName={`${NAME_SPACE}__toggler`}
      />
      {isOpened && (
        <div className={`${NAME_SPACE}__container`}>
          {children}
        </div>
      )}
    </div>
  );
}

Dropdown.defaultProps = dropdownDefaultProps;

Dropdown.propTypes = dropdownPropTypes;

export default (Dropdown);
