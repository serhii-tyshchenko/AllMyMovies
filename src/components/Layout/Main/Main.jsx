/* eslint-disable react/prop-types */
function Main({ children }) {
  return <main className="main">
    <div className="main__content">
      {children}
    </div>
  </main>
}

export { Main };
