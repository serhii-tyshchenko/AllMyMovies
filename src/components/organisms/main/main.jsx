import PropTypes from 'prop-types';

import './main.scss';

const NAME_SPACE = 'main';

function Main({ children }) {
  return <main className={NAME_SPACE}>
    <div className={`${NAME_SPACE}__content`}>
      {children}
    </div>
  </main>
}

Main.defaultProps = {
  children: null,
};

Main.propTypes = {
  children: PropTypes.node,
};

export { Main };
