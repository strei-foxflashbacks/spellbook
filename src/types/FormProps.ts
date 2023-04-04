import { FormValues } from './FormValues';

export interface FormProps {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues[]>>;
}
