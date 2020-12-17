import PropTypes from 'prop-types';
import { UIModal, UIButton } from 'components';

import './UIModalConfirm.scss';

const UIModalConfirm = (props) => {
  const {
    title, isVisible, onClose, onSave, children,
  } = props;
  return isVisible && (
    <UIModal title={title} isVisible={isVisible} onClose={onClose}>
      <div className="ui-modal-confirm__content">{children}</div>
      <div className="ui-modal-confirm__footer">
        <UIButton btnType="secondary" text="Cancel" onClick={onClose} />
        <UIButton btnType="primary" text="Save" onClick={onSave} />
      </div>
    </UIModal>
  );
};

UIModalConfirm.defaultProps = {
  title: 'Modal Confirm Title',
  isVisible: false,
};

UIModalConfirm.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { UIModalConfirm };
