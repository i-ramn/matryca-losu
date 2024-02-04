'use client';

import { DefaultButton } from '@/components/Buttons/DefaultButton';
import { DefaultInput } from '@/components/Input';
import { Spinner } from '@/components/Spinner';
import { useTranslate } from '@/hooks/useTranslate';
import { DefaultState } from '@/store/rootReducer';
import { MessageIds } from '@/types/i18n';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CALCULATIONS_REQUEST } from '../../actions';
import { useFateForm } from '../../hooks/useFateForm';
import { SET_USER_NAME } from '@/store/user/userActions';

export const FateForm = () => {
  const { isLoading } = useSelector((state: DefaultState) => state.calculation);
  const { handleTranslate } = useTranslate();
  const dispatch = useDispatch();

  const [val, setVal] = useState('');

  const { formValues, initialValues, validationSchema, formatText } = useFateForm();

  const formik = useFormik({
    initialValues,
    onSubmit: async (val) => {
      dispatch(GET_CALCULATIONS_REQUEST(val.date));
      dispatch(SET_USER_NAME(val.name));
    },
    validationSchema,
  });

  const handleDropdownSelect = useCallback(
    (fieldName: string, selectedValue: string) => {
      formik.handleChange({
        target: {
          name: fieldName,
          value: selectedValue,
        },
      });
    },
    [formik],
  );

  return (
    <>
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="self-center" />
        </div>
      ) : (
        <>
          <form
            onSubmit={formik.handleSubmit}
            className="grid w-full grid-cols-1 gap-x-28 md:grid-cols-2 md:gap-y-3"
          >
            {formValues.map(({ name, placeholder, type, dropdown }, id) => (
              <DefaultInput
                key={id}
                label={handleTranslate(name as MessageIds)}
                placeholder={placeholder}
                type={type}
                dropdown={Array.isArray(dropdown)}
                dropdownData={dropdown}
                onDropdownSelect={(selectedValue) => handleDropdownSelect(name, selectedValue)}
                isValid={!(formik.touched[name] && formik.errors[name])}
                validationMessage={
                  formik.errors[name] && formik.touched[name] ? formik.errors[name] : ''
                }
                onChange={(e) => {
                  const fieldName = e.target.name;
                  const formattedText = formatText(e.target.value) as string;

                  if (fieldName === 'date') {
                    if (formattedText.match(/^(\d{0,2}\.?\d{0,2}\.?\d{0,4})?$/)) {
                      formik.setFieldValue('date', formattedText);
                    }
                  } else {
                    formik.handleChange(e);
                  }
                }}
                name={name}
                value={formik.values[name]}
              />
            ))}
            <DefaultButton size="md" messageId="button.enter" type="submit" className="mt-6" />
          </form>
        </>
      )}
    </>
  );
};
