import { Link } from 'react-router-dom';
import {
  ThemeToggler, LanguageSelector, AuthBtn, SearchMovieForm,
} from 'components/molecules';

import './header.scss';

const NAME_SPACE = 'header';

function Header() {
  return (
    <header className={NAME_SPACE}>
      <Link to="/" className={`${NAME_SPACE}__logo`}>{process.env.REACT_APP_NAME}</Link>
      <SearchMovieForm />
      <div className={`${NAME_SPACE}__menu`}>
        <LanguageSelector />
        <ThemeToggler />
        <AuthBtn />
      </div>
    </header>
  )
}

export { Header };
