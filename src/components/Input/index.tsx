import Arrow from '@/public/icons/dropdownn-arrow.svg';
import Image from 'next/image';
import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  dropdown?: boolean;
  dropdownData?: string[];
  onDropdownSelect?: (selectedValue: any) => void;
  name: string;
  className?: string;
  isValid?: boolean;
  validationMessage?: string;
}

export const DefaultInput: FC<DefaultInputProps> = ({
  label,
  name,
  onChange,
  dropdown,
  dropdownData,
  onDropdownSelect,
  className,
  isValid = true,
  validationMessage,
  ...rest
}) => {
  const [shouldShowDropdown, setshouldShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setshouldShowDropdown(false);
    }
  };

  const handleDropdownSelect = useCallback(
    (selectedValue: string) => (event: React.MouseEvent) => {
      event.stopPropagation();

      console.log('target', event);

      onDropdownSelect?.(selectedValue);

      const syntheticEvent = {
        target: {
          name,
          value: selectedValue,
          type: 'change',
        },
      } as ChangeEvent<HTMLInputElement>;

      onChange?.(syntheticEvent);

      setshouldShowDropdown(false);
    },
    [name, onChange, onDropdownSelect],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${className} relative`} ref={dropdownRef}>
      <label htmlFor={name} className="mb-2 inline-block">
        {label}
      </label>
      <div
        className={`relative flex h-11 w-full justify-between rounded-full border-2 ${
          dropdown && 'cursor-pointer'
        } ${isValid ? 'border-purple' : 'border-red'}`}
        onClick={() => setshouldShowDropdown((prevState) => !prevState)}
      >
        <input
          name={name}
          className={`w-full overflow-hidden rounded-full px-10 align-middle text-sm outline-none placeholder:text-sm placeholder:text-lightGray ${
            dropdown && 'cursor-pointer'
          }`}
          onChange={onChange}
          {...rest}
        />
        {dropdown && (
          <Image
            className={`absolute bottom-0 right-7 top-0 m-auto transition-all ${
              shouldShowDropdown ? 'rotate-180 ' : 'rotate-0'
            }`}
            src={Arrow}
            alt=""
          />
        )}
      </div>
      {dropdown && (
        <div
          className={`absolute left-0 right-0 z-20 flex flex-col gap-1 pt-1 ${
            shouldShowDropdown ? 'show transition-all' : 'hidden'
          }`}
        >
          {dropdownData?.map((el) => (
            <div
              className="flex h-8 cursor-pointer items-center rounded-full bg-slate-100 px-10 text-sm hover:bg-purple hover:text-white"
              key={el}
              onClick={handleDropdownSelect(el)}
            >
              {el}
            </div>
          ))}
        </div>
      )}
      {validationMessage && (
        <span className="absolute mt-[2px] text-xs text-rose-400">{validationMessage}</span>
      )}
    </div>
  );
};
