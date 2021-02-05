/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

import './UICheckbox.scss';

const UICheckbox = (props) => {
  const {
    id, name, onChange, extraClassName, title, checked,
  } = props;
  const componentClassName = extraClassName ? `ui-checkbox ${extraClassName}` : 'ui-checkbox';

  return (
    <>
      <label className={componentClassName}>
        <input type="checkbox" name={name} id={id} className="ui-checkbox__inp" title={title} onChange={onChange} checked={checked} />
        <span className="ui-checkbox__checkmark" />
      </label>
    </>
  );
};

UICheckbox.defaultProps = {
  extraClassName: '',
  title: '',
  onChange: null,
  name: 'ui-checkbox',
  id: '',
  checked: false,
};

UICheckbox.propTypes = {
  onChange: PropTypes.func,
  extraClassName: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
};

export { UICheckbox };
