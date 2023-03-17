import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <header>
        <h1>Ready to cast?</h1>
        <Link to="/about">About us</Link>
      </header>
      <input type="search" placeholder="search spells" />
    </>
  );
}
export default Main;
