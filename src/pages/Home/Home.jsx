import React from 'react';
import { MoviesListContainer } from 'modules/data';
import { BaseLayout } from '../_Layout';

const Home = () => (
  <BaseLayout>
    <MoviesListContainer />
  </BaseLayout>
);

export { Home };
