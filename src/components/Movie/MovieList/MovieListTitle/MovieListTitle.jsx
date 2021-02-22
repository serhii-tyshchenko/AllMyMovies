/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { UIIconButton, UIInput } from 'components';

import './MovieListTitle.scss';

const MovieListTitle = ({
  title, isUserList, onSaveClick, onDeleteClick,
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
    if (window.confirm('Are you sure you want to delete this list?')) {
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
          {!isEditMode && (<UIIconButton icon="pencil" title="edit list" onClick={handleEditClick} />)}
          {isEditMode && (<UIIconButton icon="ok" title="Save changes" onClick={handleSaveClick} />)}
          {isEditMode && (<UIIconButton icon="trash" title="Delete list" onClick={handleDeleteClick} />)}
        </>
      )}
    </div>
  );
};

export { MovieListTitle };
