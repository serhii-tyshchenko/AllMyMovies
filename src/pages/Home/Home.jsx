import {
  MovieList, Nav, Main, Header,
} from 'components';

const Home = () => (
  <div className="container">
    <Header />
    <Nav />
    <Main>
      <MovieList />
    </Main>
  </div>
);

export { Home };
