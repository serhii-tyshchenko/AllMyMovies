import PropTypes from 'prop-types';

import { Header } from './Header';
import { Nav } from './Nav';
import { Main } from './Main';

function BaseLayout({ children }) {
  return <div className="container">
    <Header />
    <Nav />
    <Main>
      {children}
    </Main>
  </div>
}

BaseLayout.defaultProps = {
  children: null,
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export { BaseLayout };
