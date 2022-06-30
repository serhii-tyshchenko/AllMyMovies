import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { UIIconButton, UIInput, UIModalConfirm } from 'components';
import { useToggle } from 'hooks';

function MovieListTitle(props) {
  const {
    title, isUserList, onSaveClick, onDeleteClick, dic,
  } = props;

  const [listTitle, setListTitle] = useState(title);
  const [isEditMode, toggleEditMode] = useToggle();
  const [isConfirmModalVisible, toggleConfirmModal] = useToggle();
  useEffect(() => {
    setListTitle(title);
  }, [title]);

  const handleSaveClick = () => {
    onSaveClick(listTitle);
    toggleEditMode();
  }

  const handleChange = (evt) => setListTitle(evt.target.value);

  const handleConfirmDeleteClick = () => {
    toggleEditMode();
    toggleConfirmModal();
    onDeleteClick();
  }

  return (
    <>
      <div className="movie-list-title">
        <UIInput
          value={listTitle}
          onChange={handleChange}
          disabled={!isEditMode}
          extraClassName="movie-list-title__input"
        />
        {isUserList && (
          <>
            {!isEditMode && (<UIIconButton icon="pencil" title={dic.EDIT_LIST} onClick={toggleEditMode} />)}
            {isEditMode && (<UIIconButton icon="ok" title={dic.SAVE_CHANGES} onClick={handleSaveClick} />)}
            {isEditMode && (<UIIconButton icon="trash" title={dic.DELETE_LIST} onClick={toggleConfirmModal} />)}
          </>
        )}
      </div>
      <UIModalConfirm
        title={dic.WARNING}
        isVisible={isConfirmModalVisible}
        onClose={toggleConfirmModal}
        onConfirm={handleConfirmDeleteClick}
        closeBtnTitle={dic.CLOSE}
        confirmBtnTitle={dic.CONFIRM}
        cancelBtnTitle={dic.CANCEL}
      >
        {dic.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_LIST}
      </UIModalConfirm>
    </>
  );
}

MovieListTitle.defaultProps = {
  title: '',
  isUserList: false,
  onSaveClick: () => { },
  onDeleteClick: () => { },
  dic: {},
};

MovieListTitle.propTypes = {
  title: PropTypes.string,
  isUserList: PropTypes.bool,
  onSaveClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  dic: PropTypes.objectOf(PropTypes.string),
};

export { MovieListTitle };
