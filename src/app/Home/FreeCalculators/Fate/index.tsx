'use client';
import { FormattedMessage } from 'react-intl';
import { useFormik } from 'formik';
import { useCallback } from 'react';

import { DefaultButton } from '@/components/Buttons/DefaultButton';
import { DefaultInput } from '@/components/Input';
import { useFateForm } from './useFateForm';
import { useTranslate } from '@/hooks/useTranslate';
import { MessageIds } from '@/types/i18n';

export const FateCalculator = () => {
  const { formValues, initialValues } = useFateForm();
  const { handleTranslate } = useTranslate();

  const formik = useFormik({
    initialValues,
    onSubmit: (val) => console.log(val),
  });

  const handleDropdownSelect = useCallback((fieldName: string, selectedValue: string) => {
    formik.handleChange({
      target: {
        name: fieldName,
        value: selectedValue,
      },
    });
  }, []);

  return (
    <div>
      <h2 className="mb-5 text-purple">
        <FormattedMessage id="home.free-calculator.fate.title" />
      </h2>
      <p>
        <FormattedMessage id="home.free-calculator.fate.description" />
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2 md:gap-y-3"
      >
        {formValues.map(({ name, placeholder, type, dropdown }) => (
          <DefaultInput
            key={name}
            value={formik.values[name]}
            name={name}
            label={handleTranslate(name as MessageIds)}
            onChange={formik.handleChange}
            placeholder={placeholder}
            type={type}
            dropdown={Array.isArray(dropdown)}
            dropdownData={dropdown}
            onDropdownSelect={(selectedValue) => handleDropdownSelect(name, selectedValue)}
          />
        ))}
        <DefaultButton size="md" messageId="button.enter" type="submit" className="mt-6" />
      </form>
    </div>
  );
};
