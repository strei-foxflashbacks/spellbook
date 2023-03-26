/* eslint-disable no-alert */
import { ChangeEvent, useEffect, useState } from 'react';
import { FormValues } from 'src/types/FormValues';
import { FormProps } from 'src/types/FormProps';
import { ValidationErrors } from 'src/types/ValidationErrors';

function Form({ setFormValues }: FormProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [role, setRole] = useState('Player');
  const [image, setImage] = useState<string | null>(null);
  const [check, setCheck] = useState(true);
  const [agree, setAgree] = useState(false);
  const [errors, setError] = useState<ValidationErrors>({});

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const input = event.target as HTMLInputElement;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    input.value = '';
    reader.readAsDataURL(file as Blob);
  };

  useEffect(() => {
    const validate = () => {
      setError({});
      if (!agree) {
        setError((state) => ({ ...state, agree }));
      }
      if (title === '') {
        setError((state) => ({ ...state, title }));
      }
      if (date === '') {
        setError((state) => ({ ...state, date }));
      }
    };
    validate();
  }, [agree, title, date]);
  const reset = () => {
    setTitle('');
    setDate('');
    setRole('Player');
    setImage(null);
    setCheck(true);
    setAgree(false);
    setError({});
  };
  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state: FormValues[]) => [
        ...state,
        { title, date, role, image, check, agree },
      ]);
      alert('Your game has been submitted successfully!');
      reset();
    }
  };
  return (
    <div className="main">
      <form className="formfield" onSubmit={submitForm}>
        <label htmlFor="title" className="formfield__label">
          <p className="formfield__title">Title:</p>
          <input
            type="text"
            className="searchbar"
            name="title"
            value={title || ''}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
          />
          <p className="formfield__error">
            {errors?.title === '' && <span className="error-message">* Set your game title</span>}
          </p>
        </label>
        <label htmlFor="date" className="formfield__label">
          <p className="formfield__title">Date:</p>
          <input
            type="date"
            className="searchbar"
            name="date"
            value={date || ''}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
          />
          <p className="formfield__error">
            {errors?.date === '' && <span className="error-message">* Set your game date</span>}
          </p>
        </label>
        <label htmlFor="role" className="formfield__label">
          <p className="formfield__title">Role:</p>
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
        <label htmlFor="type" className="formfield__label">
          <p className="formfield__title">Type:</p>
          <input
            type="radio"
            name="type"
            checked={check}
            value="Campaign"
            onChange={() => setCheck((prev) => !prev)}
          />
          Campaign
          <input
            type="radio"
            name="type"
            checked={!check}
            value="Oneshot"
            onChange={() => setCheck((prev) => !prev)}
          />
          Oneshot
        </label>
        <label htmlFor="image" className="formfield__label">
          <p className="formfield__title">Image:</p>
          <input type="file" className="searchbar" name="image" onChange={handleFileChange} />
        </label>
        <label htmlFor="agreement" className="formfield__label label-agree">
          <div className="formfield_agree">
            <input
              type="checkbox"
              // className="searchbar"
              className="agree"
              name="agreement"
              checked={agree}
              onChange={() => setAgree((prev) => !prev)}
            />
            <p className="formfield__title">I agree to terms of use</p>
          </div>
          <p className="formfield__error">
            {errors?.agree !== undefined && (
              <span className="error-message">* check the agreement first</span>
            )}
          </p>
        </label>
        <button type="submit" className="search-button submit-button" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
