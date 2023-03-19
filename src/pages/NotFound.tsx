import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <header className="header">
      <h1>No such page</h1>
      <Link to="/" className="header__link">
        Home
      </Link>
    </header>
  );
}
export default NotFound;
