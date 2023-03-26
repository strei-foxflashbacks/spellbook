import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

function FormPage() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [role, setRole] = useState('Player');
  const [agree, setAgree] = useState(false);
  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(title, date);
  };
  return (
    <>
      <header className="header">
        <h1>Game sheldue</h1>
        <Link to="/" className="header__link">
          Home
        </Link>
      </header>
      <div className="main">
        <form className="searchfield" onSubmit={submitForm}>
          <label htmlFor="title" className="searchfield">
            Title:
            <input
              type="text"
              className="searchbar"
              name="title"
              value={title || ''}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
              // placeholder="search spells"
              // defaultValue={getLSValue('spell')}
            />
          </label>
          <label htmlFor="date" className="searchfield">
            Date:
            <input
              type="date"
              className="searchbar"
              name="date"
              value={date || ''}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
              // placeholder="search spells"
              // defaultValue={getLSValue('spell')}
            />
          </label>
          <label htmlFor="role" className="searchfield">
            Role:
            <select
              className="searchbar"
              name="role"
              value={role || ''}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setRole(event.target.value)}
            >
              <option>Player</option>
              <option>DM</option>
              <option>Viewer</option>
            </select>
          </label>
          <label htmlFor="background" className="searchfield">
            Background image:
            <input
              type="radio"
              className="background"
              name="background"
              // value={date}
              // onChange={(event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
              // placeholder="search spells"
              // defaultValue={getLSValue('spell')}
            />
            <input
              type="radio"
              className="background"
              name="background"
              // value={date}
              // onChange={(event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
              // placeholder="search spells"
              // defaultValue={getLSValue('spell')}
            />
          </label>
          <label htmlFor="date" className="searchfield">
            Image:
            <input
              type="file"
              className="searchbar"
              name="date"
              // value={date}
              // onChange={(event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
              // placeholder="search spells"
              // defaultValue={getLSValue('spell')}
            />
          </label>
          <label htmlFor="agreement" className="searchfield">
            I agree to terms of use:
            <input
              type="checkbox"
              className="searchbar"
              name="date"
              checked={agree}
              onChange={() => setAgree((prev) => !prev)}
              // value={date}
              // onChange={(event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
              // placeholder="search spells"
              // defaultValue={getLSValue('spell')}
            />
          </label>
          <button type="submit" className="search-button" value="Send">
            Submit
          </button>
        </form>
        {/* <Spellcards /> */}
      </div>
    </>
  );
}
export default FormPage;
