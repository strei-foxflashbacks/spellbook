import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import getLSValue from '../components/getLSValue';
import setLSValue from '../components/setLSValue';
import Spellcards from '../components/Spellcards';

function Main() {
  const [message, setMessage] = useState('');
  const {
    handleSubmit,
    reset,
    formState: { submitCount },
  } = useForm();
  const [param, setParam] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    setLSValue('spell', event.target.value);
    setParam('');
    return message;
  };

  const onSubmit = () => {
    setParam(getLSValue('spell'));
    reset();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      <header className="header">
        <h1>Ready to cast?</h1>
        <Link to="/about" className="header__link">
          About us
        </Link>
        <Link to="/form" className="header__link">
          Form
        </Link>
      </header>
      <div className="main">
        <form className="searchfield" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="search"
            className="searchbar"
            placeholder="search spells"
            onChange={handleChange}
            defaultValue={getLSValue('spell')}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <Spellcards index={param} submitCount={submitCount} />
      </div>
    </>
  );
}
export default Main;
