import PropTypes from 'prop-types';
import { UIButton, UIInput } from 'components';

import './SignUpForm.scss';

function SignUpForm(props) {
  const {
    onSubmit,
    onChange,
    data: { email, password },
    STR,
  } = props;

  return (
    <form onSubmit={onSubmit} className="signup-form">
      <UIInput
        type="email"
        name="email"
        value={email}
        extraClassName="signup-form__input"
        placeholder={STR.YOUR_EMAIL}
        onChange={onChange}
        required
      />
      <UIInput
        type="password"
        name="password"
        value={password}
        extraClassName="signup-form__input"
        placeholder={STR.YOUR_PASSWORD}
        onChange={onChange}
        required
      />
      <div className="signup-form__btns">
        <UIButton
          type="submit"
          btnType="primary"
          text={STR.CREATE_AN_ACCOUNT}
          onClick={onSubmit}
        />
      </div>
    </form>
  );
}

SignUpForm.defaultProps = {
  STR: {
    YOUR_EMAIL: 'Your Email',
    YOUR_PASSWORD: 'Your password',
    CREATE_AN_ACCOUNT: 'Create an account',
  },
};

SignUpForm.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  STR: PropTypes.shape({
    YOUR_EMAIL: PropTypes.string,
    YOUR_PASSWORD: PropTypes.string,
    CREATE_AN_ACCOUNT: PropTypes.string,
  }),
};

export { SignUpForm };
