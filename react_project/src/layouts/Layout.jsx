export const Main = ({ children }) => {
  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}><h1>Header</h1></header>
      <main>
        {children}
      </main>
      <footer style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}><h2>Footer</h2></footer>
    </>
  );
};