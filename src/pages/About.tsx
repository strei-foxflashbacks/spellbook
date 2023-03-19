import { Link } from 'react-router-dom';

function About() {
  return (
    <header className="header">
      <h1>About us</h1>
      <Link to="/" className="header__link">
        Home
      </Link>
    </header>
  );
}
export default About;
