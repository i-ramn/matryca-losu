import { createInitialValues, FormValues } from '@/helpers/createInitialValues';
import * as yup from 'yup';

import { useTranslate } from '@/hooks/useTranslate';
import { useDispatch } from 'react-redux';
import { GET_CALCULATIONS_REQUEST } from '../actions';
import { useFormik } from 'formik';

export const useFateForm = () => {
  const { handleTranslate } = useTranslate();
  const dispatch = useDispatch();

  const formValues: FormValues[] = [
    { name: 'name', placeholder: 'Antoni', type: 'text' },
    {
      name: 'date',
      placeholder: handleTranslate('home.free-calculator.placeholder.year'),
    },
  ];

  const initialValues = createInitialValues(formValues);

  const currentYear = new Date().getFullYear();

  const validationSchema = yup.object({
    name: yup.string().required('Proszę podać imię'),
    date: yup
      .string()
      .matches(
        /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
        'Nieprawidłowy format daty. Proszę użyć dd.mm.rrrr',
      )
      .required('Proszę podać datę')
      .length(10, 'Proszę użyć formatu dd.mm.rrrr')
      .test('maxYear', 'Rok nie może przekraczać bieżącego roku', function (value) {
        const year = parseInt(value.split('.')[2], 10);
        return year <= currentYear;
      }),
  });

  const formatText = (text: string) => {
    const regex = /^(\d{0,2})\.?(\d{0,2})\.?(\d{0,4})$/g;

    return text.replace(regex, (_, day, month, year) => {
      let formatted = '';
      if (day) formatted += day.slice(0, 2);
      if (month) formatted += `.${month.slice(0, 2)}`;
      if (year) formatted += `.${year.slice(0, 4)}`;

      return formatted;
    });
  };

  return { formValues, initialValues, validationSchema, formatText };
};
