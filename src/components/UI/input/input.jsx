/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './input.scss';

const NAME_SPACE = 'input';

function Input(props) {
  const {
    type, name, value, onChange, extraClassName, placeholder, required, autofocus, disabled,
  } = props;

  const componentClassName = getClassName(NAME_SPACE, extraClassName);

  return (
    <input
      type={type}
      name={name}
      value={value}
      className={componentClassName}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoFocus={autofocus}
      disabled={disabled}
      size={value.length}
    />
  );
}

Input.defaultProps = {
  extraClassName: '',
  onChange: null,
  value: '',
  type: 'text',
  name: 'ui-input',
  placeholder: '',
  required: false,
  autofocus: false,
  disabled: false,
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default (Input);
