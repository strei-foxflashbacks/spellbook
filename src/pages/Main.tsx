import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import getLSValue from '../components/getLSValue';
import setLSValue from '../components/setLSValue';
import Spellcards from '../components/Spellcards';

function Main() {
  const [message, setMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    setLSValue('spell', event.target.value);
    return message;
  };

  return (
    <>
      <header>
        <h1>Ready to cast?</h1>
        <Link to="/about">About us</Link>
      </header>
      <body>
        <fieldset className="searchfield">
          <input
            type="search"
            placeholder="search spells"
            onChange={handleChange}
            defaultValue={getLSValue('spell')}
          />
          <button type="button">Search</button>
        </fieldset>
        <Spellcards />
      </body>
    </>
  );
}
export default Main;
