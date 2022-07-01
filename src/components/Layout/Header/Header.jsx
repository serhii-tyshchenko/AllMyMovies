import {
  ThemeToggler, LanguageSelector, AuthBtn, SearchMovieForm,
} from 'components';
import { Link } from 'react-router-dom';

const NAME_SPACE = 'header';

function Header() {
  return (<header className={NAME_SPACE}>
    <div className={`${NAME_SPACE}__content`}>
      <Link to="/" className={`${NAME_SPACE}__logo`}>AllMyMovies</Link>
      <SearchMovieForm />
      <div className={`${NAME_SPACE}__menu`}>
        <LanguageSelector />
        <ThemeToggler />
        <AuthBtn />
      </div>
    </div>
  </header>)
}

export { Header };
