import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormValues } from 'src/types/FormValues';
import Form from '../components/Form';

function FormPage() {
  const [formValues, setFormValues] = useState<FormValues[]>([]);
  const formCards = formValues.map((item, i) => {
    const styles = {
      backgroundImage: `url(${item.image})`,
      backgroundSize: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
    };
    return (
      <li key={`${item.title}_${item.date}`} id={`${i}`} className="spells__card" style={styles}>
        <div className="spell__info">
          <div className="spell__casting-time">
            <b>Date: </b>
            <i> {item.date}</i>
          </div>
          <div className="spell__distance">
            <b>Game type: </b>
            <i>{item.check === true ? 'Campaign' : 'Oneshot'}</i>
          </div>
          <div className="spell__components">
            <b>Role: </b>
            <i>{item.role}</i>
          </div>
        </div>
        <h3 className="spell__name">{item.title}</h3>
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
