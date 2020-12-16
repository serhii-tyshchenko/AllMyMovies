import React from 'react';
import { AuthBtn } from 'modules/user';
import { ThemeToggler, LanguageSelector } from 'modules/settings';
import { SearchMovieFormContainer } from 'modules/data';
import {
  Link,
} from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content wrapper">
      <Link to="/" className="header__logo">MyMoviesList</Link>
      <SearchMovieFormContainer />
      <div className="header__menu">
        <LanguageSelector />
        <ThemeToggler />
        <AuthBtn />
      </div>
    </div>
  </header>
);

export { Header };
