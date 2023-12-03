'use client';
import { useFormik } from 'formik';
import { useCallback, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import { DefaultButton } from '@/components/Buttons/DefaultButton';
import { DefaultInput } from '@/components/Input';
import { useTranslate } from '@/hooks/useTranslate';
import { DefaultState } from '@/store/rootReducer';
import { MessageIds } from '@/types/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CALCULATIONS_REQUEST } from './actions';
import { useFateForm } from './useFateForm';

export const FateCalculator = () => {
  const { formValues, initialValues, validationSchema, handleSubmit } = useFateForm();
  const { handleTranslate } = useTranslate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: DefaultState) => state.calculation);

  const formik = useFormik({
    initialValues,
    onSubmit: async (val) => dispatch(GET_CALCULATIONS_REQUEST(val.date)),
    validationSchema,
  });

  const handleDropdownSelect = useCallback((fieldName: string, selectedValue: string) => {
    formik.handleChange({
      target: {
        name: fieldName,
        value: selectedValue,
      },
    });
  }, []);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <div className="lg:min-h-[300px]">
      {isLoading ? (
        <div className="m-auto h-5 w-5 bg-red" />
      ) : (
        <>
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
            {formValues.map(({ name, placeholder, type, dropdown }, id) => (
              <>
                <DefaultInput
                  key={name}
                  label={handleTranslate(name as MessageIds)}
                  placeholder={placeholder}
                  type={type}
                  dropdown={Array.isArray(dropdown)}
                  dropdownData={dropdown}
                  onDropdownSelect={(selectedValue) => handleDropdownSelect(name, selectedValue)}
                  isValid={formik.touched[name] && formik.errors[name] ? false : true}
                  validationMessage={
                    formik.errors[name] && formik.touched[name] ? formik.errors[name] : ''
                  }
                  {...formik.getFieldProps(name)}
                />
              </>
            ))}
            <DefaultButton size="md" messageId="button.enter" type="submit" className="mt-6" />
          </form>
        </>
      )}
    </div>
  );
};
