import { useField } from 'formik';
import { ChangeEvent, FocusEvent } from 'react';

type FieldValidationResult = {
  field: {
    name: string;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  meta: {
    error?: string;
    touched: boolean;
    isValid: boolean;
  };
};

export const useFieldValidation = (fieldName: string): FieldValidationResult => {
  const [field, meta] = useField(fieldName);

  const isValid: boolean = !meta.touched || !meta.error;

  return {
    field: {
      name: field.name,
      onBlur: field.onBlur as (e: FocusEvent<HTMLInputElement>) => void,
      onChange: field.onChange as (e: ChangeEvent<HTMLInputElement>) => void,
      value: field.value as string,
    },
    meta: { ...meta, isValid },
  };
};
