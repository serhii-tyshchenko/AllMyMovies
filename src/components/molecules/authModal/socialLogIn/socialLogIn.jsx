import PropTypes from 'prop-types';
import { IconButton } from 'components/ui';

import './socialLogIn.scss';

function SocialLogIn(props) {

  const { onSignInWithGoogle, dic } = props;

  return (
    <div className="social-login">
      <div className="social-login__label">{dic.CONNECT_WITH}</div>
      <div className="social-login__btns">
        <IconButton
          icon="google"
          onClick={onSignInWithGoogle}
          extraClassName="social-login__btn"
        />
      </div>
    </div>
  );
}

SocialLogIn.defaultProps = {
  dic: { CONNECT_WITH: 'or connect with' },
};

SocialLogIn.propTypes = {
  onSignInWithGoogle: PropTypes.func.isRequired,
  dic: PropTypes.shape({ CONNECT_WITH: PropTypes.string }),
};

export { SocialLogIn };
