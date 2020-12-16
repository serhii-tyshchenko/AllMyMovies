import React from 'react';
import { MovieList } from 'components';
import { Header, Nav } from '../_Layout';

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
