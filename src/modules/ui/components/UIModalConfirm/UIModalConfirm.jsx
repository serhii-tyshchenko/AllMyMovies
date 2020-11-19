import React from 'react';
import './UIModalConfirm.scss';
import { UIModal, UIButton } from 'modules/ui';

const UIModalConfirm = ({
  title, isVisible, onClose, onSave, children,
}) => isVisible && (
<UIModal title={title} isVisible={isVisible} onClose={onClose}>
  <div className="ui-modal-confirm__content">{children}</div>
  <div className="ui-modal-confirm__footer">
    <UIButton btnType="secondary" text="Cancel" onClick={onClose} />
    <UIButton btnType="primary" text="Save" onClick={onSave} />
  </div>
</UIModal>
);

UIModalConfirm.defaultProps = {
  title: 'Modal Confirm Title',
  isVisible: false,
};

export { UIModalConfirm };
