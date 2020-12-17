import React from 'react';
import PropTypes from 'prop-types';
import './UISelect.scss';

const UISelect = (props) => {
  const {
    value, onChange, options, extraClassName, title,
  } = props;
  const className = extraClassName ? `ui-select ${extraClassName}` : 'ui-select';

  return (
    <select onChange={onChange} value={value} className={className} title={title}>
      {options.map((option) => (
        <option key={option.value} value={option.value} className="ui-select__option">
          {option.label}
        </option>
      ))}
    </select>
  );
};

UISelect.defaultProps = {
  extraClassName: '',
  onChange: null,
  value: '',
  title: '',
  options: [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
  ],
};

UISelect.propTypes = {
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

export { UISelect };
