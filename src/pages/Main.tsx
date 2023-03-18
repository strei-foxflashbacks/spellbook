import { Link } from 'react-router-dom';
import Spellcards from '../components/Spellcards';

function Main() {
  return (
    <>
      <header>
        <h1>Ready to cast?</h1>
        <Link to="/about">About us</Link>
      </header>
      <body>
        <fieldset className="searchfield">
          <input type="search" placeholder="search spells" />
          <button type="button">Search</button>
        </fieldset>
        <Spellcards />
      </body>
    </>
  );
}
export default Main;
