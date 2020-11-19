import React from 'react';
import { createPortal } from 'react-dom';
import { UIIconButton } from 'modules/ui';
import './UIModal.scss';

const UIModal = ({
  title, isVisible, onClose, children,
}) => {
  const modalRoot = document.getElementById('modal-root');
  return createPortal(
    isVisible && (
    <div className="ui-modal__overlay">
      <div className="ui-modal">
        <div className="ui-modal__header">
          <h4 className="ui-modal__title">{title}</h4>
          <UIIconButton
            extraClassName="ui-modal__btn-close"
            icon="cancel"
            onClick={onClose}
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
