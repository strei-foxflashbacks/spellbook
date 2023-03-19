import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <header className="header">
        <h1>No such page</h1>
        <Link to="/" className="header__link">
          Home
        </Link>
      </header>
      <div className="not-found">
        <div>404</div>
        <img src="./src/assets/nat1.png" alt="natural 1" className="not-found__img" />
      </div>
    </>
  );
}
export default NotFound;
