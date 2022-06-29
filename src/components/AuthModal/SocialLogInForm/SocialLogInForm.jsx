import PropTypes from 'prop-types';
import { UIIconButton } from 'components';

import './SocialLogInForm.scss';

function SocialLogInForm(props) {
  const { onSignInWithGoogle, STR } = props;

  return (
    <div className="social-login">
      <div className="social-login__label">{STR.CONNECT_WITH}</div>
      <div className="social-login__btns">
        <UIIconButton
          icon="google"
          onClick={onSignInWithGoogle}
          extraClassName="social-login__btn"
        />
      </div>
    </div>
  );
}
SocialLogInForm.defaultProps = {
  STR: { CONNECT_WITH: 'or connect with' },
};

SocialLogInForm.propTypes = {
  onSignInWithGoogle: PropTypes.func.isRequired,
  STR: PropTypes.shape({ CONNECT_WITH: PropTypes.string }),
};

export { SocialLogInForm };
