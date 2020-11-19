import React from 'react';

import './Main.scss';

const Main = ({ children }) => (
  <main className="main">
    <div className="main__content wrapper">{children}</div>
  </main>
);

export { Main };
