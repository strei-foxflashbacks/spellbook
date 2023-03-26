import { ChangeEvent, useState } from 'react';
import { FormValues } from 'src/types/FormValues';
import { FormProps } from 'src/types/FormProps';

function Form({ setFormValues }: FormProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [role, setRole] = useState('Player');
  const [image, setImage] = useState('');
  const [check, setCheck] = useState(true);
  const [agree, setAgree] = useState(false);
  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFormValues((state: FormValues[]) => [...state, { title, date, role, image, check, agree }]);
  };
  return (
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
        <label htmlFor="type" className="searchfield">
          Type:
          <input
            type="radio"
            name="type"
            checked={check || false}
            value="Campaign"
            onChange={() => setCheck((prev) => !prev)}
          />
          Campaign
          <input
            type="radio"
            name="type"
            checked={check || true}
            value="Oneshot"
            onChange={() => setCheck((prev) => !prev)}
          />
          Oneshot
        </label>
        <label htmlFor="image" className="searchfield">
          Image:
          <input
            type="file"
            className="searchbar"
            name="image"
            value={image || ''}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setImage(event.target.value)}
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
          />
        </label>
        <button type="submit" className="search-button" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
