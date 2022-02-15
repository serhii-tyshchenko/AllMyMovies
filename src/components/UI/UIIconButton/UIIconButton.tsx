/* eslint-disable react/button-has-type */
import './UIIconButton.scss';

interface UIIconButtonProps {
  onClick?: () => void,
  extraClassName?: string,
  icon?: string,
  type?: "button" | "submit" | "reset",
  title?: string
}

const UIIconButton = (props:UIIconButtonProps) => {
  const {
    icon = '', onClick, extraClassName, title = 'Click me', type = 'button',
  }:UIIconButtonProps = props;
  const componentClassName = `ui-icon-button icon-${icon} ${extraClassName}`;

  return (
    <button type={type} className={componentClassName} onClick={onClick} title={title}>
      <span className="ui-icon-button__text">{title}</span>
    </button>
  );
};

export { UIIconButton };
