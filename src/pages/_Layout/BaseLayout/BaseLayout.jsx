import React from 'react';
import { Header, Main } from 'pages/_Layout';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export { BaseLayout };
