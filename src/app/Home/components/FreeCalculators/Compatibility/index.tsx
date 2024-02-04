'use client';
import { FC } from 'react';
import { useCompatibilityForm } from './useCompatibilityForm';
import { useFormik } from 'formik';
import { DefaultInput } from '@/components/Input';
import { DefaultButton } from '@/components/Buttons/DefaultButton';
import { useIntl } from 'react-intl';

interface CompatibilityProps {}

export const Compatibility: FC<CompatibilityProps> = ({}) => {
  const { formValues, initialValues } = useCompatibilityForm();
  const intl = useIntl();

  const formik = useFormik({
    initialValues,
    onSubmit: (val) => console.log(val),
  });

  return (
    <div>
      <h2 className="mb-5 text-purple">
        {intl.formatMessage({ id: 'home.free-calculator.compatibility.title' })}
      </h2>
      <p className="mb-10">
        {intl.formatMessage({ id: 'home.free-calculator.compatibility.description' })}
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2 md:gap-y-3"
      >
        {formValues.map((input, index) => (
          <div key={input.name}>
            <p>{`${intl.formatMessage({ id: 'partner' })} ${index + 1}`}</p>
            <DefaultInput
              label={intl.formatMessage({ id: 'date' })}
              name={`${input.name}`}
              value={formik.values[`${input.name}${index}`]}
              onChange={formik.handleChange}
              placeholder={input.placeholder}
            />
          </div>
        ))}
        <DefaultButton size="md" messageId="button.enter" type="submit" className="mt-6" />
      </form>
    </div>
  );
};
