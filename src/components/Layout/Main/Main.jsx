/* eslint-disable react/prop-types */
import './Main.scss';

const Main = ({ children }) => (
  <main className="main">
    <div className="main__content">
      {children}
    </div>
  </main>
);

export { Main };
