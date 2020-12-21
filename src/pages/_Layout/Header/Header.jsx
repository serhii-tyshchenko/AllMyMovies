import {
  ThemeToggler, LanguageSelector, AuthBtn, SearchMovieForm,
} from 'components';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content wrapper">
      <Link to="/" className="header__logo">{process.env.REACT_APP_APP_NAME}</Link>
      <SearchMovieForm />
      <div className="header__menu">
        <LanguageSelector />
        <ThemeToggler />
        <AuthBtn />
      </div>
    </div>
  </header>
);

export { Header };
