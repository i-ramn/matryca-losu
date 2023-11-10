import { FormValues, createInitialValues } from '@/helpers/createInitialValues';
import { useTranslate } from '@/hooks/useTranslate';

export const useCompatibilityForm = () => {
  const { handleTranslate } = useTranslate();
  const formValues: FormValues[] = [
    {
      name: 'partner1',
      placeholder: handleTranslate('home.free-calculator.placeholder.year'),
      type: 'text',
    },
    {
      name: 'partner2',
      placeholder: handleTranslate('home.free-calculator.placeholder.year'),
      type: 'text',
    },
  ];

  const initialValues = createInitialValues(formValues);

  return { formValues, initialValues };
};
