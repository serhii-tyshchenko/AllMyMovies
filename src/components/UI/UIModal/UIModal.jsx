import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { Localization } from 'contexts';
import { useKeypress } from 'hooks';
import { UIIconButton } from 'components';

import './UIModal.scss';

const UIModal = ({
  title, isVisible, onClose, children, extraClassName,
}) => {
  const STR = useContext(Localization);
  const componentClassName = extraClassName ? `ui-modal ${extraClassName}` : 'ui-modal';
  const modalRoot = document.getElementById('modal-root');
  useKeypress('Escape', onClose);

  return isVisible && createPortal(
    (
      <div className="ui-modal__overlay">
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
              title={STR.CLOSE}
            />
          </div>
          <div className="ui-modal__content">{children}</div>
        </div>
      </div>
    ),
    modalRoot,
  );
};

UIModal.defaultProps = {
  title: 'Modal title',
  isVisible: false,
};

export { UIModal };
