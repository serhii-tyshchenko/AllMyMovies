import React from 'react';
import { ShoppingListContainer } from 'modules/data';
import { BaseLayout } from '../_Layout';

const Home = () => (
  <BaseLayout>
    <ShoppingListContainer />
  </BaseLayout>
);

export { Home };
