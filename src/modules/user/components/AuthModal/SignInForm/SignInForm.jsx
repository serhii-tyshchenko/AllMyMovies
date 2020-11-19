import React from 'react';
import PropTypes from 'prop-types';
import { UIButton, UIInput } from 'modules/ui';
import './SignInForm.scss';

const SignInForm = (props) => {
  const {
    onSubmit,
    onChange,
    data: { email, password },
    STR,
  } = props;

  return (
    <>
      <form onSubmit={onSubmit} className="signin-form">
        <UIInput
          value={email}
          type="email"
          name="email"
          extraClassName="signin-form__input"
          placeholder={STR.YOUR_EMAIL}
          onChange={onChange}
          autoComplete="current-email"
          required
        />
        <UIInput
          type="password"
          name="password"
          extraClassName="signin-form__input"
          value={password}
          placeholder={STR.YOUR_PASSWORD}
          onChange={onChange}
          autoComplete="current-password"
          required
        />
        <div className="signin-form__btns">
          <UIButton type="submit" btnType="primary" text={STR.SIGN_IN} onClick={onSubmit} />
        </div>
      </form>
    </>
  );
};
SignInForm.defaultProps = {
  STR: {},
};

SignInForm.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  STR: PropTypes.shape(),
};

export { SignInForm };
