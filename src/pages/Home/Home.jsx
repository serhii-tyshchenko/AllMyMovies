import { MovieList, Header, Nav } from 'components';

const Home = () => (
  <>
    <Header />
    <main className="main">
      <Nav />
      <div className="main__content wrapper">
        <MovieList />
      </div>
    </main>
  </>
);

export { Home };
