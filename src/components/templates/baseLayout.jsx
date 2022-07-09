import PropTypes from 'prop-types';

import { Header, Nav, Main } from 'components/organisms';

function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        {children}
      </Main>
    </>
  )
}

BaseLayout.defaultProps = {
  children: null,
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export { BaseLayout };
