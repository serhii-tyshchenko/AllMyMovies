/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem, removeItem } from 'store/actions';
import { getUserId, getMovieById, getSearchResultById } from 'store/selectors';
import { Localization } from 'contexts';
import { UIIconButton } from 'components';

import './MovieMenu.scss';

const MovieMenu = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const uid = useSelector(getUserId);
  const saved = useSelector((state) => getMovieById(state, id));
  const searched = useSelector((state) => getSearchResultById(state, id));
  const STR = useContext(Localization);
  const [isMenuOpened, toggleMenu] = useState(false);
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
      <UIIconButton onClick={handleMenuClick} icon={isMenuOpened ? 'cancel' : 'ellipsis-vert'} extraClassName="movie-menu__toggler" />
      {isMenuOpened && (
        <ul className="movie-menu__items">
          <li className="movie-menu__item">
            <label htmlFor="watch-later">
              <input type="checkbox" id="watch-later" value="watch-later" onChange={handleChange} checked={lists.includes('watch-later')} />
              {STR.WATCH_LATER}
            </label>
          </li>
          <li className="movie-menu__item">
            <label htmlFor="watched">
              <input type="checkbox" id="watched" value="watched" onChange={handleChange} checked={lists.includes('watched')} />
              {STR.WATCHED}
            </label>
          </li>
          <li className="movie-menu__item">
            <label htmlFor="favourites">
              <input type="checkbox" id="favourites" value="favourites" onChange={handleChange} checked={lists.includes('favourites')} />
              {STR.FAVOURITES}
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};

export { MovieMenu };