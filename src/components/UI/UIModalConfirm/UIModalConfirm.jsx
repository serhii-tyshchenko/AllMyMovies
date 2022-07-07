import PropTypes from 'prop-types';
import { UIModal, UIButton } from 'components';

const NAME_SPACE = 'ui-modal-confirm';

function UIModalConfirm(props) {
  const {
    title, isOpen, onClose, onConfirm, children, closeBtnTitle, confirmBtnTitle, cancelBtnTitle,
  } = props;
  return (
    <UIModal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      extraClassName={NAME_SPACE}
      closeBtnTitle={closeBtnTitle}
    >
      <div className={`${NAME_SPACE}__content`}>{children}</div>
      <div className={`${NAME_SPACE}__footer`}>
        <UIButton btnType="secondary" text={cancelBtnTitle} onClick={onClose} />
        <UIButton btnType="primary" text={confirmBtnTitle} onClick={onConfirm} />
      </div>
    </UIModal>
  );
}

UIModalConfirm.defaultProps = {
  title: 'Modal Confirm Title',
  isOpen: false,
  closeBtnTitle: 'Close',
  confirmBtnTitle: 'Confirm',
  cancelBtnTitle: 'Cancel',
};

UIModalConfirm.propTypes = {
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

export { UIModalConfirm };
