import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { UIIconButton } from 'components';
import { getClassName } from 'utils';

const NAME_SPACE = 'ui-modal';

const modalRoot = document.getElementById('modal-root');
function UIModal(props) {
  const { title, closeBtnTitle, isVisible, onClose, children, extraClassName } = props;

  if (!isVisible) {
    return null;
  }

  const componentClassName = getClassName(NAME_SPACE, extraClassName);

  return createPortal(
    (
      <div className={`${NAME_SPACE}__backdrop`}>
        <div
          role="dialog"
          aria-labelledby="ui-modal-title"
          aria-modal="true"
          className={componentClassName}
        >
          <div className={`${NAME_SPACE}__header`}>
            <h4 id="ui-modal-title" className={`${NAME_SPACE}__title`}>{title}</h4>
            <UIIconButton
              extraClassName={`${NAME_SPACE}__btn-close`}
              icon="cancel"
              onClick={onClose}
              title={closeBtnTitle}
            />
          </div>
          <div className={`${NAME_SPACE}__content`}>{children}</div>
        </div>
      </div>
    ),
    modalRoot,
  );
}

UIModal.defaultProps = {
  title: 'Modal title',
  closeBtnTitle: 'Close modal',
  isVisible: false,
  onClose: null,
  children: null,
  extraClassName: '',
};

UIModal.propTypes = {
  title: PropTypes.string,
  closeBtnTitle: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  extraClassName: PropTypes.string,
};

export { UIModal };
