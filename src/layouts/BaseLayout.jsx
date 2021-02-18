import {
  Nav, Main, Header,
} from 'components';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => (
  <div className="container">
    <Header />
    <Nav />
    <Main>
      {children}
    </Main>
  </div>
);

BaseLayout.defaultProps = {
  children: null,
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export { BaseLayout };
