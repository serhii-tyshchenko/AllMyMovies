/* eslint-disable react/button-has-type */
import './UIButton.scss';

interface UIButtonProps {
  onClick?: () => void,
  extraClassName?: string,
  type?: "button" | "submit" | "reset",
  btnType?: "primary" | "secondary" | "action",
  size?: "normal" | "large" | "large",
  text: string
}

const UIButton = (props:UIButtonProps) => {
  const {
    onClick, extraClassName, type = 'button', btnType = 'primary', size = 'normal', text = 'Button',
  }:UIButtonProps = props;
  const componentClassName = `ui-button ui-button--${btnType} ui-button--${size} ${extraClassName}`;

  return (
    <button type={type} className={componentClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export { UIButton };
