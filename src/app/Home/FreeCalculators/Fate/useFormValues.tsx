import { FormValues, createInitialValues } from '@/helpers/createInitialValues';

import { useTranslate } from '@/hooks/useTranslate';

export const useFormValues = () => {
  const { handleTranslate } = useTranslate();

  const formValues: FormValues[] = [
    { name: handleTranslate('name'), placeholder: 'Antoni', type: 'text' },
    {
      name: handleTranslate('date-of-birth'),
      placeholder: handleTranslate('home.free-calculator.placeholder.year'),
    },
    {
      name: handleTranslate('appeal'),
      placeholder: handleTranslate('home.free-calculator.placeholder.appeal'),
      dropdown: ['male', 'female'],
    },
    {
      name: handleTranslate('gender'),
      placeholder: handleTranslate('home.free-calculator.placeholder.gender'),
      value: 'male',
    },
  ];

  const initialValues = createInitialValues(formValues);

  return { formValues, initialValues };
};
