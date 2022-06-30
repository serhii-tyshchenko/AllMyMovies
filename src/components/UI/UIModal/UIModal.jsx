import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { useLocalization, useKeypress } from 'hooks';
import { UIIconButton } from 'components';

import './UIModal.scss';

function UIModal({
  title, isVisible, onClose, children, extraClassName,
}) {
  const dic = useLocalization();
  const componentClassName = extraClassName ? `ui-modal ${extraClassName}` : 'ui-modal';
  const modalRoot = document.getElementById('modal-root');
  useKeypress('Escape', onClose);

  if (!isVisible) {
    return null;
  }

  return createPortal(
    (
      <div className="ui-modal__backdrop">
        <div
          role="dialog"
          aria-labelledby="ui-modal-title"
          aria-modal="true"
          className={componentClassName}
        >
          <div className="ui-modal__header">
            <h4 id="ui-modal-title" className="ui-modal__title">{title}</h4>
            <UIIconButton
              extraClassName="ui-modal__btn-close"
              icon="cancel"
              onClick={onClose}
              title={dic.CLOSE}
            />
          </div>
          <div className="ui-modal__content">{children}</div>
        </div>
      </div>
    ),
    modalRoot,
  );
}

UIModal.defaultProps = {
  title: 'Modal title',
  isVisible: false,
  onClose: null,
  children: null,
  extraClassName: '',
};

UIModal.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  extraClassName: PropTypes.string,
};

export { UIModal };
