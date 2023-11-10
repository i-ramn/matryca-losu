import { InputHTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { MessageIds } from '../types/i18n';

type InitialValues = {
  [key: string]: string;
};

type InnputType = InputHTMLAttributes<HTMLInputElement> & {
  type: HTMLInputTypeAttribute;
};

export type FormValues = {
  name: string;
  placeholder: string;
  dropdown?: string[] | MessageIds[];
  value?: string;
  type?: HTMLInputTypeAttribute;
};

export const createInitialValues = (arr: FormValues[]): InitialValues => {
  const initialValues: InitialValues = {};

  for (const item of arr) {
    if (item.value !== undefined) {
      initialValues[item.name] = item.value;
    } else {
      initialValues[item.name] = '';
    }
  }

  return initialValues;
};
