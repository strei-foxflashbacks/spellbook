import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>No such page</h1>
      <Link to="/">Home</Link>
    </>
  );
}
export default NotFound;
