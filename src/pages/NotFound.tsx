import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <header>
      <h1>No such page</h1>
      <Link to="/">Home</Link>
    </header>
  );
}
export default NotFound;
