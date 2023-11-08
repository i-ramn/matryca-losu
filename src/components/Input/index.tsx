import { FC, InputHTMLAttributes } from 'react';

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const DefaultInput: FC<DefaultInputProps> = ({ label, name, onChange, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 inline-block">
        {label}
      </label>
      <input
        name={name}
        className="placeholder:text-lightGray flex h-11 w-full rounded-full border-2 border-purple px-10 align-middle text-sm placeholder:text-sm "
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
