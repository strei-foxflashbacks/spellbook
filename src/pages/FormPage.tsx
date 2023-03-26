import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormValues } from 'src/types/FormValues';
import Form from '../components/Form';

function FormPage() {
  const [formValues, setFormValues] = useState<FormValues[]>([]);
  const formCards = formValues.map((item, i) => {
    return (
      <li key={`${item.title}_${item.date}`} id={`${i}`} className="spells__card">
        {item.title}
      </li>
    );
  });
  return (
    <>
      <header className="header">
        <h1>Game sheldue</h1>
        <Link to="/" className="header__link">
          Home
        </Link>
      </header>
      <div className="main">
        <Form setFormValues={setFormValues} />
        <ul className="spells__wrapper">{formCards}</ul>
      </div>
    </>
  );
}
export default FormPage;
