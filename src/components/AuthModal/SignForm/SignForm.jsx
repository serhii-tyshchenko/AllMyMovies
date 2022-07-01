import { memo } from 'react';

import PropTypes from 'prop-types';

import { UIButton, UIInput } from 'components';

const NAME_SPACE = 'sign-form';

function SignForm(props) {
  const {
    onSubmit,
    onChange,
    data: { email, password },
    dic,
  } = props;

  return (
    <form onSubmit={onSubmit} className={NAME_SPACE}>
      <UIInput
        type="email"
        name="email"
        value={email}
        extraClassName={`${NAME_SPACE}__input`}
        placeholder={dic.YOUR_EMAIL}
        onChange={onChange}
        autofocus
        required
      />
      <UIInput
        type="password"
        name="password"
        extraClassName={`${NAME_SPACE}__input`}
        value={password}
        placeholder={dic.YOUR_PASSWORD}
        onChange={onChange}
        required
      />
      <div className={`${NAME_SPACE}__btns`}>
        <UIButton
          type="submit"
          btnType="primary"
          text={dic.SUBMIT}
          onClick={onSubmit}
        />
      </div>
    </form>
  );
}

SignForm.defaultProps = {
  dic: {
    YOUR_EMAIL: 'Your Email',
    YOUR_PASSWORD: 'Your password',
    SUBMIT: 'Submit',
  },
};

SignForm.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  dic: PropTypes.objectOf(PropTypes.string),
};

export default memo(SignForm)
