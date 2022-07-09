import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { IconButton, Input, ModalConfirm } from 'components/ui';
import { useToggle } from 'hooks';

import './movieListTitle.scss';

function MovieListTitle(props) {
  const {
    title, isUserList, onSaveClick, onDeleteClick, dic,
  } = props;

  const [listTitle, setListTitle] = useState(title);
  const [isEditMode, toggleEditMode] = useToggle();
  const [isConfirmModalOpen, toggleConfirmModal] = useToggle();
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
        <Input
          value={listTitle}
          onChange={handleChange}
          disabled={!isEditMode}
          extraClassName="movie-list-title__input"
        />
        {isUserList && (
          <>
            {!isEditMode && (<IconButton icon="pencil" title={dic.EDIT_LIST} onClick={toggleEditMode} />)}
            {isEditMode && (<IconButton icon="ok" title={dic.SAVE_CHANGES} onClick={handleSaveClick} />)}
            {isEditMode && (<IconButton icon="trash" title={dic.DELETE_LIST} onClick={toggleConfirmModal} />)}
          </>
        )}
      </div>
      <ModalConfirm
        title={dic.WARNING}
        isOpen={isConfirmModalOpen}
        onClose={toggleConfirmModal}
        onConfirm={handleConfirmDeleteClick}
        closeBtnTitle={dic.CLOSE}
        confirmBtnTitle={dic.CONFIRM}
        cancelBtnTitle={dic.CANCEL}
      >
        {dic.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_LIST}
      </ModalConfirm>
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
