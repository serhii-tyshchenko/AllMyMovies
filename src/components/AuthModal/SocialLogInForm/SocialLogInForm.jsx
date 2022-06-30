import PropTypes from 'prop-types';
import { UIIconButton } from 'components';

function SocialLogInForm(props) {
  const { onSignInWithGoogle, dic } = props;

  return (
    <div className="social-login">
      <div className="social-login__label">{dic.CONNECT_WITH}</div>
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
  dic: { CONNECT_WITH: 'or connect with' },
};

SocialLogInForm.propTypes = {
  onSignInWithGoogle: PropTypes.func.isRequired,
  dic: PropTypes.shape({ CONNECT_WITH: PropTypes.string }),
};

export { SocialLogInForm };
