import { OnSubmit, useForm } from '@/hooks/useForm';
import { HandleTranslateFn, useTranslate } from '@/hooks/useTranslate';
import * as yup from 'yup';

const getSchema = (translate: HandleTranslateFn) =>
  yup.object({
    name: yup.string().email().required(''),
    dateOfBirth: yup.string().required(''),
    gender: yup.string().required(''),
    appeal: yup.array().of(yup.string()),
  });

export type FateCalculateFormData = yup.Asserts<ReturnType<typeof getSchema>> & {
  name: string;
  dateOfBirth: string;
  gender: string;
  appeal: string[];
};

export type OnSubmitFateForm = OnSubmit<FateCalculateFormData>;

export const useFateSubmitForm = (onSubmit: OnSubmitFateForm) => {
  const { handleTranslate } = useTranslate();

  return useForm<FateCalculateFormData>({
    initialValues: {
      name: '',
      dateOfBirth: '',
      gender: '',
      appeal: ['male', 'female'],
    },
    onSubmit,
    validationSchema: getSchema(handleTranslate),
  });
};
