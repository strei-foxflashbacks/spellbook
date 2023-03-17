import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <h1>Ready to cast?</h1>
      <Link to="/about">About us</Link>
      <input type="search" placeholder="search spells" />
    </>
  );
}
export default Main;
