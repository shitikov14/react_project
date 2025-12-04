export const Main = ({ children }) => {
  return (
    <>
      <header><h1>Header</h1></header>
      <main>
        {children}
      </main>
      <footer><h2>Footer</h2></footer>
    </>
  );
};