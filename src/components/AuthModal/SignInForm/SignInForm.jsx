import PropTypes from 'prop-types';
import { UIButton, UIInput } from 'components';

import './SignInForm.scss';

function SignInForm(props) {
  const {
    onSubmit,
    onChange,
    data: { email, password },
    dic,
  } = props;

  return (
    <form onSubmit={onSubmit} className="signin-form">
      <UIInput
        type="email"
        name="email"
        value={email}
        extraClassName="signin-form__input"
        placeholder={dic.YOUR_EMAIL}
        onChange={onChange}
        autofocus
        required
      />
      <UIInput
        type="password"
        name="password"
        extraClassName="signin-form__input"
        value={password}
        placeholder={dic.YOUR_PASSWORD}
        onChange={onChange}
        required
      />
      <div className="signin-form__btns">
        <UIButton
          type="submit"
          btnType="primary"
          text={dic.SIGN_IN}
          onClick={onSubmit}
        />
      </div>
    </form>
  );
}

SignInForm.defaultProps = {
  dic: {
    YOUR_EMAIL: 'Your Email',
    YOUR_PASSWORD: 'Your password',
    SIGN_IN: 'Sign In',
  },
};

SignInForm.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  dic: PropTypes.shape({
    YOUR_EMAIL: PropTypes.string,
    YOUR_PASSWORD: PropTypes.string,
    SIGN_IN: PropTypes.string,
  }),
};

export { SignInForm };
