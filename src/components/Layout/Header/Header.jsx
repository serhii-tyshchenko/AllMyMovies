import { Link } from 'react-router-dom';
import {
  ThemeToggler, LanguageSelector, AuthBtn, SearchMovieForm,
} from 'components';


const NAME_SPACE = 'header';

function Header() {
  return (
    <header className={NAME_SPACE}>
      <Link to="/" className={`${NAME_SPACE}__logo`}>AllMyMovies</Link>
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
