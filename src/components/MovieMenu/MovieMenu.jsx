/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem, removeItem,
} from 'store/actions';
// import PropTypes from 'prop-types';
import { Localization } from 'contexts';
import { UIIconButton } from 'components';

import './MovieMenu.scss';

const MovieMenu = (props) => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const [isMenuOpened, toggleMenu] = useState(false);
  const { id } = props;
  const uid = useSelector((state) => state.user.uid);
  const saved = useSelector((state) => state.data).find((item) => item.id === id);
  const searched = useSelector((state) => state.searchResults).find((item) => item.imdbID === id);
  const movie = saved || searched;
  let lists = movie?.lists ? movie.lists : [];
  function handleMenuClick() {
    toggleMenu(!isMenuOpened);
  }
  function handleChange(evt) {
    const list = evt.target.value;
    if (lists.includes(list)) {
      lists = lists.filter((item) => item !== list);
    } else {
      lists = [...lists, list];
    }
    if (lists.length) {
      dispatch(updateItem(uid, { ...movie, id, lists }));
    } else {
      dispatch(removeItem(uid, id));
    }
    toggleMenu(!isMenuOpened);
  }

  return (
    <div className="movie-menu">
      <UIIconButton onClick={handleMenuClick} icon="menu" extraClassName="movie-menu__toggler" />
      {isMenuOpened && (
        <ul className="movie-menu__items">
          <li className="movie-menu__item">
            <input type="checkbox" id="watch-later" value="watch-later" onChange={handleChange} checked={lists.includes('watch-later')} />
            <label htmlFor="watch-later">{STR.WATCH_LATER}</label>
          </li>
          <li className="movie-menu__item">
            <input type="checkbox" id="watched" value="watched" onChange={handleChange} checked={lists.includes('watched')} />
            <label htmlFor="watched">{STR.WATCHED}</label>
          </li>
          <li className="movie-menu__item">
            <input type="checkbox" id="favourites" value="favourites" onChange={handleChange} checked={lists.includes('favourites')} />
            <label htmlFor="favourites">{STR.FAVOURITES}</label>
          </li>
        </ul>
      )}
    </div>
  );
};

export { MovieMenu };
