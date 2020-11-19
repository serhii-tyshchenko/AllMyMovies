import React, { useContext } from 'react';
import { Localization } from 'contexts';
import { useDispatch } from 'react-redux';
import { showModal } from 'store/actions';
import { UIIconButton } from 'modules/ui';

const FavouritesBtn = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);

  function handleClick() {
    dispatch(showModal({ modalName: 'fav', data: null }));
  }

  return (
    <UIIconButton icon="heart-empty" title={STR.FAVORITES_LIST} onClick={handleClick} />
  );
};

export { FavouritesBtn };
