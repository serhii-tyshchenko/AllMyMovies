import PropTypes from 'prop-types';

export const UIDropdownDefaultProps = {
  extraClassName: '',
  children: null,
};

export const UIDropdownPropTypes = {
  onToggle: PropTypes.func.isRequired,
  extraClassName: PropTypes.string,
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
