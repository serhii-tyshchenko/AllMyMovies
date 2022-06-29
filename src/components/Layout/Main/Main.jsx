/* eslint-disable react/prop-types */
import './Main.scss';

function Main({ children }) {
  return <main className="main">
    <div className="main__content">
      {children}
    </div>
  </main>
}

export { Main };
