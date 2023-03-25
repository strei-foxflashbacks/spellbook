import { Link } from 'react-router-dom';

function FormPage() {
  return (
    <>
      <header className="header">
        <h1>Game sheldue</h1>
        <Link to="/" className="header__link">
          Home
        </Link>
      </header>
      <div className="main">
        <fieldset className="searchfield">
          <input
            type="search"
            className="searchbar"
            placeholder="search spells"
            // onChange={handleChange}
            // defaultValue={getLSValue('spell')}
          />
          <button type="button" className="search-button">
            Search
          </button>
        </fieldset>
        {/* <Spellcards /> */}
      </div>
    </>
  );
}
export default FormPage;
