'use client';
import { FC, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useChildrenForm } from './useChildrenForm';
import { useFormik } from 'formik';
import { DefaultInput } from '@/components/Input';
import { useTranslate } from '@/hooks/useTranslate';
import { DefaultButton } from '@/components/Buttons/DefaultButton';
import { MessageIds } from '@/types/i18n';

interface ChildrenCalculatorProps {}

export const Children: FC<ChildrenCalculatorProps> = ({}) => {
  const { formValues, initialValues } = useChildrenForm();
  const intl = useIntl();
  const { handleTranslate } = useTranslate();

  const formik = useFormik({
    initialValues,
    onSubmit: (value) => console.log(value),
  });

  intl.formatMessage({ id: 'appeal' });
  const handleDropdownSelect = useCallback((fieldName: string, selectedValue: string) => {
    console.log(selectedValue);
    console.log(fieldName);

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
        <FormattedMessage id="home.free-calculator.childern.title" />
      </h2>
      <p className="mb-10">
        <FormattedMessage id="home.free-calculator.childern.description" />
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2 md:gap-y-3"
      >
        {formValues.map(({ name, placeholder, dropdown }, index, array) => (
          <DefaultInput
            key={index}
            value={formik.values[name]}
            label={handleTranslate(name as MessageIds)}
            name={name}
            className={`${
              index === array.length - 1 && 'md:col-start-1 md:col-end-3 md:row-start-2'
            }`}
            dropdown={Array.isArray(dropdown)}
            dropdownData={dropdown?.map((item) => handleTranslate(item as MessageIds))}
            placeholder={placeholder}
            onDropdownSelect={(selectedValue) => handleDropdownSelect(name, selectedValue)}
          />
        ))}
        <DefaultButton size="md" messageId="button.enter" type="submit" className="mt-6" />
      </form>
    </div>
  );
};
