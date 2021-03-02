/* eslint-disable no-alert */
/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { UIIconButton, UIInput } from 'components';

import './MovieListTitle.scss';

const MovieListTitle = ({
  title, isUserList, onSaveClick, onDeleteClick, STR,
}) => {
  const [listTitle, setListTitle] = useState(title);
  const [oldTitle, setOldTitle] = useState(title);
  const [isEditMode, setEditMode] = useState(false);
  useEffect(() => {
    setListTitle(title);
    setOldTitle(title);
  }, [title]);

  function handleEditClick() {
    setEditMode(!isEditMode);
  }

  function handleSaveClick() {
    if (listTitle !== oldTitle) {
      onSaveClick(listTitle);
    }
    setEditMode(false);
  }

  function handleChange(evt) {
    setListTitle(evt.target.value);
  }

  function handleDeleteClick() {
    if (window.confirm(STR.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_LIST)) {
      setEditMode(false);
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
          {!isEditMode && (<UIIconButton icon="pencil" title={STR.EDIT_LIST} onClick={handleEditClick} />)}
          {isEditMode && (<UIIconButton icon="ok" title={STR.SAVE_CHANGES} onClick={handleSaveClick} />)}
          {isEditMode && (<UIIconButton icon="trash" title={STR.DELETE_LIST} onClick={handleDeleteClick} />)}
        </>
      )}
    </div>
  );
};

export { MovieListTitle };
