import {
  ThemeToggler, LanguageSelector, AuthBtn, SearchMovieForm,
} from 'components';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return <header className="header">
    <div className="header__content">
      <Link to="/" className="header__logo">AllMyMovies</Link>
      <SearchMovieForm />
      <div className="header__menu">
        <LanguageSelector />
        <ThemeToggler />
        <AuthBtn />
      </div>
    </div>
  </header>
}

export { Header };
