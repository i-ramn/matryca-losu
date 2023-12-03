import { FormValues, createInitialValues } from '@/helpers/createInitialValues';
import { useTranslate } from '@/hooks/useTranslate';
import { MessageIds } from '@/types/i18n';

export const useChildrenForm = () => {
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
  ];

  const initialValues = createInitialValues(formValues);

  return { formValues, initialValues };
};
