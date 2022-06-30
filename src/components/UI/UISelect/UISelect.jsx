import PropTypes from 'prop-types';

import { getClassName } from 'utils';

const NAME_SPACE = 'ui-select';

function UISelect(props) {

  const {
    value, onChange, options, extraClassName, title, required,
  } = props;

  const componentClassName = getClassName(NAME_SPACE, extraClassName);

  return (
    <select
      onChange={onChange}
      value={value}
      required={required}
      className={componentClassName}
      title={title}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          className={`${NAME_SPACE}__option`}
        >
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
  title: 'Select me',
  options: [
    {
      value: 'opt1',
      label: 'Option 1',
    },
    {
      value: 'opt2',
      label: 'Option 2',
    },
    {
      value: 'opt3',
      label: 'Option 3',
    },
  ],
  required: false,
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
      disabled: PropTypes.bool,
    }),
  ),
  required: PropTypes.bool,
};

export { UISelect };
