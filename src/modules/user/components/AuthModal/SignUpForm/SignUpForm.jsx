import React from 'react';
import PropTypes from 'prop-types';
import { UIButton, UIInput } from 'modules/ui';
import './SignUpForm.scss';

const SignUpForm = (props) => {
  const {
    onSubmit,
    onChange,
    data: { email, password },
    STR,
  } = props;

  return (
    <>
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
    </>
  );
};

SignUpForm.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { SignUpForm };
