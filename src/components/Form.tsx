/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
import { useForm } from 'react-hook-form';
import { FormValues } from 'src/types/FormValues';
import { FormProps } from 'src/types/FormProps';

function Form({ setFormValues }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    const reader = new FileReader();
    reader.onloadend = () => {
      formData.append('image', reader.result as string);
    };
    setFormValues((state: FormValues[]) => [...state, data]);
    alert('Your game has been submitted successfully!');
    reset();
  };

  return (
    <div className="main">
      <form className="formfield" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <label htmlFor="title" className="formfield__label">
          <p className="formfield__title">Title:</p>
          <input type="text" className="searchbar" {...register('title', { required: true })} />
          <p className="formfield__error">
            {errors.title && <span className="error-message">* Set your game title</span>}
          </p>
        </label>
        <label htmlFor="date" className="formfield__label">
          <p className="formfield__title">Date:</p>
          <input type="date" className="searchbar" {...register('date', { required: true })} />
          <p className="formfield__error">
            {errors.date && <span className="error-message">* Set your game date</span>}
          </p>
        </label>
        <label htmlFor="role" className="formfield__label">
          <p className="formfield__title">Role:</p>
          <select className="searchbar" {...register('role', { required: true })}>
            <option value="Player">Player</option>
            <option value="DM">DM</option>
            <option value="Viewer">Viewer</option>
          </select>
        </label>
        <label htmlFor="type" className="formfield__label">
          <p className="formfield__title">Type:</p>
          <input type="radio" {...register('type', { required: true })} value="Campaign" />
          Campaign
          <input type="radio" {...register('type', { required: true })} value="Oneshot" />
          Oneshot
        </label>
        <label htmlFor="image" className="formfield__label">
          <p className="formfield__title">Image:</p>
          <input type="file" className="searchbar" {...register('image')} />
        </label>
        <label htmlFor="agreement" className="formfield__label label-agree">
          <div className="formfield_agree">
            <input type="checkbox" className="agree" {...register('agree', { required: true })} />
            <p className="formfield__title">I agree to terms of use</p>
          </div>
          <p className="formfield__error">
            {errors.agree && <span className="error-message">* check the agreement first</span>}
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
