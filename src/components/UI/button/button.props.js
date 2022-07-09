import PropTypes from 'prop-types';

export const buttonDefaultProps = {
  extraClassName: '',
  onClick: null,
  type: 'button',
  btnType: 'primary',
  size: 'normal',
  text: 'Button',
};

export const buttonPropTypes = {
  onClick: PropTypes.func,
  extraClassName: PropTypes.string,
  type: PropTypes.string,
  btnType: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
};
