import { memo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { UIIconButton } from 'components';
import { getClassName } from 'utils';
import { PORTAL_ROOT } from 'constants';

const NAME_SPACE = 'ui-modal';

function UIModal(props) {
  const { title, closeBtnTitle, isOpen, onClose, children, extraClassName } = props;

  const componentClassName = getClassName(NAME_SPACE, extraClassName);

  if (!isOpen) {
    return null;
  }

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
    ), PORTAL_ROOT);
}

UIModal.defaultProps = {
  title: 'Modal title',
  closeBtnTitle: 'Close modal',
  isOpen: false,
  onClose: null,
  children: null,
  extraClassName: '',
};

UIModal.propTypes = {
  title: PropTypes.string,
  closeBtnTitle: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  extraClassName: PropTypes.string,
};

export default memo(UIModal);
