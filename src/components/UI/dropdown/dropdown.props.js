import PropTypes from 'prop-types';

export const dropdownDefaultProps = {
  extraClassName: '',
  children: null,
};

export const dropdownPropTypes = {
  onToggle: PropTypes.func.isRequired,
  extraClassName: PropTypes.string,
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
