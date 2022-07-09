import { memo } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../button';
import { Modal } from '../modal';

import './modalConfirm.scss';

const NAME_SPACE = 'modal-confirm';

function ModalConfirm(props) {
  const {
    title, isOpen, onClose, onConfirm, children, closeBtnTitle, confirmBtnTitle, cancelBtnTitle,
  } = props;
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      extraClassName={NAME_SPACE}
      closeBtnTitle={closeBtnTitle}
    >
      <div className={`${NAME_SPACE}__content`}>{children}</div>
      <div className={`${NAME_SPACE}__footer`}>
        <Button btnType="secondary" text={cancelBtnTitle} onClick={onClose} />
        <Button btnType="primary" text={confirmBtnTitle} onClick={onConfirm} />
      </div>
    </Modal>
  );
}

ModalConfirm.defaultProps = {
  title: 'Modal Confirm Title',
  isOpen: false,
  closeBtnTitle: 'Close',
  confirmBtnTitle: 'Confirm',
  cancelBtnTitle: 'Cancel',
};

ModalConfirm.propTypes = {
  title: PropTypes.string,
  closeBtnTitle: PropTypes.string,
  confirmBtnTitle: PropTypes.string,
  cancelBtnTitle: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default memo(ModalConfirm);
