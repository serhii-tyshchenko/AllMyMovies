import React from 'react';
import PropTypes from 'prop-types';
import './UIInput.scss';

const UIInput = (props) => {
  const {
    type, value, onChange, extraClassName, placeholder, ...rest
  } = props;
  const className = extraClassName ? `ui-input ${extraClassName}` : 'ui-input';

  // eslint-disable-next-line max-len
  return <input type={type} value={value} className={className} onChange={onChange} placeholder={placeholder} {...rest} />;
};

UIInput.defaultProps = {
  extraClassName: '',
  onChange: null,
  value: '',
  type: 'text',
  placeholder: '',
};

UIInput.propTypes = {
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export { UIInput };
