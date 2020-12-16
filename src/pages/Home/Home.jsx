import React from 'react';
import { MoviesListContainer } from 'modules/data';
import { Header, Nav } from '../_Layout';

const Home = () => (
  <>
    <Header />
    <main className="main">
      <Nav />
      <div className="main__content wrapper">
        <MoviesListContainer />
      </div>
    </main>
  </>
);

export { Home };
