import React from 'react';
import PropTypes from 'prop-types';
import { UIButton, UIInput } from 'components';

import './SignInForm.scss';

const SignInForm = (props) => {
  const {
    onSubmit,
    onChange,
    data: { email, password },
    STR,
  } = props;

  return (
    <form onSubmit={onSubmit} className="signin-form">
      <UIInput
        type="email"
        name="email"
        value={email}
        extraClassName="signin-form__input"
        placeholder={STR.YOUR_EMAIL}
        onChange={onChange}
        required
      />
      <UIInput
        type="password"
        name="password"
        extraClassName="signin-form__input"
        value={password}
        placeholder={STR.YOUR_PASSWORD}
        onChange={onChange}
        required
      />
      <div className="signin-form__btns">
        <UIButton
          type="submit"
          btnType="primary"
          text={STR.SIGN_IN}
          onClick={onSubmit}
        />
      </div>
    </form>
  );
};

SignInForm.defaultProps = {
  STR: {
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
  STR: PropTypes.shape({
    YOUR_EMAIL: PropTypes.string,
    YOUR_PASSWORD: PropTypes.string,
    SIGN_IN: PropTypes.string,
  }),
};

export { SignInForm };
