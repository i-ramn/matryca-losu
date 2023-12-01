import { FormValues, createInitialValues } from '@/helpers/createInitialValues';
import * as yup from 'yup';

import { useTranslate } from '@/hooks/useTranslate';

export const useFateForm = () => {
  const { handleTranslate } = useTranslate();

  const formValues: FormValues[] = [
    { name: 'name', placeholder: 'Antoni', type: 'text' },
    {
      name: 'date',
      placeholder: handleTranslate('home.free-calculator.placeholder.year'),
    },
    {
      name: 'appeal',
      placeholder: handleTranslate('home.free-calculator.placeholder.appeal'),
      dropdown: ['male', 'female'],
    },
    {
      name: 'gender',
      placeholder: handleTranslate('home.free-calculator.placeholder.gender'),
      dropdown: ['male', 'female'],
    },
  ];

  const initialValues = createInitialValues(formValues);

  const validationSchema = yup.object({
    name: yup.string().required('Please enter a name'),
    date: yup.string().required('Please enter a date'),
    appeal: yup.string().required('Please select an appeal'),
    gender: yup.string().required('Please select a gender'),
  });

  return { formValues, initialValues, validationSchema };
};
