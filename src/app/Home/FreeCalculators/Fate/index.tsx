'use client';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormik } from 'formik';

import { DefaultButton } from '@/components/Buttons/DefaultButton';
import { DefaultInput } from '@/components/Input';
import { FormValues, createInitialValues } from '@/helpers/createInitialValues';
import { useFormValues } from './useFormValues';

export const FateCalculator = () => {
  const { formValues, initialValues } = useFormValues();

  const formik = useFormik({
    initialValues,
    onSubmit: (val) => console.log(val),
  });

  return (
    <div>
      <h2 className="mb-5 text-purple">
        <FormattedMessage id="home.free-calculator.fate.title" />
      </h2>
      <p>
        <FormattedMessage id="home.free-calculator.fate.description" />
      </p>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-x-28 gap-y-3">
        {formValues.map(({ name, placeholder, type }) => (
          <DefaultInput
            key={name}
            value={formik.values[name]}
            name={name}
            label={name}
            onChange={formik.handleChange}
            placeholder={placeholder}
            type={type}
          />
        ))}
        <DefaultButton messageId="navigation.blog" type="submit" />
      </form>
    </div>
  );
};
