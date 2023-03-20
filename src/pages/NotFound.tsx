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
      </div>
    </>
  );
}
export default NotFound;
