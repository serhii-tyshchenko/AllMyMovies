/* eslint-disable no-alert */
/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { UIIconButton, UIInput } from 'components';
import { useToggle } from 'hooks';

function MovieListTitle(props) {
  const {
    title, isUserList, onSaveClick, onDeleteClick, dic,
  } = props;

  const [listTitle, setListTitle] = useState(title);
  const [oldTitle, setOldTitle] = useState(title);
  const [isEditMode, toggleEditMode] = useToggle();
  useEffect(() => {
    setListTitle(title);
    setOldTitle(title);
  }, [title]);

  const handleSaveClick = () => {
    if (listTitle !== oldTitle) {
      onSaveClick(listTitle);
    }
    toggleEditMode();
  }

  const handleChange = (evt) => setListTitle(evt.target.value);

  const handleDeleteClick = () => {
    if (window.confirm(dic.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_LIST)) {
      toggleEditMode();
      onDeleteClick();
    }
  }

  return (
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
          {isEditMode && (<UIIconButton icon="trash" title={dic.DELETE_LIST} onClick={handleDeleteClick} />)}
        </>
      )}
    </div>
  );
}

export { MovieListTitle };
