import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import './Nav.scss';

const Nav = () => (
  <nav className="nav">
    <div className="nav__content">
      <ul className="nav-links">
        <li className="nav-links__item">
          <NavLink className="nav-links__link nav-links__link--home" to="/" exact>Home</NavLink>
        </li>
        <li className="nav-links__item">
          <NavLink className="nav-links__link nav-links__link--favourites" to="favourites">Favourites</NavLink>
        </li>
        <li className="nav-links__item">
          <NavLink className="nav-links__link nav-links__link--watch-later" to="watch-later">Watch Later</NavLink>
        </li>
        <li className="nav-links__item">
          <NavLink className="nav-links__link nav-links__link--watched" to="watched">Watched</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export { Nav };
